import React from 'react';
import { X, Printer } from 'lucide-react';
import type { EventPlan } from '../types';

interface PrintDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: EventPlan;
}

export const PrintDossierModal: React.FC<PrintDossierModalProps> = ({
  isOpen,
  onClose,
  event
}) => {
  if (!isOpen) return null;

  const totalSpent = event.budgetCategories.reduce((sum, b) => sum + b.spent, 0);
  const confirmedGuests = event.guests.filter(g => g.status === 'confirmed').reduce((acc, g) => acc + 1 + g.plusOnes, 0);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 my-8">
        
        {/* Top Action Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20">
              Executive Event Dossier
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold shadow-glow transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dossier Content Document */}
        <div className="space-y-8 text-slate-200">
          
          {/* Header Title & Date */}
          <div className="border-b border-slate-800 pb-6 space-y-2">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-extrabold text-white font-serif-luxury">
                {event.title}
              </h1>
              <span className="text-sm font-mono text-pink-400 font-bold uppercase tracking-widest">
                {event.type}
              </span>
            </div>
            <p className="text-sm text-slate-300 italic">
              “{event.visionPrompt}”
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-400 pt-2 font-medium">
              <span>📅 Date: {event.date}</span>
              <span>📍 Location: {event.location}</span>
              <span>👥 Expected Guests: {event.guestCount} (Confirmed: {confirmedGuests})</span>
              <span>💰 Budget: {event.currency}{event.totalBudget.toLocaleString()}</span>
            </div>
          </div>

          {/* Theme & Aesthetics */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-pink-400">
              Aesthetic Concept & Styling
            </h3>
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs space-y-2">
              <div className="font-semibold text-white">Theme: {event.theme.name}</div>
              <p className="text-slate-400">{event.theme.aesthetic}</p>
              <div>
                <span className="font-semibold text-slate-300">Dress Code: </span>
                <span className="text-pink-300">{event.theme.dressCode}</span>
              </div>
            </div>
          </div>

          {/* Budget Breakdown */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-pink-400">
                Budget Allocation Summary
              </h3>
              <span className="text-xs font-semibold text-slate-400">
                Total Committed: {event.currency}{totalSpent.toLocaleString()} / {event.currency}{event.totalBudget.toLocaleString()}
              </span>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-slate-800">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-950 text-slate-400 font-semibold border-b border-slate-800">
                  <tr>
                    <th className="py-2.5 px-3">Category</th>
                    <th className="py-2.5 px-3">Allocated</th>
                    <th className="py-2.5 px-3">Spent</th>
                    <th className="py-2.5 px-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 bg-slate-900/60">
                  {event.budgetCategories.map(b => (
                    <tr key={b.id}>
                      <td className="py-2 px-3 font-medium text-white">{b.category}</td>
                      <td className="py-2 px-3">{event.currency}{b.allocated.toLocaleString()}</td>
                      <td className="py-2 px-3">{event.currency}{b.spent.toLocaleString()}</td>
                      <td className="py-2 px-3 uppercase text-[10px] font-bold text-slate-400">{b.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Master Timeline / Run of Show */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-pink-400">
              Day-of Run-of-Show & Planning Timeline
            </h3>
            <div className="space-y-4">
              {event.timeline.map(phase => (
                <div key={phase.id} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <div className="text-xs font-bold text-indigo-300 border-b border-slate-800 pb-1">
                    {phase.phaseName}
                  </div>
                  <div className="space-y-1.5 pt-1">
                    {phase.items.map(item => (
                      <div key={item.id} className="flex items-center justify-between text-xs">
                        <span className="text-slate-300 flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${item.completed ? 'bg-emerald-400' : 'bg-slate-600'}`}></span>
                          {item.title}
                        </span>
                        <span className="font-mono text-slate-400 text-[11px]">{item.timeOrOffset}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Vendor Partners */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-pink-400">
              Key Vendor Partners Directory
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {event.vendors.map(v => (
                <div key={v.id} className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">{v.name}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md uppercase bg-slate-850 text-amber-400">
                      {v.status}
                    </span>
                  </div>
                  <div className="text-pink-400 text-[11px]">{v.category}</div>
                  <div className="text-slate-400">Contact: {v.contact} ({v.phone || 'N/A'})</div>
                  <div className="text-amber-300 font-semibold pt-1">
                    Quote: {event.currency}{v.quote.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
            Generated with CelebrAIte — GenAI Celebration & Event Planner (PromptWars Challenge 5)
          </div>

        </div>

      </div>
    </div>
  );
};

