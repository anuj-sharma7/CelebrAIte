import React from 'react';
import { 
  Calendar, MapPin, Users, DollarSign, CheckSquare, 
  Palette, Clock, Sparkles, ChevronRight 
} from 'lucide-react';
import { EventPlan } from '../types';

interface EventOverviewProps {
  event: EventPlan;
  onNavigateTab: (tab: string) => void;
  onTriggerConfetti: () => void;
}

export const EventOverview: React.FC<EventOverviewProps> = ({
  event,
  onNavigateTab,
  onTriggerConfetti
}) => {
  // Compute key stats
  const totalSpent = event.budgetCategories.reduce((sum, item) => sum + item.spent, 0);
  const budgetUtilization = Math.round((totalSpent / event.totalBudget) * 100);

  const allTasks = event.timeline.flatMap(p => p.items);
  const completedTasks = allTasks.filter(t => t.completed).length;
  const taskProgress = allTasks.length > 0 ? Math.round((completedTasks / allTasks.length) * 100) : 0;

  const bookedVendors = event.vendors.filter(v => v.status === 'booked' || v.status === 'paid').length;
  const confirmedGuests = event.guests.filter(g => g.status === 'confirmed').reduce((acc, g) => acc + 1 + g.plusOnes, 0);

  return (
    <div className="space-y-6">
      
      {/* Hero Banner Card with Ambient Glow */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-700/80 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 p-6 sm:p-8 shadow-2xl">
        {/* Dynamic theme accent background blur */}
        <div 
          className="absolute top-0 right-0 w-96 h-96 opacity-20 blur-3xl pointer-events-none rounded-full"
          style={{ background: event.theme.colors[0] || '#ec4899' }}
        />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-pink-500/10 text-pink-400 border border-pink-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                {event.type.toUpperCase()}
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                {event.daysRemaining > 0 ? `${event.daysRemaining} Days to Go` : 'Event Day!'}
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Ready: {taskProgress}% Complete
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-serif-luxury">
              {event.title}
            </h1>

            <p className="text-sm text-slate-300 italic leading-relaxed line-clamp-2">
              “{event.visionPrompt}”
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-pink-400" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-amber-400" />
                <span>{event.guestCount} Guests Expected</span>
              </div>
            </div>
          </div>

          {/* Quick Action Celebratory CTA */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
            <button
              onClick={onTriggerConfetti}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-pink-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-bold shadow-glow transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Celebrate Milestone!</span>
            </button>
            <button
              onClick={() => onNavigateTab('copilot')}
              className="px-5 py-3 rounded-2xl bg-slate-800/90 hover:bg-slate-750 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700 transition-colors flex items-center justify-center gap-2"
            >
              <span>Ask Event AI Advisor</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 4 Interactive Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Budget Card */}
        <div 
          onClick={() => onNavigateTab('budget')}
          className="glass-card p-5 rounded-2xl cursor-pointer hover:border-pink-500/50 transition-all group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Budget</span>
            <div className="w-9 h-9 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-xl sm:text-2xl font-black text-white">
              {event.currency}{event.totalBudget.toLocaleString()}
            </div>
            <div className="text-xs text-slate-400 mt-1 flex items-center justify-between">
              <span>Spent: {event.currency}{totalSpent.toLocaleString()}</span>
              <span className={`font-semibold ${budgetUtilization > 100 ? 'text-rose-400' : 'text-emerald-400'}`}>
                {budgetUtilization}%
              </span>
            </div>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-1.5 mt-3 overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-500 ${
                budgetUtilization > 100 ? 'bg-rose-500' : 'bg-gradient-to-r from-pink-500 to-indigo-500'
              }`}
              style={{ width: `${Math.min(budgetUtilization, 100)}%` }}
            />
          </div>
        </div>

        {/* Timeline Tasks Card */}
        <div 
          onClick={() => onNavigateTab('timeline')}
          className="glass-card p-5 rounded-2xl cursor-pointer hover:border-indigo-500/50 transition-all group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Timeline Tasks</span>
            <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <CheckSquare className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-xl sm:text-2xl font-black text-white">
              {completedTasks} / {allTasks.length} Done
            </div>
            <div className="text-xs text-slate-400 mt-1 flex items-center justify-between">
              <span>{allTasks.length - completedTasks} remaining</span>
              <span className="font-semibold text-indigo-400">{taskProgress}%</span>
            </div>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-1.5 mt-3 overflow-hidden">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-500"
              style={{ width: `${taskProgress}%` }}
            />
          </div>
        </div>

        {/* Vendors Card */}
        <div 
          onClick={() => onNavigateTab('vendors')}
          className="glass-card p-5 rounded-2xl cursor-pointer hover:border-amber-500/50 transition-all group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Vendor Partners</span>
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-xl sm:text-2xl font-black text-white">
              {bookedVendors} / {event.vendors.length} Booked
            </div>
            <div className="text-xs text-slate-400 mt-1 flex items-center justify-between">
              <span>{event.vendors.filter(v => v.status !== 'booked').length} in discussions</span>
              <span className="font-semibold text-amber-400">
                {Math.round((bookedVendors / Math.max(event.vendors.length, 1)) * 100)}%
              </span>
            </div>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-1.5 mt-3 overflow-hidden">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-amber-500 to-rose-500 transition-all duration-500"
              style={{ width: `${Math.round((bookedVendors / Math.max(event.vendors.length, 1)) * 100)}%` }}
            />
          </div>
        </div>

        {/* RSVPs Card */}
        <div 
          onClick={() => onNavigateTab('guests')}
          className="glass-card p-5 rounded-2xl cursor-pointer hover:border-emerald-500/50 transition-all group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">RSVP Attendance</span>
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-xl sm:text-2xl font-black text-white">
              {confirmedGuests} Confirmed
            </div>
            <div className="text-xs text-slate-400 mt-1 flex items-center justify-between">
              <span>Target: {event.guestCount} guests</span>
              <span className="font-semibold text-emerald-400">
                {Math.round((confirmedGuests / event.guestCount) * 100)}%
              </span>
            </div>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-1.5 mt-3 overflow-hidden">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
              style={{ width: `${Math.min(Math.round((confirmedGuests / event.guestCount) * 100), 100)}%` }}
            />
          </div>
        </div>

      </div>

      {/* Theme & Moodboard Spotlight Banner */}
      <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 to-amber-400 flex items-center justify-center text-slate-950 font-bold shadow-glow">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                Aesthetic Concept & Theme Palette: <span className="text-pink-400">{event.theme.name}</span>
              </h3>
              <p className="text-xs text-slate-400">{event.theme.aesthetic}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-slate-400">Colors:</span>
            <div className="flex items-center gap-1.5">
              {event.theme.colors.map((color, idx) => (
                <div 
                  key={idx} 
                  className="w-7 h-7 rounded-full border-2 border-slate-800 shadow-md transform hover:scale-125 transition-transform"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-300">
          <div>
            <span className="font-semibold text-slate-200">Dress Code / Styling: </span>
            <span className="text-pink-300 font-medium">{event.theme.dressCode}</span>
          </div>

          <button
            onClick={() => onNavigateTab('ideas')}
            className="text-pink-400 hover:text-pink-300 font-semibold flex items-center gap-1 transition-colors"
          >
            <span>Explore personalized decor, menus & invites</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};

