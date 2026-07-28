import ChatMessage from "./ChatMessage";

export default function ChatWindow() {

  const messages = [
    {
      sender: "assistant",
      message: "Hello Sharath 👋"
    },
    {
      sender: "assistant",
      message:
        "I'm your English speaking coach. How can I help you today?"
    }
  ];

  return (
    <>
      {messages.map((msg, index) => (
        <ChatMessage
          key={index}
          sender={msg.sender}
          message={msg.message}
        />
      ))}
    </>
  );
}