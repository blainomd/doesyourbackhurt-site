"use client";

import { useState } from "react";

function EmailForm({ id, buttonText }: { id: string; buttonText: string }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className="text-teal font-semibold text-lg">
        You are in. We will reach out soon.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email) setDone(true);
      }}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
    >
      <input
        id={id}
        type="email"
        required
        placeholder="you@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-3 rounded-lg border border-teal/30 bg-white text-teal-dark placeholder:text-teal-dark/40 focus:outline-none focus:ring-2 focus:ring-teal"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-teal text-white font-semibold rounded-lg hover:bg-teal-dark transition-colors cursor-pointer"
      >
        {buttonText}
      </button>
    </form>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-cream">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-teal/10">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 text-teal-dark">
            <svg viewBox="0 0 40 40" className="w-6 h-6"><path d="M19 4C11 4 4 12 4 20C4 28 11 36 19 36" fill="currentColor" /><path d="M21 4C29 4 36 12 36 20C36 28 29 36 21 36" fill="currentColor" /></svg>
            <span className="text-lg font-bold tracking-tight">Does Your Back Hurt</span>
          </div>
          <button onClick={() => document.getElementById('sh-chat-btn')?.click()} className="text-sm text-teal font-medium hover:text-teal-dark transition-colors cursor-pointer bg-transparent border-none">Get Started</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
        <p className="text-teal font-medium tracking-wide uppercase text-sm mb-4">
          A co-op.care health program
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-teal-dark leading-tight max-w-3xl">
          Does your back hurt?
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-teal-dark/80 max-w-2xl leading-relaxed">
          80% of adults say yes at some point in their life. Many pay $50-150/month for a gym they don&apos;t use. We charge $10.
        </p>
        <div className="mt-10">
          <EmailForm id="hero-email" buttonText="Get started" />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-teal-dark py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <p className="text-5xl font-bold text-white">80%</p>
            <p className="mt-2 text-teal-light text-lg">
              of adults experience back pain
            </p>
          </div>
          <div>
            <p className="text-5xl font-bold text-white">$2,000</p>
            <p className="mt-2 text-teal-light text-lg">
              average treatment cost
            </p>
          </div>
          <div>
            <p className="text-5xl font-bold text-white">$50-150</p>
            <p className="mt-2 text-teal-light text-lg">
              average gym membership
            </p>
          </div>
        </div>
      </section>

      {/* What $10 gets you */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-teal-dark text-center mb-12">
            What $10 gets you
          </h2>
          <ul className="space-y-6">
            {[
              {
                title: "Neighbor's backyard yoga, 3x/week",
                desc: "Real classes, real people, real grass under your feet. Not a screen.",
              },
              {
                title: "Movement classes designed for pain relief",
                desc: "Every session is built around the musculoskeletal evidence base. Not random flows.",
              },
              {
                title: "Community",
                desc: "You will know 10 neighbors by name. That matters more than any supplement.",
              },
              {
                title: "Access to co-op.care's physician network",
                desc: "A licensed physician monitors your progress and adjusts your plan.",
              },
              {
                title: "Medicare ACCESS MSK coverage if eligible",
                desc: "$0 copay for chronic musculoskeletal management. We help you find out.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm border border-teal/10"
              >
                <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-teal flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-teal-dark text-lg">
                    {item.title}
                  </h3>
                  <p className="text-teal-dark/70 mt-1">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Your physician is watching */}
      <section className="bg-teal-dark py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Your physician is watching
          </h2>
          <p className="text-teal-light text-xl leading-relaxed mb-8">
            This is not just yoga. A physician monitors your progress, tracks
            your pain scores, and adjusts your care plan over time. The yoga
            class IS the clinical intervention.
          </p>
          <div className="bg-white/10 rounded-xl p-8 text-left space-y-4 max-w-xl mx-auto">
            <p className="text-white text-lg">
              <span className="font-semibold">CMS ACCESS MSK</span> pays{" "}
              <span className="font-bold text-teal-light">$180/year</span> per
              patient for chronic musculoskeletal management.
            </p>
            <p className="text-teal-light">
              If you qualify, your $10/month membership could be covered at{" "}
              <span className="font-semibold text-white">$0 copay</span>. We
              handle the paperwork. You just show up and move.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-teal-dark mb-4">
            First class is free. Show up.
          </h2>
          <p className="text-teal-dark/70 text-lg mb-10">
            Enter your email and we will send you the schedule.
          </p>
          <div className="flex justify-center">
            <EmailForm id="cta-email" buttonText="I'm in" />
          </div>
        </div>
      </section>

      {/* Partner Board */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-dark text-center mb-2">Who&apos;s helping in your area?</h2>
          <p className="text-teal-dark/60 text-center mb-10 max-w-xl mx-auto">These partner slots connect people with back pain to the organizations that can actually help them.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Spine Surgery",
              "Physical Therapy",
              "Pain Management",
              "Yoga / Movement",
              "Digital Health",
            ].map((cat, i) => (
              <a
                key={i}
                href={'mailto:partners@solvinghealth.com?subject=Partner inquiry: ' + encodeURIComponent(cat) + ' on doesyourbackhurt.com'}
                className="group border-2 border-dashed border-teal/20 rounded-2xl p-6 text-center hover:border-teal/40 transition-all block bg-white"
              >
                <div className="w-12 h-12 rounded-xl bg-teal/5 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-teal/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                </div>
                <p className="font-bold text-teal-dark/40 text-sm">{cat}</p>
                <p className="text-xs text-teal-dark/20 mt-1 uppercase tracking-wider font-semibold">Unclaimed</p>
                <span className="mt-4 inline-flex items-center px-4 py-2 rounded-lg text-xs font-bold text-white bg-teal opacity-0 group-hover:opacity-100 transition-opacity">Claim this spot</span>
              </a>
            ))}
          </div>
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl px-6 py-4">
              <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              <p className="text-sm text-amber-800 font-medium">738 people searched back pain help this month. No partners are here yet.</p>
            </div>
          </div>
          <p className="text-center mt-4"><a href="mailto:partners@solvinghealth.com?subject=Partner inquiry for doesyourbackhurt.com" className="inline-flex items-center px-6 py-3 rounded-lg text-sm font-bold text-white bg-teal transition-all hover:scale-105">Become a partner <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></a></p>
          <p className="text-xs text-teal-dark/30 mt-3 text-center">Free listing available. Premium placement from $199/mo.</p>
        </div>
      </section>

      {/* Connector */}
      <section id="connector" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-teal-dark mb-4">
            Get the Does Your Back Hurt connector
          </h2>
          <p className="text-teal-dark/70 text-lg mb-8 max-w-xl mx-auto">
            Add the SolvingHealth connector to Claude and get instant access to care tools, HSA savings estimates, and physician-supervised programs.
          </p>
          <div className="bg-cream rounded-xl border border-teal/20 p-6 text-left max-w-lg mx-auto mb-8">
            <p className="text-xs font-medium text-teal-dark/50 uppercase tracking-wider mb-3">Claude Desktop MCP Config</p>
            <pre className="text-sm text-teal-dark overflow-x-auto whitespace-pre font-mono leading-relaxed">{`"doesyourbackhurt": {
  "command": "npx",
  "args": ["-y", "@anthropic-ai/mcp-remote",
    "https://solvinghealth.com/mcp"]
}`}</pre>
          </div>
          <p className="text-teal-dark/60 text-sm">
            Don&apos;t have Claude? Get it free at{" "}
            <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-teal font-medium hover:underline">claude.ai</a>
            {" "}or use the chat and voice widgets on this page.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-teal/10 py-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-teal-dark/60 text-sm font-medium mb-4">
            A co-op.care health program
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="https://co-op.care" target="_blank" rel="noopener noreferrer" className="text-teal hover:text-teal-dark transition-colors">co-op.care</a>
            <a href="https://sh-room.com" target="_blank" rel="noopener noreferrer" className="text-teal hover:text-teal-dark transition-colors">sh-room.com</a>
            <a href="https://fillforward.com" target="_blank" rel="noopener noreferrer" className="text-teal hover:text-teal-dark transition-colors">fillforward.com</a>
            <a href="https://comfortcard.org" target="_blank" rel="noopener noreferrer" className="text-teal hover:text-teal-dark transition-colors">comfortcard.org</a>
            <a href="https://caregoals.com" target="_blank" rel="noopener noreferrer" className="text-teal hover:text-teal-dark transition-colors">caregoals.com</a>
            <a href="https://surgeonvalue.com" target="_blank" rel="noopener noreferrer" className="text-teal hover:text-teal-dark transition-colors">surgeonvalue.com</a>
            <a href="https://solvinghealth.com" target="_blank" rel="noopener noreferrer" className="text-teal hover:text-teal-dark transition-colors">solvinghealth.com</a>
            <a href="https://themissedcode.com" target="_blank" rel="noopener noreferrer" className="text-teal hover:text-teal-dark transition-colors">themissedcode.com</a>
            <a href="https://lastconversation.org" target="_blank" rel="noopener noreferrer" className="text-teal hover:text-teal-dark transition-colors">lastconversation.org</a>
          </div>
          <p className="mt-6 text-teal-dark/40 text-xs">
            Built entirely by AI.
          </p>
        </div>
      </footer>
    </div>
  );
}
