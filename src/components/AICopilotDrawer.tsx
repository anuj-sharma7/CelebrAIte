import React, { useState } from 'react';
import { 
  X, Send, Bot, Sparkles, User, Lightbulb, 
  Trash2, CornerDownLeft, RefreshCw 
} from 'lucide-react';
import { EventPlan, ChatMessage } from '../types';
import { getCopilotResponse } from '../services/aiGenerator';

interface AICopilotDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  event: EventPlan;
  onUpdateEvent: (updated: EventPlan) => void;
  prefilledPrompt?: string;
}

export const AICopilotDrawer: React.FC<AICopilotDrawerProps> = ({
  isOpen,
  onClose,
  event,
  onUpdateEvent,
  prefilledPrompt = ''
}) => {
  const [input, setInput] = useState(prefilledPrompt);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (prefilledPrompt) {
      setInput(prefilledPrompt);
    }
  }, [prefilledPrompt]);

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [event.copilotHistory, isTyping]);

  if (!isOpen) return null;

  const handleSend = (userText: string) => {
    const query = userText || input;
    if (!query.trim()) return;

    const userMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: query.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const nextHistory = [...event.copilotHistory, userMessage];
    onUpdateEvent({ ...event, copilotHistory: nextHistory });
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const replyText = getCopilotResponse(query, event);
      const assistantMessage: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: 'assistant',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      onUpdateEvent({
        ...event,
        copilotHistory: [...nextHistory, assistantMessage]
      });
      setIsTyping(false);
    }, 700);
  };

  const handleClearHistory = () => {
    onUpdateEvent({ ...event, copilotHistory: [] });
  };

  const QUICK_PROMPTS = [
    'How do I cut 15% budget without hurting decor?',
    'Draft a polite follow-up message to caterer',
    'What is our day-of photographer shot list?',
    'Generate an emcee opening script & party games'
  ];

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[480px] bg-slate-950/95 backdrop-blur-2xl border-l border-slate-800 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
      
      {/* Top Header */}
      <div className="p-4 sm:p-5 border-b border-slate-800/80 flex items-center justify-between bg-slate-900/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-600 to-indigo-600 flex items-center justify-center text-white shadow-glow">
            <Bot className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-white font-serif-luxury">
                Celebr<span className="text-pink-400 font-sans">AI</span>te Copilot
              </h3>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <p className="text-[11px] text-slate-400 truncate max-w-[220px]">
              Active Event: {event.title}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={handleClearHistory}
            title="Clear Chat History"
            className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Quick Prompts Bar */}
      <div className="p-3 bg-slate-900/40 border-b border-slate-800/60 overflow-x-auto">
        <div className="flex gap-2 text-xs">
          {QUICK_PROMPTS.map((qp, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(qp)}
              className="px-2.5 py-1.5 rounded-xl bg-slate-850 hover:bg-pink-500/10 hover:border-pink-500/40 text-slate-300 hover:text-pink-300 border border-slate-750 transition-all text-[11px] shrink-0 flex items-center gap-1.5"
            >
              <Lightbulb className="w-3 h-3 text-amber-400" />
              <span>{qp}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Body */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
        {event.copilotHistory.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
            <div className="w-14 h-14 rounded-3xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
              <Sparkles className="w-7 h-7" />
            </div>
            <h4 className="text-sm font-bold text-white">Your Celebration GenAI Copilot</h4>
            <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
              Ask any question about vendor negotiations, day-of schedules, cost savings, speech scripts, or theme aesthetics!
            </p>
          </div>
        ) : (
          event.copilotHistory.map((msg) => {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-pink-600 to-indigo-600 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                    isUser
                      ? 'bg-gradient-to-r from-pink-600 to-indigo-600 text-white shadow-glow'
                      : 'bg-slate-900 border border-slate-800 text-slate-200 shadow-sm'
                  }`}
                >
                  {msg.text}
                  <div className={`text-[10px] mt-1.5 text-right ${isUser ? 'text-pink-200' : 'text-slate-500'}`}>
                    {msg.timestamp}
                  </div>
                </div>

                {isUser && (
                  <div className="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })
        )}

        {isTyping && (
          <div className="flex gap-3 items-center text-xs text-slate-400">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-pink-600 to-indigo-600 flex items-center justify-center text-white shrink-0">
              <Bot className="w-4 h-4 animate-spin" />
            </div>
            <div className="bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-2xl flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-400 animate-bounce"></span>
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]"></span>
              <span className="text-[11px] text-slate-400">GenAI is crafting response...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input Bar */}
      <div className="p-4 border-t border-slate-800 bg-slate-900/80">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(input);
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Copilot (e.g. Budget tips, speech draft)..."
            className="flex-1 bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-pink-500"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="p-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white shadow-glow disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

    </div>
  );
};

