import { useState } from "react";

export default function ChatInput() {

  const [message, setMessage] = useState("");

  return (
    <div className="border-t border-slate-700 p-5 flex gap-3">

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 bg-slate-800 rounded-xl p-3 outline-none"
      />

      <button className="bg-cyan-500 px-5 rounded-xl">
        ➤
      </button>

    </div>
  );
}