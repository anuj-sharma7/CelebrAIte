import React, { useState } from 'react';
import { X, Sparkles, Wand2, Lightbulb, CheckCircle2 } from 'lucide-react';
import { EventType } from '../types';

interface NewEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGenerate: (prompt: string, eventType: EventType, customTitle?: string) => void;
}

const PRESET_IDEAS: { type: EventType; title: string; prompt: string }[] = [
  {
    type: 'wedding',
    title: 'Beachside Sunset Wedding in Goa',
    prompt: 'Plan a romantic 2-day beach sunset wedding in South Goa for 180 guests with ₹25 Lakhs budget, barefoot boho vows, seafood grill feast, and acoustic sundowner.'
  },
  {
    type: 'birthday',
    title: 'Fairytale Enchanted Forest 1st Birthday',
    prompt: 'Plan a whimsical pastel fairytale enchanted garden 1st birthday party for 50 guests (kids & families) with ₹75,000 budget, balloon arches, and bubble show.'
  },
  {
    type: 'community',
    title: 'Grand Diwali Society Carnival & Food Mela',
    prompt: 'Plan a vibrant community Diwali Mela for 600 society residents with ₹3.5 Lakhs budget, diya lighting competition, live street food stalls, and cultural dance.'
  },
  {
    type: 'birthday',
    title: 'Retro Bollywood 90s Dance Night',
    prompt: 'Plan a high-energy retro Bollywood 90s themed 25th birthday for 40 close friends with ₹50,000 budget, cassette photobooths, and iconic Hindi film music.'
  }
];

export const NewEventModal: React.FC<NewEventModalProps> = ({
  isOpen,
  onClose,
  onGenerate,
}) => {
  const [eventType, setEventType] = useState<EventType>('wedding');
  const [prompt, setPrompt] = useState('');
  const [customTitle, setCustomTitle] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setTimeout(() => {
      onGenerate(prompt, eventType, customTitle.trim() || undefined);
      setIsGenerating(false);
      onClose();
    }, 1000);
  };

  const selectPreset = (preset: typeof PRESET_IDEAS[0]) => {
    setEventType(preset.type);
    setCustomTitle(preset.title);
    setPrompt(preset.prompt);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Glow ambient background accents */}
        <div className="absolute -top-24 -left-24 w-60 h-60 bg-pink-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
              <Wand2 className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                GenAI Event Architect
              </h2>
              <p className="text-xs text-slate-400">
                Describe your dream celebration & our GenAI engine will build the entire roadmap
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          
          {/* Event Category Type Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Select Celebration Category
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { type: 'wedding', label: 'Wedding', icon: '💍' },
                { type: 'birthday', label: 'Birthday', icon: '🎂' },
                { type: 'community', label: 'Community', icon: '🎪' },
                { type: 'festival', label: 'Festival / Gala', icon: '✨' },
              ].map((item) => (
                <button
                  type="button"
                  key={item.type}
                  onClick={() => setEventType(item.type as EventType)}
                  className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-sm font-medium transition-all ${
                    eventType === item.type
                      ? 'bg-gradient-to-r from-pink-600/20 to-indigo-600/20 border-pink-500 text-pink-300 shadow-glow'
                      : 'bg-slate-850 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Inspiring Presets */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 uppercase tracking-wider">
                <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                Quick Inspiration Presets
              </span>
              <span className="text-[11px] text-slate-500">Tap to load</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {PRESET_IDEAS.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => selectPreset(preset)}
                  className="text-left p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-pink-500/40 text-xs text-slate-300 hover:text-pink-300 transition-all flex items-start gap-2 group"
                >
                  <Sparkles className="w-3.5 h-3.5 text-pink-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="truncate">{preset.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Custom Event Name / Title (Optional) */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Celebration Title (Optional)
            </label>
            <input
              type="text"
              value={customTitle}
              onChange={(e) => setCustomTitle(e.target.value)}
              placeholder="e.g. Maya & Kabir’s Sunset Wedding / Vivaan’s Superhero 5th Birthday"
              className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
            />
          </div>

          {/* GenAI Vision Prompt */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Your Vision & Requirements (Budget, Guests, Mood, Special Wishes)
            </label>
            <textarea
              rows={3}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. Plan an intimate 2-day outdoor wedding in Jaipur for 150 guests with ₹20 Lakhs budget. We want warm candlelit lighting, live Sufi music, vegan catering options, and an acoustic high tea..."
              className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl p-4 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isGenerating || !prompt.trim()}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-pink-600 via-rose-500 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white font-bold text-sm tracking-wide shadow-glow transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.01] active:scale-98"
            >
              {isGenerating ? (
                <>
                  <Sparkles className="w-5 h-5 animate-spin text-pink-200" />
                  <span>Synthesizing Budgets, Timelines & Vendor Checklists...</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Generate Full Event Architecture with GenAI</span>
                </>
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

