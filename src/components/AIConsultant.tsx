import { useState, useRef, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Send, Bot, User, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "motion/react";

// Removed top-level instantiation to prevent crash if API key is missing.
const getAI = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "undefined" || apiKey === "MY_GEMINI_API_KEY") {
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

interface Message {
  role: "user" | "bot";
  content: string;
}

export default function AIConsultant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content: "Hello, I'm Arch. I help technical founders and enterprise leaders map their architecture at Codecyclon. What are you looking to engineer today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = getAI();
      if (!ai) {
        setMessages((prev) => [...prev, { role: "bot", content: "Architecture key missing. Please configure your GEMINI_API_KEY in the environment secrets." }]);
        setIsLoading(false);
        return;
      }
      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash", // Using a stable model name
        contents: [
          {
            role: "user",
            parts: [{ text: `You are Arch, the AI architectural assistant for Codecyclon, a premier software development agency.

Your mission:
1. Qualify leads by asking smart, direct questions about their project (budget, timeline, tech stack, team size).
2. Recommend which of our 4 services fits their need based on their input:
   - High-Performance Web (React, Next.js, Vite)
   - AI Integration (LLMs, agents, automation)
   - Mobile Solutions (Flutter, React Native)
   - Cyber Security (audits, hardening)
3. If they ask about cost, do NOT give a specific dollar amount. Explain that technical excellence isn't a commodity and we scope based on complexity and velocity. Mention that our discovery call is where we finalize exact figures.
4. Tone: Senior engineer who is also a warm communicator. Knowledgeable, direct, no corporate filler, slightly poetic but functional.
5. CTA: Always end any substantial strategic answer with a gentle suggestion to book a call or email 'hq@codecyclon.com'.

Current Strategic Query: ${userMessage}` }],
          }
        ],
      });

      const botMessage = response.text || "Operational disruption detected. Please re-synchronize your query.";
      setMessages((prev) => [...prev, { role: "bot", content: botMessage }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages((prev) => [...prev, { role: "bot", content: "Neural link severed. Please verify your connection protocols." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto border-white/5 bg-white/[0.02] backdrop-blur-3xl shadow-[0_0_50px_-12px_theme(colors.primary/10%)] overflow-hidden h-[600px] flex flex-col rounded-[2rem]">
      <CardHeader className="border-b border-white/5 bg-white/[0.01]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-primary/10 text-primary shadow-lg shadow-primary/5">
              <Bot size={24} />
            </div>
            <div>
              <CardTitle className="text-foreground font-sans flex items-center gap-2 tracking-tight font-black uppercase text-sm">
                Arch
                <Badge variant="outline" className="text-[9px] uppercase tracking-[0.2em] border-primary/30 text-primary bg-primary/5 px-2">v4.0</Badge>
              </CardTitle>
              <CardDescription className="text-foreground/40 text-[9px] uppercase tracking-[0.25em] font-bold">Strategic Neural Core</CardDescription>
            </div>
          </div>
          <Sparkles className="text-primary/50 animate-pulse" size={18} />
        </div>
      </CardHeader>

      <CardContent className="flex-1 p-0 overflow-hidden flex flex-col">
        <div className="flex-1 p-6 overflow-y-auto space-y-6 scrollbar-hide" ref={scrollRef}>
          <AnimatePresence initial={false}>
              {messages.map((m, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex gap-4 max-w-[90%] ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    <div className={`mt-1 p-2 rounded-xl h-fit shadow-sm ${m.role === "user" ? "bg-white/10 text-white/40" : "bg-primary/10 text-primary"}`}>
                      {m.role === "user" ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div className={`p-5 rounded-2xl text-sm leading-relaxed shadow-xl ${
                      m.role === "user" 
                         ? "bg-primary text-white font-semibold rounded-tr-none" 
                        : "bg-white/[0.03] border border-white/5 text-foreground/90 rounded-tl-none font-sans"
                    }`}>
                      <div className="markdown-body prose dark:prose-invert prose-sm max-w-none">
                        <ReactMarkdown>{m.content}</ReactMarkdown>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="flex gap-4 items-center bg-white/[0.03] border border-white/5 p-5 rounded-2xl rounded-tl-none">
                  <Loader2 className="animate-spin text-primary" size={16} />
                  <span className="text-[10px] text-foreground/30 font-bold uppercase tracking-[0.2em]">Synthesizing Strategy...</span>
                </div>
              </motion.div>
            )}
          </div>
        <div className="p-6 border-t border-white/5 bg-white/[0.01] backdrop-blur-sm">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex gap-3"
          >
            <Input
              placeholder="Query the architect..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-white/[0.03] border-white/5 text-foreground placeholder:text-foreground/20 focus-visible:ring-primary rounded-xl h-14 text-sm"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              size="icon" 
              className="bg-primary text-white hover:opacity-90 shrink-0 h-14 w-14 rounded-xl shadow-lg shadow-primary/20 cursor-none"
              disabled={isLoading || !input.trim()}
            >
              <Send size={20} />
            </Button>
          </form>
          <p className="text-[8px] text-foreground/10 mt-6 text-center font-bold uppercase tracking-[0.4em]">Proprietary Neural Engine / Codecyclon Studio</p>
        </div>
      </CardContent>
    </Card>
  );
}
