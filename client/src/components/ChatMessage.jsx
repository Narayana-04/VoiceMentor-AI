export default function ChatMessage({ sender, message }) {

  const isUser = sender === "user";

  return (
    <div
      className={`flex mb-4 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-xl px-5 py-3 rounded-2xl ${
          isUser
            ? "bg-cyan-500"
            : "bg-slate-800"
        }`}
      >
        {message}
      </div>
    </div>
  );
}