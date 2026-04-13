"use client";

import { useState } from "react";
import { siteConfig } from "@/site.config";
import Assessment from "@/app/components/Assessment";

/* ─── Icon Components ─────────────────────────────────────────────── */

function HeartPulseIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 6C12.5 6 10 8.5 8 12c-2-1-4 0-4 2s1.5 3.5 3 4c1 3 4 6 9 8 5-2 8-5 9-8 1.5-.5 3-2 3-4s-2-3-4-2c-2-3.5-4.5-6-8-6z"
        fill={siteConfig.primaryColor}
        opacity="0.9"
      />
      <path
        d="M8 17h4l2-3 2 5 2-4 2 2h4"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={siteConfig.primaryColor} strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

/* ─── Differentiator Data ─────────────────────────────────────────── */

const differentiators = [
  {
    title: "Free assessment",
    description: "No paywall, no login required. Start a conversation and get answers immediately.",
    icon: "gift",
  },
  {
    title: "AI-powered",
    description: "Built on Claude, the most capable AI for healthcare reasoning. Evidence-based, not guesswork.",
    icon: "brain",
  },
  {
    title: "Voice-enabled",
    description: "Talk naturally with Gemini voice. Describe your symptoms like you would to a doctor.",
    icon: "mic",
  },
  {
    title: "Claude connector",
    description: "Install the MCP connector in Claude Desktop for persistent, personalized health intelligence.",
    icon: "plug",
  },
  {
    title: "Path to real care",
    description: "When you need a specialist, we connect you to physicians who actually practice evidence-based care.",
    icon: "path",
  },
  {
    title: "HSA/FSA eligible",
    description: "Many services qualify for pre-tax health spending. Your care can pay for itself.",
    icon: "dollar",
  },
];

function DifferentiatorIcon({ icon }: { icon: string }) {
  const color = siteConfig.primaryColor;
  const common = "w-8 h-8";
  switch (icon) {
    case "gift":
      return <svg className={common} fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H4.5A1.5 1.5 0 013 19.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18" /></svg>;
    case "brain":
      return <svg className={common} fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.591 1.591a2.25 2.25 0 01-1.591.659H8.182a2.25 2.25 0 01-1.591-.659L5 14.5m14 0V19a2 2 0 01-2 2H7a2 2 0 01-2-2v-4.5" /></svg>;
    case "mic":
      return <svg className={common} fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" /></svg>;
    case "plug":
      return <svg className={common} fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>;
    case "path":
      return <svg className={common} fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>;
    case "dollar":
      return <svg className={common} fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    default:
      return null;
  }
}

/* ─── Chat Component ─────────────────────────────────────────────── */

function SageChat() {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const context = {
    siteName: siteConfig.name,
    sections: siteConfig.sections,
    warningSigns: siteConfig.warningSigns,
  };

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return;
    const userMsg = { role: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text.trim(), context, history: messages }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "sage", text: data.reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "sage", text: "I'm having trouble connecting. Please try again." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {/* Conversation starters — shown when no messages */}
      {messages.length === 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-6">
          {siteConfig.conversationStarters.map((starter, i) => (
            <button
              key={i}
              onClick={() => sendMessage(starter)}
              className="text-left px-5 py-4 rounded-xl bg-white border border-gray-200 text-gray-700 font-medium transition-all hover:border-primary hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
            >
              {starter}
            </button>
          ))}
        </div>
      )}

      {/* Messages */}
      {messages.length > 0 && (
        <div className="max-w-2xl mx-auto mb-4 space-y-4 max-h-[500px] overflow-y-auto">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[85%] rounded-2xl px-5 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                msg.role === "user"
                  ? "text-white rounded-br-sm"
                  : "bg-gray-100 text-gray-800 rounded-bl-sm"
              }`} style={msg.role === "user" ? { backgroundColor: siteConfig.primaryColor } : undefined}>
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-5 py-3">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Input */}
      <form onSubmit={(e) => { e.preventDefault(); sendMessage(input); }} className="max-w-2xl mx-auto flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Ask anything about ${siteConfig.name.toLowerCase()}...`}
          className="flex-1 px-5 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:ring-2 focus:border-transparent"
          style={{ "--tw-ring-color": siteConfig.primaryColor } as React.CSSProperties}
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="px-5 py-3 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90 disabled:opacity-50"
          style={{ backgroundColor: siteConfig.primaryColor }}
        >
          Send
        </button>
      </form>
      {messages.length > 0 && (
        <p className="text-center text-xs text-gray-400 mt-3">Sage provides general health information, not medical advice. See a provider for diagnosis.</p>
      )}
    </div>
  );
}

