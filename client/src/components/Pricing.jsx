import { FaCheckCircle } from "react-icons/fa";

const plans = [
  {
    title: "Free",
    price: "₹0",
    features: [
      "10 Minutes Daily Practice",
      "Basic Grammar Check",
      "Limited Vocabulary",
      "Daily Challenge",
    ],
    button: "Get Started",
    highlight: false,
  },
  {
    title: "Pro",
    price: "₹499/mo",
    features: [
      "Unlimited AI Conversations",
      "Pronunciation Analysis",
      "Interview Practice",
      "Progress Tracking",
      "Vocabulary Builder",
      "Grammar Correction",
    ],
    button: "Start Pro",
    highlight: true,
  },
  {
    title: "Premium",
    price: "₹999/mo",
    features: [
      "Everything in Pro",
      "IELTS Preparation",
      "Business English",
      "AI Speaking Coach",
      "Priority Support",
      "Certificate",
    ],
    button: "Go Premium",
    highlight: false,
  },
];

function Pricing() {
  return (
    <section className="bg-slate-950 py-28">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white">
          Choose Your Plan
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Start free and upgrade whenever you're ready.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 ${
                plan.highlight
                  ? "bg-cyan-500 scale-105"
                  : "bg-slate-800"
              }`}
            >
              <h3 className="text-3xl font-bold text-white">
                {plan.title}
              </h3>

              <h1 className="text-5xl font-bold text-white mt-6">
                {plan.price}
              </h1>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-white">
                    <FaCheckCircle />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className="mt-10 w-full py-3 rounded-xl bg-white text-slate-900 font-bold hover:bg-gray-200 transition">
                {plan.button}
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Pricing;