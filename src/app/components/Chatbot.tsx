import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Loader2, Bot, User } from "lucide-react";

// ==========================================
// 🔴 PUT YOUR GEMINI API KEY HERE
// ==========================================
const GEMINI_API_KEY = (import.meta as any).env?.VITE_GEMINI_API_KEY || "AIzaSyCCBYVVszaFhnyhIsPQBtlIE1yhiTxeG_o";

interface Message {
  role: "user" | "model";
  text: string;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", text: "Hi! I am the Dosocket AI Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput("");

    // Add user message to history
    const newMessages: Message[] = [...messages, { role: "user", text: userText }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      if (GEMINI_API_KEY === "PUT_YOUR_API_KEY_HERE" || !GEMINI_API_KEY) {
        throw new Error("Please add your Gemini API key in src/app/components/Chatbot.tsx!");
      }

      // Format history for the Gemini API
      const contents = newMessages.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }));

      // Direct REST call to Gemini 2.5 flash API
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents })
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error.message || "Failed to fetch response from Gemini API");
      }

      // Extract text content from Gemini's response
      const botText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand that.";

      setMessages(prev => [...prev, { role: "model", text: botText }]);
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      setMessages(prev => [...prev, { role: "model", text: `Error: ${error.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(200,255,0,0.3)] z-[110] cursor-pointer border-none"
            style={{ background: "#C8FF00", color: "#000" }}
          >
            <MessageSquare size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 w-[380px] max-w-[calc(100vw-32px)] h-[550px] max-h-[calc(100vh-32px)] z-[110] flex flex-col rounded-2xl overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.5)] border border-white/10"
            style={{
              background: "rgba(10,10,10,0.95)",
              backdropFilter: "blur(20px)",
              fontFamily: "var(--font-main)"
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/40">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C8FF00]/10 flex items-center justify-center text-[#C8FF00] shrink-0">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-[15px] m-0 leading-tight">Dosocket Assistant</h3>
                  <p className="text-[#C8FF00]/70 text-[12px] m-0 leading-tight">Powered by Dosocket</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors cursor-pointer border-none"
              >
                <X size={16} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "self-end flex-row-reverse" : "self-start"}`}>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-white/10 text-white" : "bg-[#C8FF00]/20 text-[#C8FF00]"}`}>
                    {msg.role === "user" ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div
                    className="rounded-2xl px-4 py-2.5 text-[14px] leading-relaxed"
                    style={{
                      background: msg.role === "user" ? "#C8FF00" : "rgba(255,255,255,0.05)",
                      color: msg.role === "user" ? "#000" : "#fff",
                      borderTopRightRadius: msg.role === "user" ? "4px" : "16px",
                      borderTopLeftRadius: msg.role === "model" ? "4px" : "16px",
                      whiteSpace: "pre-wrap"
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 max-w-[85%] self-start">
                  <div className="w-7 h-7 rounded-full bg-[#C8FF00]/20 text-[#C8FF00] flex items-center justify-center shrink-0">
                    <Bot size={14} />
                  </div>
                  <div className="rounded-2xl px-4 py-3 bg-white/5 flex items-center" style={{ borderTopLeftRadius: "4px" }}>
                    <Loader2 size={16} className="text-[#C8FF00] animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={sendMessage} className="p-3 border-t border-white/10 bg-black/40 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white outline-none focus:border-[#C8FF00]/50 transition-colors placeholder:text-white/30"
                style={{ fontFamily: "var(--font-main)" }}
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-11 h-11 rounded-xl bg-[#C8FF00] flex items-center justify-center text-black shadow-md hover:bg-[#a8d600] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer border-none shrink-0"
              >
                <Send size={18} className={input.trim() ? "translate-x-0.5 -translate-y-0.5 transition-transform" : "transition-transform"} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
