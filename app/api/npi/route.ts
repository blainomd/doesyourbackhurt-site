import { NextRequest, NextResponse } from "next/server";

// NPI taxonomy codes for spine specialists
const SPINE_TAXONOMIES = [
  "207X00000X", // Orthopaedic Surgery
  "207XS0114X", // Orthopaedic Surgery — Spine Surgery
  "2084N0400X", // Neurology
  "207T00000X", // Neurological Surgery
  "208600000X", // Surgery
  "207XX0004X", // Orthopaedic Surgery — Hand Surgery
  "207XX0801X", // Orthopaedic Surgery — Adult Reconstructive
  "225100000X", // Physical Therapist
  "2251C2600X", // Physical Therapist — Orthopedic
];

interface NPIProvider {
  number: string;
  basic: {
    first_name?: string;
    last_name?: string;
    name?: string;
    credential?: string;
    status?: string;
  };
  taxonomies?: Array<{
    desc?: string;
    primary?: boolean;
    code?: string;
  }>;
  addresses?: Array<{
    address_purpose?: string;
    city?: string;
    state?: string;
    telephone_number?: string;
  }>;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const nameQuery = searchParams.get("name") || "";
    const npiQuery = searchParams.get("npi") || "";
    const stateFilter = searchParams.get("state") || "";
    const cityFilter = searchParams.get("city") || "";

    const params = new URLSearchParams({
      version: "2.1",
      limit: "15",
      enumeration_type: "NPI-1", // Individual providers only
    });

    if (npiQuery && /^\d{10}$/.test(npiQuery)) {
      params.set("number", npiQuery);
    } else {
      if (nameQuery) {
        const parts = nameQuery.trim().split(/\s+/);
        if (parts.length >= 2) {
          params.set("first_name", parts[0]);
          params.set("last_name", parts.slice(1).join(" "));
        } else {
          params.set("last_name", nameQuery);
        }
      }
      // Default to spine-related taxonomy if no specific NPI
      params.set("taxonomy_description", "Orthopaedic");
    }

    if (stateFilter) params.set("state", stateFilter);
    if (cityFilter) params.set("city", cityFilter);

    const url = `https://npiregistry.cms.hhs.gov/api/?${params.toString()}`;
    const res = await fetch(url, {
      headers: { Accept: "application/json" },
      next: { revalidate: 300 }, // Cache 5 minutes
    });

    if (!res.ok) {
      return NextResponse.json({ results: [], count: 0 }, { status: 200 });
    }

    const data = await res.json();
    const providers: NPIProvider[] = data.results || [];

    const results = providers
      .filter((p) => p.basic?.status === "A") // Active providers only
      .map((p) => {
        const practice = p.addresses?.find((a) => a.address_purpose === "LOCATION") || p.addresses?.[0];
        const primaryTax = p.taxonomies?.find((t) => t.primary) || p.taxonomies?.[0];
        return {
          npi: p.number,
          firstName: p.basic.first_name || "",
          lastName: p.basic.last_name || p.basic.name || "",
          credential: p.basic.credential || "",
          specialty: primaryTax?.desc || "Spine Specialist",
          city: practice?.city || "",
          state: practice?.state || "",
          phone: practice?.telephone_number || "",
        };
      });

    return NextResponse.json({ results, count: data.result_count || results.length });
  } catch (err) {
    console.error("NPI route error:", err);
    return NextResponse.json({ results: [], count: 0 }, { status: 200 });
  }
}
