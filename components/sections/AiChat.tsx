"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MdChat, MdClose, MdSend } from "react-icons/md";

import { AiChatbot } from "@/content/types";
import { companyContext } from "@/content/pl";

//

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Cześć! Jak mogę pomóc?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          companyContext,
        }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Przepraszam, wystąpił błąd. Spróbuj ponownie.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const chatUI = (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="gradient-shift fixed bottom-6 right-6 w-16 h-16 bg-linear-to-br from-cyan-500 via-blue-500 to-purple-600  text-white rounded-full shadow-lg z-500 flex items-center justify-center "
      >
        {isOpen ? <MdClose size={28} /> : <MdChat size={28} />}
      </button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-6 w-96 h-150 bg-white rounded-2xl shadow-2xl z-50 flex flex-col "
          >
            {/* Header */}
            <div className="bg-linear-to-br from-cyan-500 via-blue-500 to-purple-600 text-white p-4 rounded-t-2xl">
              <h3 className="font-bold tetx-lg">Asystent AI</h3>
              <p className="text-sm text-gray-100">Odpowiem na Twoje pytania</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.role === "user"
                        ? "bg-skyblue text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyUp={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Napisz wiadomość..."
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                  onClick={sendMessage}
                  disabled={loading || !input.trim()}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg disabled:opacity-50"
                >
                  <MdSend size={24} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
  return createPortal(chatUI, document.body);
}
