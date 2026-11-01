import React, { useState } from 'react';
import { 
  Sparkles, Copy, Check, Lightbulb, Utensils, 
  MessageSquare, Wand2, Music, PartyPopper, Plus 
} from 'lucide-react';
import { EventPlan, PersonalizedIdea } from '../types';

interface IdeasStudioProps {
  event: EventPlan;
  onUpdateEvent: (updated: EventPlan) => void;
  onOpenCopilotWithQuery: (q: string) => void;
}

export const IdeasStudio: React.FC<IdeasStudioProps> = ({
  event,
  onUpdateEvent,
  onOpenCopilotWithQuery
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showAddCustomModal, setShowAddCustomModal] = useState(false);
  const [customIdeaTitle, setCustomIdeaTitle] = useState('');
  const [customIdeaDesc, setCustomIdeaDesc] = useState('');
  const [customIdeaCategory, setCustomIdeaCategory] = useState<PersonalizedIdea['category']>('theme');
  const [customIdeaTags, setCustomIdeaTags] = useState('');

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleAddCustomIdea = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customIdeaTitle.trim() || !customIdeaDesc.trim()) return;

    const newIdea: PersonalizedIdea = {
      id: `idea-${Date.now()}`,
      category: customIdeaCategory,
      title: customIdeaTitle.trim(),
      description: customIdeaDesc.trim(),
      highlight: 'Personalized Custom Curated',
      tags: customIdeaTags ? customIdeaTags.split(',').map(t => t.trim()).filter(Boolean) : ['Custom', 'Creative']
    };

    onUpdateEvent({
      ...event,
      ideas: [...event.ideas, newIdea]
    });

    setCustomIdeaTitle('');
    setCustomIdeaDesc('');
    setCustomIdeaTags('');
    setShowAddCustomModal(false);
  };

  const categories = [
    { id: 'all', label: 'All Creative Ideas' },
    { id: 'theme', label: 'Theme & Aesthetics' },
    { id: 'menu', label: 'Curated Menus & Cocktails' },
    { id: 'invitation', label: 'Invitations & WhatsApp Copy' },
    { id: 'speech_games', label: 'Speeches, Games & Activities' }
  ];

  const filteredIdeas = activeCategory === 'all'
    ? event.ideas
    : event.ideas.filter(i => i.category === activeCategory);

  return (
    <div className="space-y-6">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-pink-400" />
            Creative Suite & Personalized Ideas
          </h2>
          <p className="text-xs text-slate-400">
            GenAI bespoke concepts for decor, menus, interactive games, speeches & invitations
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => onOpenCopilotWithQuery(`Generate 3 fresh, out-of-the-box entertainment ideas and party games for ${event.title}`)}
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 border border-pink-500/30 text-xs font-bold transition-all shadow-glow"
          >
            <Wand2 className="w-4 h-4 text-pink-400" />
            <span>Generate More with AI</span>
          </button>

          <button
            onClick={() => setShowAddCustomModal(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white text-xs font-bold shadow-glow transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Add Custom Idea</span>
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-2">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeCategory === cat.id
                ? 'bg-pink-600/30 text-pink-300 border border-pink-500/50'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Ideas Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredIdeas.map((idea) => {
          return (
            <div 
              key={idea.id}
              className="glass-panel p-6 rounded-3xl border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-800 text-pink-300 border border-slate-700">
                      {idea.category.replace('_', ' ').toUpperCase()}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-pink-300 transition-colors pt-1">
                      {idea.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => copyToClipboard(`${idea.title}\n\n${idea.description}`, idea.id)}
                    title="Copy concept to clipboard"
                    className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
                  >
                    {copiedId === idea.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line bg-slate-950/50 p-3.5 rounded-2xl border border-slate-800/80">
                  {idea.description}
                </p>

                {idea.highlight && (
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-medium">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{idea.highlight}</span>
                  </div>
                )}
              </div>

              {/* Tags & Action */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {idea.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onOpenCopilotWithQuery(`Elaborate in detail on this idea: "${idea.title}" for ${event.title}`)}
                  className="text-xs text-pink-400 hover:text-pink-300 font-semibold flex items-center gap-1 transition-colors"
                >
                  <span>Elaborate with AI</span>
                  <Wand2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Custom Idea Modal */}
      {showAddCustomModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Plus className="w-5 h-5 text-pink-400" />
              Add Creative Idea
            </h3>

            <form onSubmit={handleAddCustomIdea} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                  Category
                </label>
                <select
                  value={customIdeaCategory}
                  onChange={(e) => setCustomIdeaCategory(e.target.value as PersonalizedIdea['category'])}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-pink-500"
                >
                  <option value="theme">Theme & Aesthetics</option>
                  <option value="menu">Menu & Signature Drinks</option>
                  <option value="invitation">Invitation & Copywriting</option>
                  <option value="speech_games">Speeches & Party Games</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                  Idea Title
                </label>
                <input
                  type="text"
                  value={customIdeaTitle}
                  onChange={(e) => setCustomIdeaTitle(e.target.value)}
                  placeholder="e.g. Polaroid Guestbook Station / Signature Lychee Fizz"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-pink-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                  Description / Script
                </label>
                <textarea
                  rows={4}
                  value={customIdeaDesc}
                  onChange={(e) => setCustomIdeaDesc(e.target.value)}
                  placeholder="Details of the idea, instructions or script..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3.5 text-sm text-slate-100 focus:outline-none focus:border-pink-500 resize-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  value={customIdeaTags}
                  onChange={(e) => setCustomIdeaTags(e.target.value)}
                  placeholder="Interactive, Memories, Photo"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-pink-500"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddCustomModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold shadow-glow"
                >
                  Save Idea
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

