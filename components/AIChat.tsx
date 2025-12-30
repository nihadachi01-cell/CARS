
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, User, Bot, Loader2 } from 'lucide-react';
import { Message } from '../types';
import { geminiService } from '../services/geminiService';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Good evening. I am the CARS Elite Concierge. How may I assist you with our fleet today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: input };
    const currentHistory = [...messages];
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await geminiService.sendMessage(currentHistory, input);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'I apologize, the system is experiencing high demand. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[100] bg-white text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed bottom-8 right-8 z-[110] w-[400px] h-[600px] bg-[#0d0d0d] border border-white/10 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-500">
          <div className="p-6 bg-[#1a1a1a] border-b border-white/5 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-zinc-500 rounded-full animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest text-zinc-400">Elite Concierge</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-6">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start space-x-3 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`p-2 rounded-full border border-white/5 ${m.role === 'user' ? 'bg-zinc-800' : 'bg-black'}`}>
                    {m.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`p-4 rounded-lg text-sm leading-relaxed ${m.role === 'user' ? 'bg-white text-black font-medium' : 'bg-zinc-900/50 text-zinc-300 border border-white/5'}`}>
                    {m.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-900/50 border border-white/5 p-4 rounded-lg">
                  <Loader2 className="w-4 h-4 animate-spin text-zinc-500" />
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-[#111] border-t border-white/5">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask our concierge..."
                className="w-full bg-black border border-white/10 rounded-sm py-4 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-white/30 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;
