import React, { useState } from 'react';
import { 
  Users, CheckCircle2, Clock, XCircle, 
  Plus, Utensils, Trash2, Search, Filter 
} from 'lucide-react';
import { EventPlan, GuestItem } from '../types';

interface GuestManagerProps {
  event: EventPlan;
  onUpdateEvent: (updated: EventPlan) => void;
}

export const GuestManager: React.FC<GuestManagerProps> = ({
  event,
  onUpdateEvent
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [guestCategory, setGuestCategory] = useState<GuestItem['category']>('Friends');
  const [guestDietary, setGuestDietary] = useState<GuestItem['dietary']>('Veg');
  const [guestPlusOnes, setGuestPlusOnes] = useState('0');
  const [guestTable, setGuestTable] = useState('');

  const totalInvited = event.guests.reduce((acc, g) => acc + 1 + g.plusOnes, 0);
  const confirmed = event.guests.filter(g => g.status === 'confirmed').reduce((acc, g) => acc + 1 + g.plusOnes, 0);
  const pending = event.guests.filter(g => g.status === 'pending').reduce((acc, g) => acc + 1 + g.plusOnes, 0);
  const declined = event.guests.filter(g => g.status === 'declined').reduce((acc, g) => acc + 1 + g.plusOnes, 0);

  // Dietary counts
  const vegCount = event.guests.filter(g => g.dietary === 'Veg').length;
  const nonVegCount = event.guests.filter(g => g.dietary === 'Non-Veg').length;
  const jainCount = event.guests.filter(g => g.dietary === 'Jain').length;
  const veganCount = event.guests.filter(g => g.dietary === 'Vegan').length;

  const handleUpdateStatus = (id: string, status: GuestItem['status']) => {
    const updated = event.guests.map(g => {
      if (g.id === id) return { ...g, status };
      return g;
    });
    onUpdateEvent({ ...event, guests: updated });
  };

  const handleDeleteGuest = (id: string) => {
    const updated = event.guests.filter(g => g.id !== id);
    onUpdateEvent({ ...event, guests: updated });
  };

  const handleAddGuest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    const newGuest: GuestItem = {
      id: `g-${Date.now()}`,
      name: guestName.trim(),
      category: guestCategory,
      status: 'pending',
      dietary: guestDietary,
      plusOnes: parseInt(guestPlusOnes) || 0,
      table: guestTable.trim() || 'General Seating'
    };

    onUpdateEvent({
      ...event,
      guests: [...event.guests, newGuest]
    });

    setGuestName('');
    setGuestPlusOnes('0');
    setGuestTable('');
    setShowAddModal(false);
  };

  const filteredGuests = event.guests.filter(g => {
    const matchesSearch = g.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (g.table && g.table.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || g.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      
      {/* Top RSVP Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="glass-panel p-4 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Headcount</span>
          <div className="text-xl sm:text-2xl font-black text-white">{totalInvited}</div>
          <p className="text-[11px] text-slate-500">Target: {event.guestCount}</p>
        </div>

        <div className="glass-panel p-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 space-y-1">
          <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> Confirmed
          </span>
          <div className="text-xl sm:text-2xl font-black text-emerald-400">{confirmed}</div>
          <p className="text-[11px] text-slate-400">{Math.round((confirmed / Math.max(totalInvited, 1)) * 100)}% of responses</p>
        </div>

        <div className="glass-panel p-4 rounded-2xl border border-amber-500/20 bg-amber-500/5 space-y-1">
          <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> Awaiting RSVP
          </span>
          <div className="text-xl sm:text-2xl font-black text-amber-400">{pending}</div>
          <p className="text-[11px] text-slate-400">Follow-up needed</p>
        </div>

        <div className="glass-panel p-4 rounded-2xl border border-rose-500/20 bg-rose-500/5 space-y-1">
          <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1">
            <XCircle className="w-3.5 h-3.5" /> Declined
          </span>
          <div className="text-xl sm:text-2xl font-black text-rose-400">{declined}</div>
          <p className="text-[11px] text-slate-400">Seats recovered</p>
        </div>
      </div>

      {/* Dietary Quick Summary Bar */}
      <div className="glass-panel p-4 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2 text-slate-300 font-semibold">
          <Utensils className="w-4 h-4 text-pink-400" />
          <span>Catering Dietary Split:</span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-medium">
            🌱 Veg: {vegCount}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">
            🍗 Non-Veg: {nonVegCount}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-medium">
            🙏 Jain: {jainCount}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-teal-500/10 text-teal-300 border border-teal-500/20 font-medium">
            🥗 Vegan: {veganCount}
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search guest or table..."
            className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-pink-500"
          />
        </div>

        <div className="flex items-center gap-2">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none"
          >
            <option value="all">All RSVP Statuses</option>
            <option value="confirmed">Confirmed</option>
            <option value="pending">Pending</option>
            <option value="declined">Declined</option>
          </select>

          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white text-xs font-bold shadow-glow transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Add Guest</span>
          </button>
        </div>
      </div>

      {/* Guests Table */}
      <div className="glass-panel rounded-3xl border border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900/80 border-b border-slate-800 text-slate-400 uppercase tracking-wider font-semibold">
              <tr>
                <th className="py-3 px-4">Guest Name</th>
                <th className="py-3 px-4">Circle / Category</th>
                <th className="py-3 px-4">Dietary Preference</th>
                <th className="py-3 px-4">Plus-Ones</th>
                <th className="py-3 px-4">Seating Table</th>
                <th className="py-3 px-4">RSVP Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredGuests.map((guest) => (
                <tr key={guest.id} className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-3 px-4 font-bold text-white">
                    {guest.name}
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 rounded-md bg-slate-850 text-slate-300 border border-slate-750">
                      {guest.category}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-medium text-pink-400">{guest.dietary}</span>
                  </td>
                  <td className="py-3 px-4 text-slate-300 font-mono">
                    +{guest.plusOnes}
                  </td>
                  <td className="py-3 px-4 text-slate-300">
                    {guest.table || 'General'}
                  </td>
                  <td className="py-3 px-4">
                    <select
                      value={guest.status}
                      onChange={(e) => handleUpdateStatus(guest.id, e.target.value as GuestItem['status'])}
                      className={`text-xs font-semibold px-2 py-1 rounded-lg border focus:outline-none cursor-pointer ${
                        guest.status === 'confirmed'
                          ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                          : guest.status === 'declined'
                          ? 'bg-rose-500/10 text-rose-300 border-rose-500/30'
                          : 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                      }`}
                    >
                      <option value="confirmed" className="bg-slate-900">Confirmed</option>
                      <option value="pending" className="bg-slate-900">Pending</option>
                      <option value="declined" className="bg-slate-900">Declined</option>
                    </select>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => handleDeleteGuest(guest.id)}
                      className="p-1 rounded text-slate-500 hover:text-rose-400 hover:bg-slate-800 transition-colors"
                      title="Remove guest"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Guest Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Plus className="w-5 h-5 text-pink-400" />
              Add Guest / Family
            </h3>

            <form onSubmit={handleAddGuest} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                  Full Name / Household
                </label>
                <input
                  type="text"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="e.g. Anand & Shilpa Verma"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-pink-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                    Category
                  </label>
                  <select
                    value={guestCategory}
                    onChange={(e) => setGuestCategory(e.target.value as GuestItem['category'])}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-pink-500"
                  >
                    <option value="Family">Family</option>
                    <option value="Friends">Friends</option>
                    <option value="VIP">VIP</option>
                    <option value="Colleagues">Colleagues</option>
                    <option value="Community">Community</option>
                    <option value="Vendor">Vendor</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                    Dietary
                  </label>
                  <select
                    value={guestDietary}
                    onChange={(e) => setGuestDietary(e.target.value as GuestItem['dietary'])}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-pink-500"
                  >
                    <option value="Veg">Vegetarian</option>
                    <option value="Non-Veg">Non-Veg</option>
                    <option value="Jain">Jain</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Gluten-Free">Gluten-Free</option>
                    <option value="None">None</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                    Plus-Ones / Kids
                  </label>
                  <input
                    type="number"
                    value={guestPlusOnes}
                    onChange={(e) => setGuestPlusOnes(e.target.value)}
                    min="0"
                    max="10"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-pink-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                    Table / Zone
                  </label>
                  <input
                    type="text"
                    value={guestTable}
                    onChange={(e) => setGuestTable(e.target.value)}
                    placeholder="e.g. Table 4 / Lawn Pod A"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-pink-500"
                  />
                </div>
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
                  Save Guest
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

