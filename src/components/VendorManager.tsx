import React, { useState } from 'react';
import { 
  Users, Phone, Mail, CheckCircle, Circle, 
  Plus, ExternalLink, Star, ShieldCheck, Sparkles, Trash2 
} from 'lucide-react';
import { EventPlan, VendorItem } from '../types';

interface VendorManagerProps {
  event: EventPlan;
  onUpdateEvent: (updated: EventPlan) => void;
  onOpenCopilotWithQuery: (q: string) => void;
}

export const VendorManager: React.FC<VendorManagerProps> = ({
  event,
  onUpdateEvent,
  onOpenCopilotWithQuery
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [vendorName, setVendorName] = useState('');
  const [vendorCategory, setVendorCategory] = useState<VendorItem['category']>('Catering');
  const [vendorContact, setVendorContact] = useState('');
  const [vendorPhone, setVendorPhone] = useState('');
  const [vendorEmail, setVendorEmail] = useState('');
  const [vendorQuote, setVendorQuote] = useState('');
  const [deliverablesText, setDeliverablesText] = useState('');

  const toggleChecklistItem = (vendorId: string, itemIdx: number) => {
    const updatedVendors = event.vendors.map(v => {
      if (v.id === vendorId) {
        const nextChecklist = v.checklist.map((c, idx) => {
          if (idx === itemIdx) return { ...c, done: !c.done };
          return c;
        });
        return { ...v, checklist: nextChecklist };
      }
      return v;
    });

    onUpdateEvent({ ...event, vendors: updatedVendors });
  };

  const updateVendorStatus = (vendorId: string, status: VendorItem['status']) => {
    const updatedVendors = event.vendors.map(v => {
      if (v.id === vendorId) return { ...v, status };
      return v;
    });
    onUpdateEvent({ ...event, vendors: updatedVendors });
  };

  const handleDeleteVendor = (vendorId: string) => {
    const updatedVendors = event.vendors.filter(v => v.id !== vendorId);
    onUpdateEvent({ ...event, vendors: updatedVendors });
  };

  const handleAddVendor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vendorName.trim()) return;

    const deliverables = deliverablesText
      ? deliverablesText.split(',').map(s => s.trim()).filter(Boolean)
      : ['Primary event deliverable agreement'];

    const newVendor: VendorItem = {
      id: `v-${Date.now()}`,
      name: vendorName.trim(),
      category: vendorCategory,
      contact: vendorContact.trim() || 'Lead Manager',
      phone: vendorPhone.trim() || '+91 90000 00000',
      email: vendorEmail.trim() || 'contact@vendor.com',
      status: 'contacted',
      quote: parseFloat(vendorQuote) || 50000,
      deliverables,
      checklist: [
        { item: 'Sign formal service contract with penalty clause', done: false },
        { item: 'Advance payment receipt & invoice generated', done: false },
        { item: 'Direct phone number of on-ground lead locked', done: false }
      ],
      rating: 4.8
    };

    onUpdateEvent({
      ...event,
      vendors: [...event.vendors, newVendor]
    });

    setVendorName('');
    setVendorContact('');
    setVendorPhone('');
    setVendorEmail('');
    setVendorQuote('');
    setDeliverablesText('');
    setShowAddModal(false);
  };

  const categories = ['all', 'Venue', 'Catering', 'Photography', 'Decor & Florist', 'Music & DJ', 'Logistics & Security'];

  const filteredVendors = selectedCategory === 'all'
    ? event.vendors
    : event.vendors.filter(v => v.category === selectedCategory);

  return (
    <div className="space-y-6">
      
      {/* Header & Action Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-amber-400" />
            Vendor Hub & Verification Checklists
          </h2>
          <p className="text-xs text-slate-400">
            Track RFQs, deliverables, contracts, and quality safety gates
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => onOpenCopilotWithQuery('Draft a strict vendor contract negotiation checklist with cancellation buffer')}
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold transition-all shadow-glow"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>AI Negotiation Script</span>
          </button>

          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-500 hover:to-rose-500 text-white text-xs font-bold shadow-glow transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Add Vendor Partner</span>
          </button>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              selectedCategory === cat
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            {cat === 'all' ? `All Vendors (${event.vendors.length})` : cat}
          </button>
        ))}
      </div>

      {/* Vendor Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredVendors.map((vendor) => {
          const checklistDone = vendor.checklist.filter(c => c.done).length;
          const isChecklistComplete = checklistDone === vendor.checklist.length && vendor.checklist.length > 0;

          return (
            <div 
              key={vendor.id}
              className="glass-panel p-6 rounded-3xl border border-slate-800 hover:border-slate-700 transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Top Vendor Row */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-white">{vendor.name}</h3>
                      {vendor.rating && (
                        <span className="flex items-center gap-0.5 text-xs font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-md border border-amber-400/20">
                          <Star className="w-3 h-3 fill-amber-400" />
                          {vendor.rating}
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-medium text-pink-400">{vendor.category}</span>
                  </div>

                  {/* Status Dropdown */}
                  <select
                    value={vendor.status}
                    onChange={(e) => updateVendorStatus(vendor.id, e.target.value as VendorItem['status'])}
                    className={`text-xs font-bold px-2.5 py-1 rounded-xl border focus:outline-none cursor-pointer uppercase tracking-wider ${
                      vendor.status === 'booked' || vendor.status === 'paid'
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                        : vendor.status === 'shortlisted'
                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                        : 'bg-slate-800 text-slate-300 border-slate-700'
                    }`}
                  >
                    <option value="researching" className="bg-slate-900">Researching</option>
                    <option value="contacted" className="bg-slate-900">Contacted</option>
                    <option value="shortlisted" className="bg-slate-900">Shortlisted</option>
                    <option value="booked" className="bg-slate-900">Booked & Locked</option>
                    <option value="paid" className="bg-slate-900">Fully Paid</option>
                  </select>
                </div>

                {/* Contact & Quote Info */}
                <div className="bg-slate-950/60 p-3 rounded-2xl border border-slate-800/80 space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Primary Contact:</span>
                    <span className="font-semibold text-white">{vendor.contact}</span>
                  </div>
                  {vendor.phone && (
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-1">
                        <Phone className="w-3 h-3 text-emerald-400" /> Phone:
                      </span>
                      <a href={`tel:${vendor.phone}`} className="hover:text-pink-400 font-mono">
                        {vendor.phone}
                      </a>
                    </div>
                  )}
                  {vendor.email && (
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-1">
                        <Mail className="w-3 h-3 text-indigo-400" /> Email:
                      </span>
                      <a href={`mailto:${vendor.email}`} className="hover:text-pink-400 truncate max-w-[180px]">
                        {vendor.email}
                      </a>
                    </div>
                  )}
                  <div className="flex items-center justify-between pt-1 border-t border-slate-800">
                    <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Agreed Quote:</span>
                    <span className="font-black text-amber-400 text-sm">
                      {event.currency}{vendor.quote.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Deliverables Tags */}
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Contract Deliverables:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {vendor.deliverables.map((deliv, idx) => (
                      <span 
                        key={idx}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-850 text-slate-300 border border-slate-750"
                      >
                        • {deliv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interactive Quality & Safety Checklist */}
                <div className="pt-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Verification Checklist ({checklistDone}/{vendor.checklist.length})
                    </span>
                    {isChecklistComplete && (
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                        Verified
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-1.5">
                    {vendor.checklist.map((chk, idx) => (
                      <div
                        key={idx}
                        onClick={() => toggleChecklistItem(vendor.id, idx)}
                        className={`p-2 rounded-xl border text-xs flex items-center gap-2 cursor-pointer transition-all ${
                          chk.done 
                            ? 'bg-emerald-500/5 border-emerald-500/20 text-slate-300' 
                            : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        {chk.done ? (
                          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                        ) : (
                          <Circle className="w-4 h-4 text-slate-600 shrink-0" />
                        )}
                        <span className={chk.done ? 'line-through text-slate-400' : ''}>{chk.item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-800 mt-2">
                <button
                  onClick={() => onOpenCopilotWithQuery(`Write a polite follow-up or negotiation email to ${vendor.name} regarding their ${event.currency}${vendor.quote} quote for ${event.title}`)}
                  className="text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Draft Message via AI</span>
                </button>

                <button
                  onClick={() => handleDeleteVendor(vendor.id)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-slate-800 transition-colors"
                  title="Remove vendor"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Vendor Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Plus className="w-5 h-5 text-amber-400" />
              Add Vendor Partner
            </h3>

            <form onSubmit={handleAddVendor} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                  Vendor / Agency Name
                </label>
                <input
                  type="text"
                  value={vendorName}
                  onChange={(e) => setVendorName(e.target.value)}
                  placeholder="e.g. Royal Beats DJ Sound / Blossom Floral Co."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                    Category
                  </label>
                  <select
                    value={vendorCategory}
                    onChange={(e) => setVendorCategory(e.target.value as VendorItem['category'])}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
                  >
                    <option value="Venue">Venue</option>
                    <option value="Catering">Catering</option>
                    <option value="Photography">Photography</option>
                    <option value="Decor & Florist">Decor & Florist</option>
                    <option value="Music & DJ">Music & DJ</option>
                    <option value="Attire & Styling">Attire & Styling</option>
                    <option value="Logistics & Security">Logistics & Security</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                    Estimated Quote ({event.currency})
                  </label>
                  <input
                    type="number"
                    value={vendorQuote}
                    onChange={(e) => setVendorQuote(e.target.value)}
                    placeholder="75000"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                    Contact Person
                  </label>
                  <input
                    type="text"
                    value={vendorContact}
                    onChange={(e) => setVendorContact(e.target.value)}
                    placeholder="Manager name"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={vendorPhone}
                    onChange={(e) => setVendorPhone(e.target.value)}
                    placeholder="+91 98..."
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                  Deliverables (comma separated)
                </label>
                <input
                  type="text"
                  value={deliverablesText}
                  onChange={(e) => setDeliverablesText(e.target.value)}
                  placeholder="e.g. 4K Video Drone, 2 Albums, Teaser Reel"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
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
                  className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-slate-950 text-xs font-bold shadow-glow"
                >
                  Save Vendor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

