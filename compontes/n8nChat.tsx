"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, Send, X, Loader2 } from "lucide-react";

type Message = {
    role: "user" | "assistant";
    content: string;
};

export default function ChatWidget() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content: "Hi 👋 How can I help you?",
        },
    ]);

    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const sessionId = useRef<string>(
        typeof window !== "undefined"
            ? localStorage.getItem("chat_session") || crypto.randomUUID()
            : ""
    );

    useEffect(() => {
        localStorage.setItem("chat_session", sessionId.current);
    }, []);

    const scrollBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollBottom, [messages]);

    async function sendMessage() {
        if (!input.trim()) return;

        const userMessage: Message = {
            role: "user",
            content: input,
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch(
                "https://n8n-4e70.onrender.com/webhook/8af97d01-222f-4868-957b-fb6ac3121911/chat",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        chatInput: userMessage.content,
                        sessionId: sessionId.current,
                    }),
                }
            );

            const data = await res.json();

            const reply =
                data?.output ||
                data?.text ||
                data?.message ||
                "No response from agent.";

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: reply,
                },
            ]);
        } catch (err) {
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "Error contacting AI agent.",
                },
            ]);
        }

        setLoading(false);
    }

    return (
        <div className="fixed bottom-6 right-6 z-[1000] font-sans">
            {/* Floating Button */}
            {!open && (
                <div className="relative">
                    <span className="absolute inset-0 inline-flex h-full w-full animate-ping rounded-full bg-gray-600 opacity-40"></span>
                    <button
                        onClick={() => setOpen(true)}
                        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-neutral-900 text-white shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-110 active:scale-95 group border border-neutral-800"
                        aria-label="Open Chat"
                    >
                        <MessageCircle className="h-8 w-8 transition-transform duration-500 group-hover:rotate-[360deg]" />
                    </button>
                </div>
            )}

            {/* Chat Window */}
            {open && (
                <div
                    className="flex flex-col h-[600px] w-[400px] overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-500 animate-in fade-in zoom-in-95 slide-in-from-bottom-8"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between bg-neutral-900 px-6 py-4 text-white border-b border-neutral-800">
                        <div className="flex items-center gap-3">
                            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-neutral-700 bg-neutral-800">
                                <img
                                    src="/ma.png"
                                    alt="Avatar"
                                    className="h-full w-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=AI&background=000&color=fff";
                                    }}
                                />
                                {/* <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-neutral-900 bg-green-500" /> */}
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold tracking-tight text-base leading-none">naty</span>
                                <span className="text-[10px] text-green-500 font-medium">Online</span>
                            </div>
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            className="rounded-full p-2 text-neutral-400 transition-all hover:bg-neutral-800 hover:text-white"
                            aria-label="Close Chat"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Messages Container with WhatsApp-style background */}
                    <div className="relative flex-1 overflow-hidden message-container">
                        <div
                            className="absolute inset-0 pointer-events-none inverted-doodles opacity-20"
                            style={{
                                backgroundImage: `url('/bg.png')`,
                                backgroundSize: '500px',
                                filter: 'invert(1) brightness(1.5)'
                            }}
                        />

                        <div className="relative h-full space-y-4 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-neutral-800">
                            {messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"
                                        } animate-in fade-in slide-in-from-bottom-2 duration-300`}
                                >
                                    <div
                                        className={`max-w-[85%] rounded-2xl px-5 py-3 text-sm font-medium shadow-lg ${msg.role === "user"
                                                ? "bg-neutral-100 text-neutral-900 rounded-tr-none"
                                                : "bg-neutral-800 text-neutral-100 rounded-tl-none border border-neutral-700"
                                            }`}
                                    >
                                        {msg.content}
                                    </div>
                                </div>
                            ))}

                            {loading && (
                                <div className="flex justify-start animate-pulse">
                                    <div className="flex items-center gap-3 rounded-2xl bg-neutral-800 border border-neutral-700 px-5 py-3 text-sm font-medium text-neutral-300 rounded-tl-none">
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        <span>Typing...</span>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>
                    </div>

                    {/* Input */}
                    <div className="border-t border-neutral-800 p-5 bg-neutral-900/50 backdrop-blur-md">
                        <div className="flex items-center gap-3 overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-800 px-3 py-1.5 shadow-inner transition-all focus-within:border-neutral-500 focus-within:bg-neutral-700">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Message..."
                                className="flex-1 border-none bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-neutral-500"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") sendMessage();
                                    if (e.key === "Escape") setOpen(false);
                                }}
                            />
                            <button
                                onClick={sendMessage}
                                disabled={!input.trim() || loading}
                                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-neutral-900 transition-all hover:scale-105 active:scale-95 disabled:opacity-20 disabled:grayscale disabled:cursor-not-allowed shadow-md"
                            >
                                <Send className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}