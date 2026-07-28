import ChatHeader from "../components/ChatHeader";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";
import SuggestedPrompts from "../components/SuggestedPrompts";

export default function AIChat() {
  return (
    <div className="flex flex-col h-screen bg-slate-900 text-white">

      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-6">
        <ChatWindow />
      </div>

      <SuggestedPrompts />

      <ChatInput />

    </div>
  );
}