"use client";

import { useState } from "react";
import { siteConfig } from "@/site.config";

interface Question {
  id: number;
  text: string;
  redFlag?: boolean; // questions where specific answers trigger immediate ER guidance
  options: { label: string; text: string; points: number; redFlag?: boolean }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "How long have you been experiencing back pain?",
    options: [
      { label: "A", text: "Less than 1 week", points: 0 },
      { label: "B", text: "1–4 weeks", points: 1 },
      { label: "C", text: "1–3 months", points: 2 },
      { label: "D", text: "More than 3 months", points: 3 },
    ],
  },
  {
    id: 2,
    text: "Where is your pain located?",
    options: [
      { label: "A", text: "Lower back only", points: 1 },
      { label: "B", text: "Upper back or neck only", points: 1 },
      { label: "C", text: "Lower back radiating down the leg (past the knee)", points: 2 },
      { label: "D", text: "Both upper and lower back, or widespread", points: 2 },
    ],
  },
  {
    id: 3,
    text: "Do you have numbness, tingling, or weakness in your leg or foot?",
    options: [
      { label: "A", text: "No", points: 0 },
      { label: "B", text: "Mild tingling that comes and goes", points: 1 },
      { label: "C", text: "Significant numbness or tingling in one leg", points: 2 },
      { label: "D", text: "Weakness in the leg or foot (difficulty lifting foot, leg giving way)", points: 3 },
    ],
  },
  {
    id: 4,
    text: "Do you have any changes in bladder or bowel control?",
    redFlag: true,
    options: [
      { label: "A", text: "No changes", points: 0 },
      { label: "B", text: "Some urgency but no accidents", points: 1 },
      { label: "C", text: "Difficulty urinating or incomplete emptying", points: 0, redFlag: true },
      { label: "D", text: "Loss of bladder or bowel control (incontinence)", points: 0, redFlag: true },
    ],
  },
  {
    id: 5,
    text: "Do you have fever, chills, or unexplained weight loss along with your back pain?",
    redFlag: true,
    options: [
      { label: "A", text: "No", points: 0 },
      { label: "B", text: "Mild fever (under 101°F) I can explain (cold, flu)", points: 1 },
      { label: "C", text: "Unexplained fever or significant weight loss", points: 0, redFlag: true },
      { label: "D", text: "Fever above 101°F with back pain", points: 0, redFlag: true },
    ],
  },
  {
    id: 6,
    text: "Did your pain start after a fall, accident, or significant injury?",
    options: [
      { label: "A", text: "No injury — it came on gradually", points: 0 },
      { label: "B", text: "Minor strain or awkward movement", points: 1 },
      { label: "C", text: "Significant fall or accident", points: 2 },
      { label: "D", text: "High-impact injury (car accident, sports collision, fall from height)", points: 3 },
    ],
  },
  {
    id: 7,
    text: "Is your pain worse at night, to the point of waking you from sleep?",
    options: [
      { label: "A", text: "No, it does not wake me", points: 0 },
      { label: "B", text: "Uncomfortable when changing positions but I go back to sleep", points: 1 },
      { label: "C", text: "Yes, it regularly wakes me from sleep", points: 3 },
      { label: "D", text: "Severe night pain that significantly disrupts sleep most nights", points: 4 },
    ],
  },
  {
    id: 8,
    text: "How would you rate your average pain level over the past week?",
    options: [
      { label: "A", text: "Mild (1–3 out of 10) — noticeable but not limiting", points: 0 },
      { label: "B", text: "Moderate (4–6 out of 10) — affects some activities", points: 2 },
      { label: "C", text: "Severe (7–8 out of 10) — significantly limits daily activities", points: 3 },
      { label: "D", text: "Very severe (9–10 out of 10) — barely able to function", points: 4 },
    ],
  },
];

interface Result {
  level: "Self-Care" | "See Your Doctor" | "See a Specialist" | "Seek Emergency Care";
  color: string;
  bgColor: string;
  headline: string;
  recommendation: string;
  urgent?: boolean;
}

function checkRedFlags(answers: { questionId: number; points: number; redFlag?: boolean }[]): boolean {
  return answers.some((a) => a.redFlag === true);
}

function getResult(score: number, hasRedFlag: boolean): Result {
  if (hasRedFlag) {
    return {
      level: "Seek Emergency Care",
      color: "#dc2626",
      bgColor: "#fef2f2",
      urgent: true,
      headline: "Your responses include one or more red flag symptoms. Please seek care today.",
      recommendation:
        "Bladder or bowel control changes, unexplained fever with back pain, or significant weakness may indicate cauda equina syndrome or spinal infection — conditions that require urgent evaluation. Go to the emergency room or call your doctor immediately and describe these symptoms.",
    };
  }

  if (score <= 4) {
    return {
      level: "Self-Care",
      color: "#16a34a",
      bgColor: "#f0fdf4",
      headline: "Your symptoms suggest acute muscle strain that typically improves with self-care.",
      recommendation:
        "Most acute back pain resolves within 4–6 weeks. Try alternating heat and ice, gentle movement, over-the-counter anti-inflammatories (if appropriate for you), and avoid prolonged bed rest. If pain does not improve within 2 weeks, schedule a visit with your primary care provider.",
    };
  } else if (score <= 10) {
    return {
      level: "See Your Doctor",
      color: "#d97706",
      bgColor: "#fffbeb",
      headline: "Your symptoms suggest back pain that warrants a doctor visit.",
      recommendation:
        "Schedule a visit with your primary care provider to assess your back. Depending on your history and exam, they may recommend physical therapy, imaging, or a specialist referral. Most back pain is treatable without surgery.",
    };
  } else {
    return {
      level: "See a Specialist",
      color: "#7c3aed",
      bgColor: "#faf5ff",
      headline: "Your symptoms suggest back pain that warrants evaluation by a spine specialist.",
      recommendation:
        "Your combination of symptoms, duration, and severity suggests you would benefit from evaluation by a spine specialist — orthopedic spine surgeon or neurosurgeon. Ask your primary care provider for a referral, or use the Find Care link below. Most spine conditions are treated without surgery.",
    };
  }
}