/* ─── Doctor Visit Companion ─────────────────────────────────────── */

function DoctorVisitCompanion() {
  const [tab, setTab] = useState<"prepare" | "record">("prepare");
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [customSymptom, setCustomSymptom] = useState("");
  const [duration, setDuration] = useState("");
  const [severity, setSeverity] = useState(5);
  const [doctorNotes, setDoctorNotes] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [nextSteps, setNextSteps] = useState("");
  const [saved, setSaved] = useState(false);
  const [cardGenerated, setCardGenerated] = useState(false);

  const COMMON_SYMPTOMS = siteConfig.sections.slice(0, 6).map((s: { title: string }) => s.title);

  function toggleSymptom(s: string) {
    setSymptoms((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);
  }

  function addCustom() {
    if (customSymptom.trim()) {
      setSymptoms((prev) => [...prev, customSymptom.trim()]);
      setCustomSymptom("");
    }
  }

  function generateCard() {
    setCardGenerated(true);
    // Save to localStorage for ComfortCard integration
    const visit = {
      condition: siteConfig.name,
      date: new Date().toISOString(),
      symptoms, duration, severity,
      doctorNotes, diagnosis, nextSteps,
    };
    const visits = JSON.parse(localStorage.getItem("doctor-visits") || "[]");
    visits.push(visit);
    localStorage.setItem("doctor-visits", JSON.stringify(visits));
  }

  function saveRecord() {
    const visit = {
      condition: siteConfig.name,
      date: new Date().toISOString(),
      doctorNotes, diagnosis, nextSteps,
      symptoms, severity,
    };
    const visits = JSON.parse(localStorage.getItem("doctor-visits") || "[]");
    visits.push(visit);
    localStorage.setItem("doctor-visits", JSON.stringify(visits));
    setSaved(true);
  }

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: siteConfig.accentColor }}>
            Your doctor visit companion
          </h2>
          <p className="text-gray-500 mt-2">Prepare before. Record after. Keep it forever in your ComfortCard.</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          <button onClick={() => setTab("prepare")}
            className={`px-6 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${tab === "prepare" ? "text-white shadow-lg" : "bg-white text-gray-500 border border-gray-200"}`}
            style={tab === "prepare" ? { backgroundColor: siteConfig.primaryColor } : undefined}>
            Before your visit
          </button>
          <button onClick={() => setTab("record")}
            className={`px-6 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${tab === "record" ? "text-white shadow-lg" : "bg-white text-gray-500 border border-gray-200"}`}
            style={tab === "record" ? { backgroundColor: siteConfig.primaryColor } : undefined}>
            After your visit
          </button>
        </div>

        {/* PREPARE TAB */}
        {tab === "prepare" && !cardGenerated && (
          <div className="space-y-6">
            {/* Symptom picker */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <p className="font-bold text-sm mb-3" style={{ color: siteConfig.accentColor }}>What are you experiencing?</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {COMMON_SYMPTOMS.map((s: string) => (
                  <button key={s} onClick={() => toggleSymptom(s)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${symptoms.includes(s) ? "text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                    style={symptoms.includes(s) ? { backgroundColor: siteConfig.primaryColor } : undefined}>
                    {s}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <input value={customSymptom} onChange={(e) => setCustomSymptom(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addCustom()}
                  placeholder="Add your own..." className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm outline-none focus:ring-1" style={{ "--tw-ring-color": siteConfig.primaryColor } as React.CSSProperties} />
                <button onClick={addCustom} className="px-3 py-2 rounded-lg text-xs font-bold text-white cursor-pointer" style={{ backgroundColor: siteConfig.primaryColor }}>Add</button>
              </div>
            </div>

            {/* Duration */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <p className="font-bold text-sm mb-3" style={{ color: siteConfig.accentColor }}>How long has this been going on?</p>
              <div className="flex flex-wrap gap-2">
                {["A few days", "1-2 weeks", "1-3 months", "3-6 months", "6+ months", "Years"].map((d) => (
                  <button key={d} onClick={() => setDuration(d)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${duration === d ? "text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                    style={duration === d ? { backgroundColor: siteConfig.primaryColor } : undefined}>
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Severity slider */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex justify-between items-center mb-3">
                <p className="font-bold text-sm" style={{ color: siteConfig.accentColor }}>Pain severity</p>
                <span className="text-2xl font-bold" style={{ color: siteConfig.primaryColor }}>{severity}/10</span>
              </div>
              <input type="range" min={1} max={10} value={severity} onChange={(e) => setSeverity(Number(e.target.value))}
                className="w-full accent-current" style={{ color: siteConfig.primaryColor }} />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>Mild</span><span>Moderate</span><span>Severe</span>
              </div>
            </div>

            {/* Generate */}
            <button onClick={generateCard} disabled={symptoms.length === 0}
              className="w-full py-4 rounded-xl text-white font-bold text-lg transition-all hover:scale-[1.02] disabled:opacity-40 cursor-pointer shadow-lg"
              style={{ backgroundColor: siteConfig.primaryColor }}>
              Generate my doctor visit card
            </button>
          </div>
        )}

        {/* GENERATED CARD */}
        {tab === "prepare" && cardGenerated && (
          <div className="bg-white rounded-2xl border-2 overflow-hidden shadow-xl" style={{ borderColor: siteConfig.primaryColor }}>
            <div className="p-6" style={{ backgroundColor: siteConfig.primaryColor }}>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-white/60 text-xs font-medium uppercase tracking-wider">Bring to your doctor</p>
                  <h3 className="text-white text-xl font-bold mt-1">{siteConfig.name} Visit Summary</h3>
                </div>
                <p className="text-white/50 text-xs">{new Date().toLocaleDateString()}</p>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Symptoms</p>
                <div className="flex flex-wrap gap-2">
                  {symptoms.map((s) => (
                    <span key={s} className="px-3 py-1 rounded-full text-xs font-medium text-white" style={{ backgroundColor: siteConfig.primaryColor }}>{s}</span>
                  ))}
                </div>
              </div>
              {duration && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Duration</p>
                  <p className="text-sm font-medium">{duration}</p>
                </div>
              )}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Pain severity</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${severity * 10}%`, backgroundColor: severity > 7 ? "#DC2626" : severity > 4 ? "#F59E0B" : siteConfig.primaryColor }} />
                  </div>
                  <span className="text-sm font-bold" style={{ color: siteConfig.primaryColor }}>{severity}/10</span>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Questions to ask your doctor</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-gray-300">1.</span> What is causing my {siteConfig.name.toLowerCase()} symptoms?</li>
                  <li className="flex gap-2"><span className="text-gray-300">2.</span> Do I need imaging (X-ray, MRI)?</li>
                  <li className="flex gap-2"><span className="text-gray-300">3.</span> What are my treatment options?</li>
                  <li className="flex gap-2"><span className="text-gray-300">4.</span> Should I see a specialist?</li>
                  <li className="flex gap-2"><span className="text-gray-300">5.</span> What can I do at home to manage this?</li>
                </ul>
              </div>
              <div className="border-t border-gray-100 pt-4 flex flex-col sm:flex-row gap-3">
                <button onClick={() => window.print()} className="flex-1 py-3 rounded-xl text-sm font-bold border-2 transition-all hover:opacity-80 cursor-pointer" style={{ borderColor: siteConfig.primaryColor, color: siteConfig.primaryColor }}>
                  Print this card
                </button>
                <button onClick={() => setTab("record")} className="flex-1 py-3 rounded-xl text-white text-sm font-bold transition-all hover:opacity-90 cursor-pointer" style={{ backgroundColor: siteConfig.primaryColor }}>
                  After your visit &rarr;
                </button>
              </div>
            </div>
            <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
              <p className="text-xs text-gray-400 text-center">Generated by {siteConfig.domain} &middot; Save to your <a href="https://www.comfortcard.org" className="font-medium" style={{ color: siteConfig.primaryColor }}>ComfortCard</a></p>
            </div>
          </div>
        )}

        {/* RECORD TAB */}
        {tab === "record" && !saved && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <p className="font-bold text-sm mb-3" style={{ color: siteConfig.accentColor }}>What did your doctor say?</p>
              <textarea value={doctorNotes} onChange={(e) => setDoctorNotes(e.target.value)} rows={3}
                placeholder="The doctor said my back pain is likely from... They recommended..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:ring-1 resize-none" style={{ "--tw-ring-color": siteConfig.primaryColor } as React.CSSProperties} />
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <p className="font-bold text-sm mb-3" style={{ color: siteConfig.accentColor }}>Diagnosis (if given)</p>
              <input value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)}
                placeholder="e.g., Lumbar disc herniation, spinal stenosis, muscle strain..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:ring-1" style={{ "--tw-ring-color": siteConfig.primaryColor } as React.CSSProperties} />
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <p className="font-bold text-sm mb-3" style={{ color: siteConfig.accentColor }}>Next steps</p>
              <textarea value={nextSteps} onChange={(e) => setNextSteps(e.target.value)} rows={2}
                placeholder="Physical therapy 2x/week, follow up in 6 weeks, get MRI..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:ring-1 resize-none" style={{ "--tw-ring-color": siteConfig.primaryColor } as React.CSSProperties} />
            </div>
            <button onClick={saveRecord} disabled={!doctorNotes.trim()}
              className="w-full py-4 rounded-xl text-white font-bold text-lg transition-all hover:scale-[1.02] disabled:opacity-40 cursor-pointer shadow-lg"
              style={{ backgroundColor: siteConfig.primaryColor }}>
              Save to my ComfortCard
            </button>
          </div>
        )}

        {/* SAVED CONFIRMATION */}
        {tab === "record" && saved && (
          <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center">
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: siteConfig.primaryColor + "15" }}>
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke={siteConfig.primaryColor} strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: siteConfig.accentColor }}>Visit recorded</h3>
            <p className="text-gray-500 text-sm mb-6">Your doctor visit notes are saved. View them anytime in your ComfortCard.</p>
            <a href="https://www.comfortcard.org" className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:scale-105"
              style={{ backgroundColor: siteConfig.primaryColor }}>
              Open my ComfortCard
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── Find Specialist (NPI Search) ────────────────────────────────── */

interface NPIResult {
  npi: string; firstName: string; lastName: string; credential: string;
  specialty: string; city: string; state: string; phone: string;
}

function FindSpecialist() {
  const [query, setQuery] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [results, setResults] = useState<NPIResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [resultCount, setResultCount] = useState(0);

  async function search(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim() && !stateFilter && !cityFilter) return;
    setLoading(true);
    setSearched(true);
    try {
      const isNPI = /^\d{10}$/.test(query.trim());
      const params = new URLSearchParams();
      if (isNPI) params.set("npi", query.trim());
      else if (query.trim()) params.set("name", query.trim());
      if (stateFilter) params.set("state", stateFilter);
      if (cityFilter) params.set("city", cityFilter);
      params.set("condition", siteConfig.connectorKey);
      const res = await fetch(`/api/npi?${params.toString()}`);
      const data = await res.json();
      setResults(data.results || []);
      setResultCount(data.count || 0);
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  const specialistType = (siteConfig as Record<string, unknown>).specialistType as string || "specialist";

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2" style={{ color: siteConfig.accentColor }}>
          Find a {specialistType}
        </h2>
        <p className="text-center text-gray-500 mb-8">Real-time search of every {specialistType.toLowerCase()} in the United States. Powered by the CMS NPI Registry.</p>

        <form onSubmit={search} className="max-w-2xl mx-auto mb-8 space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}
              placeholder="Doctor name or NPI number..."
              className="flex-1 px-5 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:ring-2 focus:border-transparent"
              style={{ "--tw-ring-color": siteConfig.primaryColor } as React.CSSProperties} />
            <button type="submit" disabled={loading}
              className="px-6 py-3 rounded-xl text-white text-sm font-bold transition-all hover:opacity-90 disabled:opacity-50 cursor-pointer"
              style={{ backgroundColor: siteConfig.primaryColor }}>
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
          <div className="flex gap-3">
            <input type="text" value={cityFilter} onChange={(e) => setCityFilter(e.target.value)}
              placeholder="City (optional)"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-200 text-xs outline-none focus:ring-1"
              style={{ "--tw-ring-color": siteConfig.primaryColor } as React.CSSProperties} />
            <select value={stateFilter} onChange={(e) => setStateFilter(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-200 text-xs outline-none bg-white">
              <option value="">All states</option>
              {["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY","DC"].map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </form>

        {searched && results.length === 0 && !loading && (
          <p className="text-center text-gray-400 text-sm">No {specialistType.toLowerCase()}s found. Try broadening your search.</p>
        )}

        {results.length > 0 && (
          <div className="max-w-2xl mx-auto">
            <p className="text-xs text-gray-400 mb-3">{resultCount} {specialistType.toLowerCase()}s found</p>
            <div className="space-y-3">
              {results.map((r) => (
                <div key={r.npi} className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold" style={{ color: siteConfig.accentColor }}>
                        {r.firstName} {r.lastName}{r.credential ? `, ${r.credential}` : ""}
                      </h3>
                      <p className="text-gray-500 text-sm">{r.specialty}</p>
                      <p className="text-gray-400 text-xs mt-1">{r.city}, {r.state} &middot; NPI: {r.npi}</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      {r.phone && (
                        <a href={`tel:${r.phone}`} className="px-3 py-2 rounded-lg text-xs font-bold text-white"
                          style={{ backgroundColor: siteConfig.primaryColor }}>
                          Call
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-300 text-xs mt-6">Source: CMS NPPES NPI Registry. Real-time data. Not affiliated with any listed provider.</p>
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── Page Component ──────────────────────────────────────────────── */

export default function Home() {
  // No email capture — direct value only

  const mcpSnippet = `"${siteConfig.connectorKey}": {
  "command": "npx",
  "args": ["-y", "@anthropic-ai/mcp-remote",
    "https://solvinghealth.com/mcp"]
}`;

  return (
    <div className="min-h-screen">
      {/* ── Header ─────────────────────────────────────────────── */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <HeartPulseIcon className="w-8 h-8" />
            <span className="text-lg font-bold" style={{ color: siteConfig.accentColor }}>
              {siteConfig.name}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#connector"
              className="hidden sm:inline-flex items-center text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: siteConfig.primaryColor }}
            >
              Get the connector
              <ArrowIcon />
            </a>
            <a
              href="#chat"
              className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: siteConfig.primaryColor }}
            >
              Start assessment
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-24 md:pt-44 md:pb-36"
        style={{ backgroundColor: siteConfig.accentColor }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full opacity-10"
            style={{ backgroundColor: siteConfig.primaryColor }}
          />
          <div
            className="absolute -bottom-1/3 -left-1/4 w-[600px] h-[600px] rounded-full opacity-5"
            style={{ backgroundColor: siteConfig.primaryColor }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight whitespace-pre-line">
            {siteConfig.heroTitle}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {siteConfig.heroSubtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#chat"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-bold text-white transition-all hover:scale-105 shadow-lg"
              style={{ backgroundColor: siteConfig.primaryColor }}
            >
              Talk to Sage
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
            <a
              href="#connector"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-bold border-2 border-white/30 text-white transition-all hover:bg-white/10"
            >
              Get the connector
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ── Back Pain Assessment ──────────────────────────────── */}
      <section id="assessment" className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2" style={{ color: siteConfig.accentColor }}>
            Back Pain Assessment
          </h2>
          <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">
            8 questions including red flag screening. Get a clear recommendation: self-care, see your doctor, see a specialist, or seek emergency care.
          </p>
          <Assessment />
        </div>
      </section>

      {/* ── Sage Conversation ─────────────────────────────────── */}
      <section id="chat" className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2" style={{ color: siteConfig.accentColor }}>
            Talk to Sage
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Ask anything about {siteConfig.name.toLowerCase()}. Sage knows the evidence. Pick a question or type your own.
          </p>
          <SageChat />
        </div>
      </section>

      {/* ── Risk Factors / Key Info Grid ───────────────────────── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ color: siteConfig.accentColor }}>
            What you should know
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Key risk factors and information about {siteConfig.name.toLowerCase()}.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.sections.map((section, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-white border border-gray-100 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm mb-4"
                  style={{ backgroundColor: siteConfig.primaryColor }}
                >
                  {i + 1}
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: siteConfig.accentColor }}
                >
                  {section.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Warning Signs ──────────────────────────────────────── */}
      <section className="py-20 bg-amber-50/50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-3">
            <AlertIcon />
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: siteConfig.accentColor }}>
              When to seek help
            </h2>
          </div>
          <p className="text-center text-gray-500 mb-10">
            See a healthcare provider if you experience any of these warning signs.
          </p>
          <div className="space-y-4">
            {siteConfig.warningSigns.map((sign, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 bg-white rounded-xl border border-amber-100"
              >
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-amber-700 text-xs font-bold">{i + 1}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{sign}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why This Is Different ──────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ color: siteConfig.accentColor }}>
            Why this is different
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Not another symptom checker. A new way to understand and manage your health.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((diff, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <DifferentiatorIcon icon={diff.icon} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{diff.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{diff.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Doctor Visit Companion ─────────────────────────────── */}
      <DoctorVisitCompanion />

      {/* ── Find a Specialist (NPI Search) ────────────────────── */}
      <FindSpecialist />

      {/* ── Recommended Products ───────────────────────────────── */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2" style={{ color: siteConfig.accentColor }}>
            Get the right gear
          </h2>
          <p className="text-center text-gray-500 mb-8">Products that help manage {siteConfig.name.toLowerCase()}. HSA/FSA eligible items marked.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {((siteConfig as Record<string, unknown>).products as Array<{name: string; price: string; amazon: string; hsa: boolean; desc: string}> || []).map((p, i) => (
              <a key={i} href={p.amazon} target="_blank" rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-sm" style={{ color: siteConfig.accentColor }}>{p.name}</h3>
                  <span className="text-sm font-bold" style={{ color: siteConfig.primaryColor }}>{p.price}</span>
                </div>
                <p className="text-xs text-gray-500 mb-3">{p.desc}</p>
                <div className="flex items-center justify-between">
                  {p.hsa ? (
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold bg-green-50 text-green-700 border border-green-200">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      HSA/FSA eligible
                    </span>
                  ) : (
                    <span className="text-[10px] text-gray-300">Not HSA eligible</span>
                  )}
                  <span className="text-xs font-medium group-hover:underline" style={{ color: siteConfig.primaryColor }}>View on Amazon</span>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-400">HSA/FSA eligible items can be purchased pre-tax, saving you 28-36%. <a href="https://www.comfortcard.org" className="font-medium" style={{ color: siteConfig.primaryColor }}>Learn more via ComfortCard</a></p>
          </div>
        </div>
      </section>

      {/* ── Connector CTA ──────────────────────────────────────── */}
      <section
        id="connector"
        className="py-20"
        style={{ backgroundColor: siteConfig.accentColor }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Install the Claude connector
          </h2>
          <p className="text-gray-300 mb-10 max-w-xl mx-auto">
            Add this to your Claude Desktop configuration. Get persistent, personalized {siteConfig.name.toLowerCase()} intelligence that remembers your history and learns your needs.
          </p>
          <div className="bg-gray-900 rounded-2xl p-6 text-left max-w-lg mx-auto shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-gray-500 text-xs font-mono">claude_desktop_config.json</span>
            </div>
            <pre className="text-green-400 text-sm font-mono overflow-x-auto leading-relaxed">
              {mcpSnippet}
            </pre>
          </div>
          <button
            onClick={() => navigator.clipboard.writeText(mcpSnippet)}
            className="mt-6 inline-flex items-center px-6 py-3 rounded-xl text-sm font-bold transition-all hover:scale-105 text-white"
            style={{ backgroundColor: siteConfig.primaryColor }}
          >
            Copy to clipboard
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>

          {/* chanio Chrome extension CTA */}
          <div className="mt-12 border-t border-white/10 pt-10 max-w-xl mx-auto">
            <p className="text-gray-400 text-sm uppercase tracking-widest font-semibold mb-4">Using Chrome?</p>
            <a
              href="https://chanio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl px-6 py-4 transition-all text-left"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white">Get chanio — free</span>
                  <span className="text-xs text-gray-400 font-normal">Chrome · Arc · Brave · Edge</span>
                </div>
                <p className="text-gray-400 text-sm mt-0.5">Install once. Every health AI on this network knows who you are.</p>
              </div>
              <svg className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* HSALetter CTA */}
          <div className="mt-6 max-w-xl mx-auto">
            <p className="text-gray-400 text-sm uppercase tracking-widest font-semibold mb-4">Pay for wellness with your HSA</p>
            <a
              href="https://hsaletter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl px-6 py-4 transition-all text-left"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white">Make yoga &amp; wellness HSA-eligible</span>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full font-semibold">$199 LMN</span>
                </div>
                <p className="text-gray-400 text-sm mt-0.5">Physician-signed letter. Pay for yoga, massage, and more with pre-tax dollars — all year.</p>
              </div>
              <svg className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Evidence-Based Care ─────────────────────────────────── */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: siteConfig.accentColor }}>
            Part of something bigger
          </h2>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto">
            This site is one connector in a physician-governed health intelligence ecosystem.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href={siteConfig.ecosystemLinks.surgeonvalue}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-white border border-gray-100 transition-all hover:shadow-lg hover:-translate-y-1 text-left"
            >
              <div className="flex items-center gap-2 mb-3">
                <CheckIcon />
                <h3 className="font-bold" style={{ color: siteConfig.accentColor }}>
                  SurgeonValue
                </h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                For physicians. Revenue intelligence, code capture, and patient engagement tools that make your practice run better.
              </p>
            </a>
            <a
              href={siteConfig.ecosystemLinks.coopccare}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-white border border-gray-100 transition-all hover:shadow-lg hover:-translate-y-1 text-left"
            >
              <div className="flex items-center gap-2 mb-3">
                <CheckIcon />
                <h3 className="font-bold" style={{ color: siteConfig.accentColor }}>
                  co-op.care
                </h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                For families. Worker-owned companion care, HSA/FSA savings, and AI-powered care coordination that grows with you.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* ── Action Band ──────────────────────────────────────── */}
      <section className="py-16 bg-surface border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-2" style={{ color: siteConfig.accentColor }}>
            Ready to take the next step?
          </h2>
          <p className="text-gray-500 mb-8 text-sm">
            Talk to Sage, find a spine specialist, or save money on your care with a ComfortCard.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            <a
              href="#chat"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-bold transition-all hover:opacity-90 hover:scale-105 text-sm"
              style={{ backgroundColor: siteConfig.primaryColor }}
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Start free assessment
            </a>
            <a
              href={siteConfig.ecosystemLinks.surgeonvalue}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold border-2 transition-all hover:opacity-90 text-sm"
              style={{ borderColor: siteConfig.primaryColor, color: siteConfig.primaryColor }}
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              Find a spine specialist
            </a>
            <a
              href="https://www.comfortcard.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold border-2 border-gray-200 text-gray-600 transition-all hover:opacity-90 text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
              Save with ComfortCard
            </a>
          </div>
          <p className="mt-6 text-xs text-gray-400">
            Is your {siteConfig.name.toLowerCase()} treatment HSA-eligible?{" "}
            <a href="https://hsaletter.com" className="font-medium hover:underline" style={{ color: siteConfig.primaryColor }}>
              Check at hsaletter.com
            </a>
          </p>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className="py-12 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <HeartPulseIcon className="w-6 h-6" />
              <span className="font-bold text-gray-900">{siteConfig.name}</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a
                href={siteConfig.ecosystemLinks.solvinghealth}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition-colors"
              >
                SolvingHealth
              </a>
              <a
                href={siteConfig.ecosystemLinks.surgeonvalue}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition-colors"
              >
                SurgeonValue
              </a>
              <a
                href={siteConfig.ecosystemLinks.coopccare}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition-colors"
              >
                co-op.care
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-50 text-center">
            <p className="text-xs text-gray-400">
              This site provides health information, not medical advice. Always consult a qualified healthcare provider for diagnosis and treatment.
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Powered by{" "}
              <a
                href={siteConfig.ecosystemLinks.solvinghealth}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600 transition-colors"
                style={{ color: siteConfig.primaryColor }}
              >
                SolvingHealth
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
