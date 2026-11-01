import React, { useState } from 'react';
import { 
  DollarSign, Plus, AlertTriangle, 
  Sparkles, Trash2 
} from 'lucide-react';
import type { EventPlan, BudgetItem } from '../types';

interface BudgetManagerProps {
  event: EventPlan;
  onUpdateEvent: (updated: EventPlan) => void;
  onOpenCopilotWithQuery: (q: string) => void;
}

export const BudgetManager: React.FC<BudgetManagerProps> = ({
  event,
  onUpdateEvent,
  onOpenCopilotWithQuery
}) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [newAllocated, setNewAllocated] = useState('');
  const [newSpent, setNewSpent] = useState('');
  const [newNotes, setNewNotes] = useState('');

  // Editing state
  const [editingId, setEditingId] = useState<string | null>(null);

  const totalAllocated = event.budgetCategories.reduce((acc, item) => acc + item.allocated, 0);
  const totalSpent = event.budgetCategories.reduce((acc, item) => acc + item.spent, 0);
  const remainingBudget = event.totalBudget - totalSpent;
  const isOverBudget = remainingBudget < 0;

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCategory.trim() || !newAllocated) return;

    const allocatedNum = parseFloat(newAllocated) || 0;
    const spentNum = parseFloat(newSpent) || 0;
    const status: 'on_track' | 'warning' | 'over' = spentNum > allocatedNum ? 'over' : spentNum > allocatedNum * 0.9 ? 'warning' : 'on_track';

    const newItem: BudgetItem = {
      id: `b-${Date.now()}`,
      category: newCategory.trim(),
      allocated: allocatedNum,
      spent: spentNum,
      notes: newNotes.trim() || 'Custom expense line item',
      status
    };

    const updatedCategories = [...event.budgetCategories, newItem];
    onUpdateEvent({
      ...event,
      budgetCategories: updatedCategories
    });

    setNewCategory('');
    setNewAllocated('');
    setNewSpent('');
    setNewNotes('');
    setShowAddModal(false);
  };

  const handleDeleteItem = (id: string) => {
    const updatedCategories = event.budgetCategories.filter(c => c.id !== id);
    onUpdateEvent({
      ...event,
      budgetCategories: updatedCategories
    });
  };

  const handleUpdateItem = (id: string, spentDelta: number) => {
    const updated = event.budgetCategories.map(item => {
      if (item.id === id) {
        const newSpent = Math.max(0, item.spent + spentDelta);
        const status: 'on_track' | 'warning' | 'over' = newSpent > item.allocated ? 'over' : newSpent > item.allocated * 0.9 ? 'warning' : 'on_track';
        return { ...item, spent: newSpent, status };
      }
      return item;
    });
    onUpdateEvent({ ...event, budgetCategories: updated });
  };

  return (
    <div className="space-y-6">
      
      {/* Top Financial Dashboard Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Total Budget Setting */}
        <div className="glass-panel p-5 rounded-3xl border border-slate-800 space-y-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Event Budget</span>
          <div className="text-2xl sm:text-3xl font-black text-white">
            {event.currency}{event.totalBudget.toLocaleString()}
          </div>
          <div className="text-xs text-slate-400">
            Target allocated: {event.currency}{totalAllocated.toLocaleString()} ({Math.round((totalAllocated / event.totalBudget) * 100)}%)
          </div>
        </div>

        {/* Total Spent */}
        <div className="glass-panel p-5 rounded-3xl border border-slate-800 space-y-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Actual Spent / Committed</span>
          <div className="text-2xl sm:text-3xl font-black text-pink-400">
            {event.currency}{totalSpent.toLocaleString()}
          </div>
          <div className="text-xs text-slate-400 flex items-center gap-1.5">
            <span className={`inline-block w-2 h-2 rounded-full ${totalSpent > totalAllocated ? 'bg-rose-400' : 'bg-emerald-400'}`}></span>
            <span>{Math.round((totalSpent / event.totalBudget) * 100)}% of total fund utilized</span>
          </div>
        </div>

        {/* Remaining Fund / Surplus */}
        <div className={`glass-panel p-5 rounded-3xl border space-y-2 ${
          isOverBudget ? 'border-rose-500/40 bg-rose-500/5' : 'border-slate-800'
        }`}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {isOverBudget ? 'Budget Deficit / Overrun' : 'Remaining Unspent Buffer'}
            </span>
            {isOverBudget && <AlertTriangle className="w-4 h-4 text-rose-400" />}
          </div>
          <div className={`text-2xl sm:text-3xl font-black ${isOverBudget ? 'text-rose-400' : 'text-emerald-400'}`}>
            {isOverBudget ? '-' : '+'}{event.currency}{Math.abs(remainingBudget).toLocaleString()}
          </div>
          <div className="text-xs text-slate-400">
            {isOverBudget ? 'Action required: Trim non-essential items' : 'Healthy liquidity for emergency logistics'}
          </div>
        </div>

      </div>

      {/* Action Bar: Add Item & AI Budget Optimization */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-pink-400" />
            Budget Categories & Cost Breakdown
          </h2>
          <p className="text-xs text-slate-400">Track quotes vs actual invoices in real-time</p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => onOpenCopilotWithQuery(`How can I optimize and cut 15% costs from my ₹${event.totalBudget} budget?`)}
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 border border-pink-500/30 text-xs font-bold transition-all shadow-glow"
          >
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span>AI Cost Reduction Tips</span>
          </button>

          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white text-xs font-bold shadow-glow transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Add Category</span>
          </button>
        </div>
      </div>

      {/* Category Expense Cards / Breakdown Table */}
      <div className="space-y-3">
        {event.budgetCategories.map((cat) => {
          const percentUsed = Math.round((cat.spent / Math.max(cat.allocated, 1)) * 100);
          const isOver = cat.spent > cat.allocated;

          return (
            <div 
              key={cat.id} 
              className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-sm font-bold text-white">{cat.category}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      isOver 
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' 
                        : percentUsed >= 90 
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    }`}>
                      {isOver ? 'Over Budget' : percentUsed >= 90 ? 'Near Limit' : 'On Track'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">{cat.notes}</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-sm font-black text-white">
                      {event.currency}{cat.spent.toLocaleString()}{' '}
                      <span className="text-xs font-normal text-slate-400">/ {event.currency}{cat.allocated.toLocaleString()}</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-400">
                      {percentUsed}% utilized
                    </div>
                  </div>

                  {/* Quick delta controls */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleUpdateItem(cat.id, 5000)}
                      title="Add ₹5,000 to spent"
                      className="px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] font-semibold text-slate-300 border border-slate-700"
                    >
                      +5k
                    </button>
                    <button
                      onClick={() => handleDeleteItem(cat.id)}
                      className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-slate-800 transition-colors"
                      title="Delete category"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${
                    isOver ? 'bg-rose-500' : percentUsed > 85 ? 'bg-amber-400' : 'bg-gradient-to-r from-pink-500 to-indigo-500'
                  }`}
                  style={{ width: `${Math.min(percentUsed, 100)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Category Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Plus className="w-5 h-5 text-pink-400" />
              Add Budget Line Item
            </h3>

            <form onSubmit={handleAddItem} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                  Category Name
                </label>
                <input
                  type="text"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="e.g. Wedding Favors / Sound License / Pyrotechnics"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-pink-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                    Allocated Limit ({event.currency})
                  </label>
                  <input
                    type="number"
                    value={newAllocated}
                    onChange={(e) => setNewAllocated(e.target.value)}
                    placeholder="50000"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-pink-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                    Initial Spent ({event.currency})
                  </label>
                  <input
                    type="number"
                    value={newSpent}
                    onChange={(e) => setNewSpent(e.target.value)}
                    placeholder="0"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-pink-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                  Notes & Vendor Inclusions
                </label>
                <input
                  type="text"
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  placeholder="Inclusions, payment terms, or contact notes"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-pink-500"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold shadow-glow"
                >
                  Save Line Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

