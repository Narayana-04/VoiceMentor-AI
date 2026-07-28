const prompts = [
  "🎤 Improve Speaking",
  "📚 Learn Vocabulary",
  "📝 Correct Grammar",
  "💼 Mock Interview"
];

export default function SuggestedPrompts() {
  return (
    <div className="flex gap-3 overflow-x-auto px-5 py-3">

      {prompts.map((prompt) => (
        <button
          key={prompt}
          className="bg-slate-800 px-4 py-2 rounded-full hover:bg-cyan-600"
        >
          {prompt}
        </button>
      ))}

    </div>
  );
}