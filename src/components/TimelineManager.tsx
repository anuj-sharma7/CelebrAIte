import React, { useState } from 'react';
import { 
  Clock, CheckCircle2, Circle, Plus, 
  Calendar, CheckSquare, Sparkles, Trash2 
} from 'lucide-react';
import { EventPlan, TimelinePhase, TimelineTask } from '../types';

interface TimelineManagerProps {
  event: EventPlan;
  onUpdateEvent: (updated: EventPlan) => void;
  onTriggerConfetti: () => void;
}

export const TimelineManager: React.FC<TimelineManagerProps> = ({
  event,
  onUpdateEvent,
  onTriggerConfetti
}) => {
  const [selectedPhaseId, setSelectedPhaseId] = useState<string>('all');
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [targetPhaseId, setTargetPhaseId] = useState<string>(event.timeline[0]?.id || '');
  const [taskTitle, setTaskTitle] = useState('');
  const [taskTime, setTaskTime] = useState('');
  const [taskNotes, setTaskNotes] = useState('');

  const toggleTask = (phaseId: string, taskId: string) => {
    let triggeredComplete = false;

    const updatedTimeline = event.timeline.map(phase => {
      if (phase.id === phaseId) {
        const updatedItems = phase.items.map(item => {
          if (item.id === taskId) {
            const nextCompleted = !item.completed;
            if (nextCompleted) triggeredComplete = true;
            return { ...item, completed: nextCompleted };
          }
          return item;
        });

        // Check if all items in this phase are now completed
        const allDone = updatedItems.every(i => i.completed);
        if (allDone && triggeredComplete) {
          onTriggerConfetti();
        }

        return { ...phase, items: updatedItems };
      }
      return phase;
    });

    onUpdateEvent({
      ...event,
      timeline: updatedTimeline
    });
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskTitle.trim() || !taskTime.trim()) return;

    const newTask: TimelineTask = {
      id: `task-${Date.now()}`,
      title: taskTitle.trim(),
      timeOrOffset: taskTime.trim(),
      completed: false,
      notes: taskNotes.trim() || 'Custom timeline milestone'
    };

    const updatedTimeline = event.timeline.map(phase => {
      if (phase.id === targetPhaseId) {
        return {
          ...phase,
          items: [...phase.items, newTask]
        };
      }
      return phase;
    });

    onUpdateEvent({
      ...event,
      timeline: updatedTimeline
    });

    setTaskTitle('');
    setTaskTime('');
    setTaskNotes('');
    setShowAddTaskModal(false);
  };

  const handleDeleteTask = (phaseId: string, taskId: string) => {
    const updatedTimeline = event.timeline.map(phase => {
      if (phase.id === phaseId) {
        return {
          ...phase,
          items: phase.items.filter(i => i.id !== taskId)
        };
      }
      return phase;
    });
    onUpdateEvent({ ...event, timeline: updatedTimeline });
  };

  const displayedPhases = selectedPhaseId === 'all'
    ? event.timeline
    : event.timeline.filter(p => p.id === selectedPhaseId);

  return (
    <div className="space-y-6">
      
      {/* Top Header & Phase Filter Pills */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-400" />
            Milestones & Master Run-of-Show
          </h2>
          <p className="text-xs text-slate-400">
            From countdown logistics to minute-by-minute day-of execution
          </p>
        </div>

        <button
          onClick={() => {
            setTargetPhaseId(event.timeline[0]?.id || '');
            setShowAddTaskModal(true);
          }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white text-xs font-bold shadow-glow transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Add Milestone / Task</span>
        </button>
      </div>

      {/* Phase selection tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-2">
        <button
          onClick={() => setSelectedPhaseId('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            selectedPhaseId === 'all'
              ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/50'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          All Timeline Phases ({event.timeline.reduce((acc, p) => acc + p.items.length, 0)})
        </button>
        {event.timeline.map(phase => {
          const completedCount = phase.items.filter(i => i.completed).length;
          return (
            <button
              key={phase.id}
              onClick={() => setSelectedPhaseId(phase.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                selectedPhaseId === phase.id
                  ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/50'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <span>{phase.phaseName}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-300 font-mono">
                {completedCount}/{phase.items.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Timeline Phases & Items List */}
      <div className="space-y-6">
        {displayedPhases.map((phase) => {
          const completedInPhase = phase.items.filter(i => i.completed).length;
          const isPhaseDone = completedInPhase === phase.items.length && phase.items.length > 0;

          return (
            <div 
              key={phase.id} 
              className={`glass-panel p-6 rounded-3xl border transition-all space-y-4 ${
                isPhaseDone ? 'border-emerald-500/40 bg-emerald-500/5' : 'border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                    isPhaseDone ? 'bg-emerald-500/20 text-emerald-400' : 'bg-indigo-500/10 text-indigo-400'
                  }`}>
                    {isPhaseDone ? <CheckCircle2 className="w-4 h-4" /> : <Calendar className="w-4 h-4" />}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{phase.phaseName}</h3>
                    <p className="text-xs text-slate-400">
                      {completedInPhase} of {phase.items.length} milestones checked
                    </p>
                  </div>
                </div>

                {isPhaseDone && (
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Phase Accomplished!
                  </span>
                )}
              </div>

              {/* Items / Tasks */}
              <div className="space-y-2.5">
                {phase.items.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleTask(phase.id, item.id)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                      item.completed
                        ? 'bg-slate-950/40 border-slate-800/60 opacity-60'
                        : 'bg-slate-900/60 border-slate-800 hover:border-indigo-500/40 hover:bg-slate-900'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <button
                        type="button"
                        className="mt-0.5 text-slate-400 hover:text-indigo-400 transition-colors"
                      >
                        {item.completed ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        ) : (
                          <Circle className="w-5 h-5 text-slate-600 hover:text-indigo-400" />
                        )}
                      </button>

                      <div className="space-y-0.5">
                        <div className={`text-xs sm:text-sm font-semibold ${
                          item.completed ? 'line-through text-slate-400' : 'text-slate-100'
                        }`}>
                          {item.title}
                        </div>
                        {item.notes && (
                          <p className="text-xs text-slate-400 leading-relaxed">
                            {item.notes}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-800/80 text-indigo-300 border border-slate-700/60">
                        {item.timeOrOffset}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteTask(phase.id, item.id);
                        }}
                        className="p-1 rounded text-slate-600 hover:text-rose-400 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Task Modal */}
      {showAddTaskModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Plus className="w-5 h-5 text-indigo-400" />
              Add Timeline Task / Milestone
            </h3>

            <form onSubmit={handleAddTask} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                  Select Phase
                </label>
                <select
                  value={targetPhaseId}
                  onChange={(e) => setTargetPhaseId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
                >
                  {event.timeline.map(p => (
                    <option key={p.id} value={p.id}>{p.phaseName}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                  Task / Schedule Activity
                </label>
                <input
                  type="text"
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                  placeholder="e.g. DJ Soundcheck / Cake Cutting Ceremony"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                  Time or Countdown Offset
                </label>
                <input
                  type="text"
                  value={taskTime}
                  onChange={(e) => setTaskTime(e.target.value)}
                  placeholder="e.g. 10:30 AM or 2 Weeks Before"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                  Notes / Coordinator Responsible
                </label>
                <input
                  type="text"
                  value={taskNotes}
                  onChange={(e) => setTaskNotes(e.target.value)}
                  placeholder="Who is in charge or critical instructions"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddTaskModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-glow"
                >
                  Save Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

