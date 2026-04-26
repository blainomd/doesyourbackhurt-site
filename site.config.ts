// ============================================================
// site.config.ts — THE ONLY FILE YOU NEED TO EDIT
// ============================================================

export const siteConfig = {
  // ── Basic ──────────────────────────────────────────────────
  name: "Does Your Back Hurt",
  domain: "doesyourbackhurt.com",
  tagline: "Get answers about your back pain today.",
  description:
    "Free AI-powered back pain assessment. Understand herniated discs, sciatica, spinal stenosis, and when to see a spine specialist. No login required.",

  // ── Branding ───────────────────────────────────────────────
  primaryColor: "#0D7377",
  accentColor: "#1B2A4A",

  // ── Sage Chat Configuration ────────────────────────────────
  chatChannel: "doesyourbackhurt",
  voiceSite: "doesyourbackhurt",

  // ── Hero Section ───────────────────────────────────────────
  heroTitle: "Your back pain\ndeserves real answers.",
  heroSubtitle:
    "Free AI-powered back pain assessment. No login. No paywall. Just answers.",

  // ── Risk Factors / Key Information ─────────────────────────
  sections: [
    {
      title: "Herniated Disc",
      description:
        "A disc that bulges or ruptures and presses on nearby nerves. Causes sharp pain, numbness, or weakness that may radiate down one or both legs. Most common in the lower back.",
      href: "#chat",
    },
    {
      title: "Sciatica",
      description:
        "Pain that radiates along the sciatic nerve from the lower back through the hip and down the leg. Often caused by a herniated disc or bone spur compressing the nerve.",
      href: "#chat",
    },
    {
      title: "Spinal Stenosis",
      description:
        "Narrowing of the spinal canal that puts pressure on the spinal cord and nerves. Causes pain, numbness, or weakness, especially with prolonged standing or walking.",
      href: "#chat",
    },
    {
      title: "Muscle Strain",
      description:
        "The most common cause of back pain. Overstretching or tearing of back muscles or ligaments, often from heavy lifting or sudden awkward movement. Usually improves within weeks.",
      href: "#chat",
    },
    {
      title: "Non-Surgical Treatment",
      description:
        "Physical therapy, anti-inflammatory medications, heat and ice therapy, and core strengthening exercises resolve most back pain without surgery.",
      href: "https://kineticfirst.com/?ref=doesyourbackhurt",
    },
    {
      title: "When to See a Specialist",
      description:
        "If back pain is severe, lasts longer than six weeks, radiates down the leg, or is accompanied by weakness or bladder/bowel changes, a spine evaluation is warranted.",
      href: "https://harnesshealth.ai/find?specialty=orthopedic-surgery",
    },
  ],

  // ── Conversation Starters ──────────────────────────────────
  conversationStarters: [
    "What's causing my back pain?",
    "Do I have a herniated disc?",
    "What exercises help back pain?",
    "Should I see a spine specialist?",
  ],

  // ── Warning Signs ──────────────────────────────────────────
  warningSigns: [
    "Back pain after a fall or injury",
    "Pain radiating down the leg with numbness",
    "Weakness in the legs or difficulty walking",
    "Bladder or bowel control problems",
    "Back pain with fever or unexplained weight loss",
    "Night pain that wakes you from sleep",
    "Progressive worsening despite rest",
    "Back pain in a child or teenager",
  ],

  // ── Ecosystem Links ────────────────────────────────────────
  ecosystemLinks: {
    surgeonvalue: "https://www.surgeonvalue.com",
    coopccare: "https://www.co-op.care",
    solvinghealth: "https://solvinghealth.com",
  },

  // ── MCP Connector ──────────────────────────────────────────
  connectorKey: "doesyourbackhurt",

  // ── Find Care ───────────────────────────────────────────────
  specialistType: "Spine Specialist",
  zocdocSearch: "https://www.zocdoc.com/search?dr_specialty=orthopedic-surgery&reason_visit=back-pain",
  surgeonvalueSearch: "https://www.surgeonvalue.com",

  // ── Recommended Products ───────────────────────────────────
  products: [
    { name: "Lumbar Support Cushion", price: "$30", amazon: "https://www.amazon.com/s?k=lumbar+support+cushion", hsa: true, desc: "Supports the lower back curve during sitting" },
    { name: "Heating Pad (Large)", price: "$30", amazon: "https://www.amazon.com/s?k=heating+pad+back+pain", hsa: true, desc: "Heat therapy to relax tight back muscles" },
    { name: "TENS Unit", price: "$35", amazon: "https://www.amazon.com/s?k=TENS+unit+back+pain", hsa: true, desc: "Electrical nerve stimulation for back pain relief" },
    { name: "Foam Roller", price: "$25", amazon: "https://www.amazon.com/s?k=foam+roller+back+pain", hsa: false, desc: "Self-myofascial release for tight back muscles" },
    { name: "Inversion Table", price: "$120", amazon: "https://www.amazon.com/s?k=inversion+table+back+pain", hsa: false, desc: "Decompresses the spine to relieve disc pressure" },
    { name: "Posture Corrector", price: "$20", amazon: "https://www.amazon.com/s?k=posture+corrector+back+brace", hsa: true, desc: "Improves posture and reduces strain on the spine" },
  ],
};