export default function Assessment() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<{ questionId: number; points: number; redFlag?: boolean }[]>([]);
  const [selected, setSelected] = useState<{ points: number; redFlag?: boolean } | null>(null);
  const [done, setDone] = useState(false);

  const total = questions.length;
  const score = answers.reduce((a, b) => a + b.points, 0);
  const hasRedFlag = checkRedFlags(answers);
  const result = done ? getResult(score, hasRedFlag) : null;

  function handleAnswer(points: number, redFlag?: boolean) {
    setSelected({ points, redFlag });
  }

  function handleNext() {
    if (selected === null) return;
    const updated = [...answers, { questionId: questions[current].id, ...selected }];
    if (current + 1 >= total) {
      setAnswers(updated);
      setDone(true);
    } else {
      setAnswers(updated);
      setCurrent(current + 1);
      setSelected(null);
    }
  }

  function restart() {
    setStarted(false);
    setCurrent(0);
    setAnswers([]);
    setSelected(null);
    setDone(false);
  }

  if (!started) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Answer 8 questions to get a recommendation: self-care, see your doctor, see a specialist, or seek emergency care. Takes about 2 minutes.
        </p>
        <button
          onClick={() => setStarted(true)}
          className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-bold text-white transition-all hover:opacity-90 shadow-md"
          style={{ backgroundColor: siteConfig.primaryColor }}
        >
          Start Assessment
        </button>
      </div>
    );
  }

  if (done && result) {
    const sageUrl = `https://co-op.care/?channel=doesyourbackhurt&context=back-${result.level.toLowerCase().replace(/ /g, "-")}`;
    return (
      <div className="max-w-2xl mx-auto">
        <div
          className="rounded-2xl p-8 border-2 mb-6"
          style={{ backgroundColor: result.bgColor, borderColor: result.color }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span
              className="inline-block px-4 py-1 rounded-full text-sm font-bold text-white"
              style={{ backgroundColor: result.color }}
            >
              {result.level}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-3" style={{ color: result.color }}>
            {result.headline}
          </h3>

          {result.urgent && (
            <div className="bg-red-100 border border-red-300 rounded-xl p-4 mb-4">
              <p className="text-red-800 font-bold text-sm">
                Go to the emergency room or call 911 if you have sudden loss of bladder or bowel control, progressive leg weakness, or severe fever with back pain.
              </p>
            </div>
          )}

          <p className="text-gray-700 leading-relaxed mb-6">{result.recommendation}</p>

          <div className="bg-white/70 rounded-xl p-4 text-xs text-gray-500 border border-gray-200">
            <strong>Disclaimer:</strong> This assessment is for informational purposes only and is not a medical diagnosis. Consult a qualified healthcare provider for evaluation, diagnosis, and treatment recommendations.
          </div>
        </div>

        <div className="text-center space-y-4">
          <p className="text-gray-600 font-medium">Talk to Sage to understand your options and prepare for your appointment.</p>
          <a
            href={sageUrl}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-bold text-white transition-all hover:opacity-90 shadow-md"
            style={{ backgroundColor: siteConfig.primaryColor }}
          >
            Talk to Sage about your results
          </a>
          <div>
            <button
              onClick={restart}
              className="text-sm text-gray-400 hover:text-gray-600 underline"
            >
              Retake assessment
            </button>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[current];
  const progress = ((current) / total) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Question {current + 1} of {total}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{ width: `${progress}%`, backgroundColor: siteConfig.primaryColor }}
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm mb-4">
        <h3 className="text-xl font-bold mb-6" style={{ color: siteConfig.accentColor }}>
          {q.text}
        </h3>
        <div className="space-y-3">
          {q.options.map((opt) => {
            const isSelected = selected !== null && selected.points === opt.points && selected.redFlag === opt.redFlag;
            return (
              <button
                key={opt.label}
                onClick={() => handleAnswer(opt.points, opt.redFlag)}
                className="w-full text-left flex items-start gap-4 p-4 rounded-xl border-2 transition-all"
                style={{
                  borderColor: isSelected ? siteConfig.primaryColor : "#e5e7eb",
                  backgroundColor: isSelected ? `${siteConfig.primaryColor}10` : "white",
                }}
              >
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ backgroundColor: isSelected ? siteConfig.primaryColor : "#9ca3af" }}
                >
                  {opt.label}
                </span>
                <span className="text-gray-700 leading-snug">{opt.text}</span>
              </button>
            );
          })}
        </div>
      </div>

      <button
        onClick={handleNext}
        disabled={selected === null}
        className="w-full py-4 rounded-xl text-lg font-bold text-white transition-all disabled:opacity-40"
        style={{ backgroundColor: siteConfig.primaryColor }}
      >
        {current + 1 === total ? "See my results" : "Next question"}
      </button>
    </div>
  );
}
