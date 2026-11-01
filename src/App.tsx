import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  LayoutDashboard, DollarSign, Clock, Users, 
  Sparkles, UserCheck, Bot 
} from 'lucide-react';
import { EventPlan, EventType } from './types';
import { INITIAL_EVENTS, generateEventPlanWithAI } from './services/aiGenerator';
import { Header } from './components/Header';
import { EventOverview } from './components/EventOverview';
import { BudgetManager } from './components/BudgetManager';
import { TimelineManager } from './components/TimelineManager';
import { VendorManager } from './components/VendorManager';
import { IdeasStudio } from './components/IdeasStudio';
import { GuestManager } from './components/GuestManager';
import { NewEventModal } from './components/NewEventModal';
import { AICopilotDrawer } from './components/AICopilotDrawer';
import { PrintDossierModal } from './components/PrintDossierModal';

const STORAGE_KEY = 'celebraite_events_v1';

export const App: React.FC = () => {
  // Load initial events from localStorage or fallback
  const [events, setEvents] = useState<EventPlan[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse saved events:', e);
    }
    return INITIAL_EVENTS;
  });

  const [activeEventId, setActiveEventId] = useState<string>(events[0]?.id || 'evt-wedding-01');
  const [activeTab, setActiveTab] = useState<string>('overview');
  
  // Modals & Drawers
  const [isNewEventModalOpen, setIsNewEventModalOpen] = useState(false);
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);
  const [isDossierOpen, setIsDossierOpen] = useState(false);
  const [copilotPrefill, setCopilotPrefill] = useState('');

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
    } catch (e) {
      console.error('Failed to save events to storage:', e);
    }
  }, [events]);

  const activeEvent = events.find(e => e.id === activeEventId) || events[0];

  // Celebration Fireworks Confetti
  const triggerCelebration = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ec4899', '#8b5cf6', '#f59e0b', '#10b981', '#3b82f6']
    });
  };

  const handleUpdateActiveEvent = (updated: EventPlan) => {
    setEvents(prev => prev.map(e => e.id === updated.id ? updated : e));
  };

  const handleCreateNewEvent = (prompt: string, eventType: EventType, customTitle?: string) => {
    const newPlan = generateEventPlanWithAI(prompt, eventType, customTitle);
    setEvents(prev => [newPlan, ...prev]);
    setActiveEventId(newPlan.id);
    setActiveTab('overview');
    triggerCelebration();
  };

  const handleOpenCopilotWithQuery = (query: string) => {
    setCopilotPrefill(query);
    setIsCopilotOpen(true);
  };

  const handleExportJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(events, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `CelebrAIte_Backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImportJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], 'UTF-8');
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setEvents(parsed);
            setActiveEventId(parsed[0].id);
            triggerCelebration();
          }
        } catch (err) {
          alert('Invalid JSON file format.');
        }
      };
    }
  };

  const TABS = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'budget', label: 'Budget Allocator', icon: DollarSign, badge: activeEvent.budgetCategories.length },
    { id: 'timeline', label: 'Timeline & Run-of-Show', icon: Clock, badge: activeEvent.timeline.reduce((acc, p) => acc + p.items.length, 0) },
    { id: 'vendors', label: 'Vendors Hub', icon: Users, badge: activeEvent.vendors.length },
    { id: 'ideas', label: 'Personalized Ideas', icon: Sparkles, badge: activeEvent.ideas.length },
    { id: 'guests', label: 'RSVP & Seating', icon: UserCheck, badge: activeEvent.guests.length }
  ];

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans selection:bg-pink-500 selection:text-white">
      
      {/* Top Navbar Header */}
      <Header
        events={events}
        activeEvent={activeEvent}
        onSelectEvent={(id) => setActiveEventId(id)}
        onOpenNewEventModal={() => setIsNewEventModalOpen(true)}
        onToggleCopilot={() => setIsCopilotOpen(!isCopilotOpen)}
        isCopilotOpen={isCopilotOpen}
        onExportDossier={() => setIsDossierOpen(true)}
        onExportJson={handleExportJson}
        onImportJson={handleImportJson}
        onCelebrationTrigger={triggerCelebration}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Navigation Tabs Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-slate-800/80 no-scrollbar">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all shrink-0 border ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-600/20 to-indigo-600/20 text-white border-pink-500/50 shadow-glow'
                    : 'bg-slate-900/40 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-900/80 hover:border-slate-700'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-pink-400' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
                {tab.badge !== undefined && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? 'bg-pink-500 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content Panels */}
        <div className="pb-16">
          {activeTab === 'overview' && (
            <EventOverview
              event={activeEvent}
              onNavigateTab={(tab) => {
                if (tab === 'copilot') {
                  setIsCopilotOpen(true);
                } else {
                  setActiveTab(tab);
                }
              }}
              onTriggerConfetti={triggerCelebration}
            />
          )}

          {activeTab === 'budget' && (
            <BudgetManager
              event={activeEvent}
              onUpdateEvent={handleUpdateActiveEvent}
              onOpenCopilotWithQuery={handleOpenCopilotWithQuery}
            />
          )}

          {activeTab === 'timeline' && (
            <TimelineManager
              event={activeEvent}
              onUpdateEvent={handleUpdateActiveEvent}
              onTriggerConfetti={triggerCelebration}
            />
          )}

          {activeTab === 'vendors' && (
            <VendorManager
              event={activeEvent}
              onUpdateEvent={handleUpdateActiveEvent}
              onOpenCopilotWithQuery={handleOpenCopilotWithQuery}
            />
          )}

          {activeTab === 'ideas' && (
            <IdeasStudio
              event={activeEvent}
              onUpdateEvent={handleUpdateActiveEvent}
              onOpenCopilotWithQuery={handleOpenCopilotWithQuery}
            />
          )}

          {activeTab === 'guests' && (
            <GuestManager
              event={activeEvent}
              onUpdateEvent={handleUpdateActiveEvent}
            />
          )}
        </div>

      </main>

      {/* Floating Bottom AI Assistant Pill (Mobile/Desktop quick launcher) */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => setIsCopilotOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-pink-600 via-rose-500 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-glow transition-all transform hover:scale-105 active:scale-95 group"
        >
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <Bot className="w-3.5 h-3.5 text-white animate-pulse" />
          </div>
          <span>Ask Event Copilot</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        </button>
      </div>

      {/* New Event Modal */}
      <NewEventModal
        isOpen={isNewEventModalOpen}
        onClose={() => setIsNewEventModalOpen(false)}
        onGenerate={handleCreateNewEvent}
      />

      {/* AICopilot Drawer */}
      <AICopilotDrawer
        isOpen={isCopilotOpen}
        onClose={() => setIsCopilotOpen(false)}
        event={activeEvent}
        onUpdateEvent={handleUpdateActiveEvent}
        prefilledPrompt={copilotPrefill}
      />

      {/* Executive Print Dossier Modal */}
      <PrintDossierModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
        event={activeEvent}
      />

    </div>
  );
};

export default App;
