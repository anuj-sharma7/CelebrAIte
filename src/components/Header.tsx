import React from 'react';
import { Sparkles, Calendar, PlusCircle, Download, Upload, Bot, PartyPopper } from 'lucide-react';
import type { EventPlan } from '../types';

interface HeaderProps {
  events: EventPlan[];
  activeEvent: EventPlan;
  onSelectEvent: (eventId: string) => void;
  onOpenNewEventModal: () => void;
  onToggleCopilot: () => void;
  isCopilotOpen: boolean;
  onExportDossier: () => void;
  onExportJson: () => void;
  onImportJson: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCelebrationTrigger: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  events,
  activeEvent,
  onSelectEvent,
  onOpenNewEventModal,
  onToggleCopilot,
  isCopilotOpen,
  onExportDossier,
  onExportJson,
  onImportJson,
  onCelebrationTrigger,
}) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo & PromptWars Challenge 5 Brand */}
          <div className="flex items-center gap-3">
            <div className="relative group cursor-pointer" onClick={onCelebrationTrigger} title="Click for celebratory fireworks!">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-pink-600 via-rose-500 to-amber-400 p-[2px] shadow-glow flex items-center justify-center transform group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-pink-400 animate-pulse" />
                </div>
              </div>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5 font-serif-luxury">
                  Celebr<span className="text-pink-400 font-sans">AI</span>te
                </span>
                <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/30">
                  PromptWars #5
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">GenAI-Powered Celebration & Event Planner</p>
            </div>
          </div>

          {/* Center: Event Selector & Generator */}
          <div className="flex items-center gap-2">
            <div className="relative flex items-center">
              <Calendar className="w-4 h-4 text-pink-400 absolute left-3 pointer-events-none" />
              <select
                value={activeEvent.id}
                onChange={(e) => onSelectEvent(e.target.value)}
                className="bg-slate-900/90 border border-slate-700/80 rounded-xl pl-9 pr-8 py-2 text-sm text-slate-200 font-medium hover:border-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-500/40 appearance-none cursor-pointer max-w-[200px] sm:max-w-xs truncate transition-all shadow-inner"
              >
                {events.map((evt) => (
                  <option key={evt.id} value={evt.id} className="bg-slate-900 text-slate-100">
                    {evt.type === 'wedding' ? '💍 ' : evt.type === 'birthday' ? '🎂 ' : '🎪 '}
                    {evt.title}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={onOpenNewEventModal}
              className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-xl shadow-glow transition-all transform hover:scale-[1.02] active:scale-95"
            >
              <PlusCircle className="w-4 h-4" />
              <span className="hidden md:inline">Plan with GenAI</span>
              <span className="md:hidden">New</span>
            </button>
          </div>

          {/* Right Action Icons: Export, Confetti & Copilot Drawer */}
          <div className="flex items-center gap-2">
            {/* Confetti button */}
            <button
              onClick={onCelebrationTrigger}
              title="Celebration Sparks"
              className="p-2 rounded-xl text-slate-400 hover:text-amber-400 hover:bg-slate-900 border border-slate-800 transition-colors hidden sm:flex"
            >
              <PartyPopper className="w-4 h-4" />
            </button>

            {/* Print / Export Dossier */}
            <button
              onClick={onExportDossier}
              title="Printable Event Dossier"
              className="p-2 rounded-xl text-slate-400 hover:text-pink-400 hover:bg-slate-900 border border-slate-800 transition-colors hidden sm:flex items-center gap-1.5 text-xs font-medium"
            >
              <Download className="w-4 h-4" />
              <span className="hidden lg:inline">Dossier</span>
            </button>

            {/* JSON Export */}
            <button
              onClick={onExportJson}
              title="Backup Plan JSON"
              className="p-2 rounded-xl text-slate-400 hover:text-indigo-400 hover:bg-slate-900 border border-slate-800 transition-colors hidden xl:flex text-xs"
            >
              JSON
            </button>

            {/* Hidden File Input for JSON Import */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={onImportJson}
              accept=".json"
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              title="Import Saved Plan"
              className="p-2 rounded-xl text-slate-400 hover:text-emerald-400 hover:bg-slate-900 border border-slate-800 transition-colors hidden xl:flex"
            >
              <Upload className="w-4 h-4" />
            </button>

            {/* AI Copilot Toggle Button */}
            <button
              onClick={onToggleCopilot}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                isCopilotOpen
                  ? 'bg-pink-500/20 text-pink-300 border-pink-500/50 shadow-glow'
                  : 'bg-slate-900/90 text-slate-300 border-slate-700/80 hover:border-pink-500/40 hover:text-white'
              }`}
            >
              <Bot className="w-4 h-4 text-pink-400 animate-bounce" />
              <span className="hidden sm:inline">AI Copilot</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

