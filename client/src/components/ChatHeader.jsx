export default function ChatHeader() {
  return (
    <div className="border-b border-slate-700 p-5 flex items-center justify-between">

      <div>
        <h1 className="text-2xl font-bold">
          🤖 VoiceMentor AI
        </h1>

        <p className="text-slate-400">
          Improve your English with AI
        </p>
      </div>

      <button className="bg-cyan-500 px-4 py-2 rounded-lg">
        New Chat
      </button>

    </div>
  );
}