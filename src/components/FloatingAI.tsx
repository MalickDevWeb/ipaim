import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import ReactMarkdown from 'markdown-to-jsx';
import { IPAIM_CONTEXT } from '../data/aiContext';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export const FloatingAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Bonjour ! Je suis **Mya**, l'assistante virtuelle de l'IPAIM Thiès. Comment puis-je vous aider aujourd'hui concernant nos formations, nos tarifs ou les inscriptions ?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    
    // Add user message to UI
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // NOTE: In a real production app, API keys should NOT be exposed in the frontend.
      // This requires the VITE_GEMINI_API_KEY environment variable.
      const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || "dummy" });
      
      const chatHistory = messages.map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }]
      }));

      const assistantId = Date.now().toString();
      setMessages(prev => [...prev, { id: assistantId, role: 'assistant', content: '' }]);

      const responseStream = await ai.models.generateContentStream({
        model: 'gemini-3.6-flash',
        contents: [
          ...chatHistory,
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          temperature: 0.2,
          systemInstruction: IPAIM_CONTEXT,
        }
      });

      let fullText = "";
      for await (const chunk of responseStream) {
        if (chunk.text) {
          fullText += chunk.text;
          setMessages(prev => prev.map(msg => 
            msg.id === assistantId ? { ...msg, content: fullText } : msg
          ));
        }
      }
      
      if (!fullText) {
        setMessages(prev => prev.map(msg => 
          msg.id === assistantId ? { ...msg, content: "Désolée, je n'ai pas pu générer de réponse." } : msg
        ));
      }
      
    } catch (error) {
      console.error("AI Error:", error);
      // Remove the empty message if it failed before starting, or append an error
      setMessages(prev => {
        const hasEmptyMessage = prev.some(m => m.content === '' && m.role === 'assistant');
        if (hasEmptyMessage) {
           return prev.map(m => m.content === '' ? { ...m, content: "Oups, je rencontre un petit problème de connexion. N'hésitez pas à nous contacter directement sur WhatsApp au +221 77 564 37 90." } : m);
        } else {
           return [...prev, { 
             id: Date.now().toString(), 
             role: 'assistant', 
             content: "Oups, je rencontre un petit problème de connexion. N'hésitez pas à nous contacter directement sur WhatsApp au +221 77 564 37 90." 
           }];
        }
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-24 lg:bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
        
        <motion.div 
          initial={{ opacity: 0, x: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ delay: 2, type: "spring", stiffness: 300, damping: 25 }}
          className="hidden sm:flex bg-white/90 backdrop-blur-md text-[#0b1a3d] text-[11px] font-bold px-4 py-2.5 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-white pointer-events-auto items-center gap-2"
        >
          <div className="w-5 h-5 rounded-full bg-[#ebe727] flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-[#0b1a3d]" />
          </div>
          Posez vos questions à Mya !
        </motion.div>

        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="pointer-events-auto relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#0066bf] to-[#0b1a3d] text-white rounded-full shadow-[0_8px_25px_rgba(0,102,191,0.4)] overflow-hidden ring-4 ring-white/50"
          aria-label="Ouvrir l'assistant IA"
        >
          <Bot className="w-7 h-7 drop-shadow-sm" />
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#ebe727] rounded-full border-2 border-[#0b1a3d] animate-pulse"></span>
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 20, scale: 0.95, filter: "blur(8px)" }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="fixed bottom-6 right-6 sm:bottom-24 sm:right-24 z-50 w-[90vw] sm:w-[380px] h-[550px] max-h-[85vh] bg-white/80 backdrop-blur-2xl rounded-[28px] shadow-[0_20px_40px_-10px_rgba(11,26,61,0.2)] border border-white/60 flex flex-col overflow-hidden ring-1 ring-black/5"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0b1a3d] to-[#1a1a8c] p-4 text-white flex items-center justify-between relative overflow-hidden shrink-0 shadow-sm">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <div className="flex items-center gap-3 relative z-10">
                <div className="relative">
                  <div className="w-11 h-11 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-inner">
                    <Bot className="w-6 h-6 text-[#ebe727]" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#57c730] rounded-full border-2 border-[#0b1a3d]"></span>
                </div>
                <div>
                  <h3 className="font-bold text-[15px] leading-tight tracking-tight">Mya - IPAIM Thiès</h3>
                  <p className="text-[11px] text-blue-200/90 font-medium">Assistante IA Premium</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.15)' }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full transition-colors relative z-10 cursor-pointer"
              >
                <X className="w-5 h-5 text-white/90" />
              </motion.button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-5 bg-slate-50/50 space-y-5 scroll-smooth">
              {messages.map((msg) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2.5 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    
                    {/* Avatar */}
                    <div className="shrink-0 mt-0.5">
                      {msg.role === 'user' ? (
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center shadow-sm border border-white">
                          <User className="w-4 h-4 text-slate-600" />
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0b1a3d] to-[#1a1a8c] flex items-center justify-center shadow-sm border border-[#0b1a3d]/20">
                          <Bot className="w-4 h-4 text-[#ebe727]" />
                        </div>
                      )}
                    </div>

                    {/* Bubble */}
                    <div 
                      className={`px-4 py-2.5 rounded-[20px] text-[13.5px] leading-relaxed shadow-sm ${
                        msg.role === 'user' 
                          ? 'bg-gradient-to-br from-[#0066bf] to-[#0b1a3d] text-white rounded-tr-sm border border-blue-800/30' 
                          : 'bg-white text-slate-700 rounded-tl-sm border border-white shadow-[0_2px_10px_rgba(0,0,0,0.02)]'
                      }`}
                    >
                      {msg.role === 'assistant' ? (
                        <div className="prose prose-sm prose-p:my-1.5 prose-ul:my-1.5 prose-li:my-0 prose-strong:text-[#0b1a3d] max-w-none">
                          <ReactMarkdown>{msg.content}</ReactMarkdown>
                        </div>
                      ) : (
                        msg.content
                      )}
                    </div>

                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="flex gap-2.5 max-w-[85%] flex-row">
                    <div className="shrink-0 mt-0.5">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0b1a3d] to-[#1a1a8c] flex items-center justify-center shadow-sm border border-[#0b1a3d]/20">
                        <Bot className="w-4 h-4 text-[#ebe727]" />
                      </div>
                    </div>
                    <div className="px-4 py-3.5 rounded-[20px] rounded-tl-sm bg-white border border-white flex items-center gap-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-[#0066bf] rounded-full" />
                      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-[#0066bf] rounded-full" />
                      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-[#0066bf] rounded-full" />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white/70 backdrop-blur-xl border-t border-slate-200/60 shrink-0">
              <div className="flex items-end gap-2 relative bg-white p-1.5 rounded-3xl border border-slate-200 shadow-sm focus-within:border-[#0066bf]/30 focus-within:ring-4 focus-within:ring-[#0066bf]/10 transition-all">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Écrivez votre message..."
                  className="flex-1 max-h-24 min-h-[40px] bg-transparent border-none px-3 py-2.5 text-[14px] text-slate-800 focus:ring-0 focus:outline-none resize-none leading-relaxed overflow-y-auto placeholder:text-slate-400"
                  rows={1}
                />
                <motion.button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 mb-0.5 rounded-full bg-[#0066bf] text-white flex items-center justify-center shrink-0 shadow-md hover:bg-[#1a1a8c] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4 ml-0.5" />}
                </motion.button>
              </div>
              <div className="text-center mt-3">
                <span className="text-[10px] font-medium text-slate-400 tracking-wide uppercase">Propulsé par Google Gemini</span>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
