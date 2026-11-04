import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Send,
  MessageCircle,
  ExternalLink,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import {
  BUSINESS_INFO,
  buildCategoryEnquiryUrl,
  buildGeneralEnquiryUrl,
} from '../utils/enquiry';
import { PRODUCT_CATEGORIES } from '../data/catalog';

interface ChatMessage {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  options?: Array<{ label: string; action: string; category?: string }>;
  whatsappHref?: string;
  whatsappLabel?: string;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'welcome-1',
    sender: 'assistant',
    text: 'Welcome to Interior Boxx. I am your concierge for our New Hafeezpet showroom in Hyderabad.',
  },
  {
    id: 'welcome-2',
    sender: 'assistant',
    text: 'Which interior material collection would you like to explore today? You can select a category below or ask a question:',
    options: [
      { label: 'Interior Hardware', action: 'category', category: 'Interior Hardware' },
      { label: 'Modular Kitchen Fittings', action: 'category', category: 'Kitchen Fittings' },
      { label: 'Natural Veneers', action: 'category', category: 'Natural Veneers' },
      { label: 'Decorative Panels', action: 'category', category: 'Decorative Panels' },
      { label: 'Plywood & Boards', action: 'category', category: 'Plywood' },
      { label: 'Architectural Laminates', action: 'category', category: 'Laminates' },
      { label: 'Showroom Location & Hours', action: 'location' },
      { label: 'Speak with Showroom Team', action: 'contact' },
    ],
  },
];

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages]);

  const handleSelectOption = (option: { label: string; action: string; category?: string }) => {
    // Add user selection message
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: option.label,
    };

    let replyMsg: ChatMessage;

    if (option.action === 'category' && option.category) {
      const categoryData = PRODUCT_CATEGORIES.find(
        (c) => c.name.toLowerCase() === option.category?.toLowerCase() || c.homeTitle.toLowerCase() === option.category?.toLowerCase()
      );
      const desc = categoryData
        ? categoryData.description
        : 'Our collections feature premium finishes on display in our New Hafeezpet showroom.';

      replyMsg = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: `Here is information on our ${option.category} collection:\n\n${desc}\n\nWould you like to connect directly with our showroom team on WhatsApp with a prefilled enquiry?`,
        whatsappHref: buildCategoryEnquiryUrl(option.category),
        whatsappLabel: `Enquire on WhatsApp about ${option.category}`,
        options: [
          { label: 'View All Collections', action: 'reset' },
          { label: 'Showroom Location', action: 'location' },
        ],
      };
    } else if (option.action === 'location') {
      replyMsg = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: `Interior Boxx is located at:\n${BUSINESS_INFO.address}\n\nPhone: ${BUSINESS_INFO.phoneDisplay}\nRating: 4.8/5 on Google Reviews.`,
        whatsappHref: BUSINESS_INFO.googleMapsUrl,
        whatsappLabel: 'Open in Google Maps',
        options: [
          { label: 'Explore Products', action: 'reset' },
          { label: 'Speak on WhatsApp', action: 'whatsapp' },
        ],
      };
    } else if (option.action === 'contact' || option.action === 'whatsapp') {
      replyMsg = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: `You can reach our showroom advisors directly via WhatsApp (${BUSINESS_INFO.whatsappDisplay}) or call us at ${BUSINESS_INFO.phoneDisplay}.`,
        whatsappHref: buildGeneralEnquiryUrl(),
        whatsappLabel: 'Open WhatsApp Chat',
        options: [
          { label: 'Explore Collections', action: 'reset' },
        ],
      };
    } else {
      replyMsg = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: 'Select any product collection to view details and prefill a WhatsApp enquiry:',
        options: [
          { label: 'Interior Hardware', action: 'category', category: 'Interior Hardware' },
          { label: 'Kitchen Fittings', action: 'category', category: 'Kitchen Fittings' },
          { label: 'Natural Veneers', action: 'category', category: 'Natural Veneers' },
          { label: 'Decorative Panels', action: 'category', category: 'Decorative Panels' },
          { label: 'Plywood', action: 'category', category: 'Plywood' },
          { label: 'Laminates', action: 'category', category: 'Laminates' },
        ],
      };
    }

    setMessages((prev) => [...prev, userMsg, replyMsg]);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const query = input.trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
    };

    setInput('');

    // Predefined keyword matching
    const qLower = query.toLowerCase();
    let replyText = '';
    let categoryMatch = '';

    if (qLower.includes('theme') || qLower.includes('color') || qLower.includes('colour') || qLower.includes('palette')) {
      replyText = 'We provide two curated luxury 2-color themes: Option 1 (Obsidian Black & Champagne Gold) and Option 2 (Deep Walnut & Cashmere Alabaster). You can click below to switch, or use the Theme button in the top navigation to suggest your own 2 colors!';
    } else if (qLower.includes('hardware') || qLower.includes('handle') || qLower.includes('lock') || qLower.includes('lever')) {
      categoryMatch = 'Interior Hardware';
      replyText = 'Our Interior Hardware gallery includes grand entrance pull handles, mortise lever sets, and cabinet fittings in brass, bronze, rose gold, and matte black.';
    } else if (qLower.includes('kitchen') || qLower.includes('fitting') || qLower.includes('shutter') || qLower.includes('basket')) {
      categoryMatch = 'Kitchen Fittings';
      replyText = 'Our modular kitchen setup features tambour appliance shutters, glass lift-up wall cabinets, wicker pull-out baskets, and precision soft-close drawer fittings.';
    } else if (qLower.includes('veneer') || qLower.includes('wood') || qLower.includes('walnut') || qLower.includes('oak')) {
      categoryMatch = 'Natural Veneers';
      replyText = 'We showcase authentic natural veneers with organic grain movement in walnut, smoked tones, and natural oak for wall panelling, doors, and bespoke cabinetry.';
    } else if (qLower.includes('panel') || qLower.includes('fluted') || qLower.includes('brass') || qLower.includes('pooja') || qLower.includes('motif')) {
      categoryMatch = 'Decorative Panels';
      replyText = 'Our decorative panel gallery includes architectural fluted timber louvers and authentic cast-brass relief plaques for pooja room doors and accent walls.';
    } else if (qLower.includes('plywood') || qLower.includes('board') || qLower.includes('sheet') || qLower.includes('core')) {
      categoryMatch = 'Plywood';
      replyText = 'We provide high-grade calibrated plywood sheets engineered for dimensional stability, wardrobes, modular kitchens, and custom residential joinery.';
    } else if (qLower.includes('laminate') || qLower.includes('mica') || qLower.includes('matte') || qLower.includes('marble')) {
      categoryMatch = 'Laminates';
      replyText = 'Our laminate collection spans warm ivory, cashmere matte solids, natural woodgrains, marble textures, and textured charcoal slate finishes.';
    } else if (qLower.includes('address') || qLower.includes('where') || qLower.includes('location') || qLower.includes('visit') || qLower.includes('hafeezpet')) {
      replyText = `Interior Boxx is located at Plot-9, S.Y No.80, Subashchandrabose Nagar, New Hafeezpet, Serilingampalle (M), Hyderabad 500049.`;
    } else if (qLower.includes('phone') || qLower.includes('call') || qLower.includes('number') || qLower.includes('contact')) {
      replyText = `You can call our showroom directly at ${BUSINESS_INFO.phoneDisplay} or WhatsApp us at ${BUSINESS_INFO.whatsappDisplay}.`;
    } else {
      replyText = `Thank you for your question. For detailed pricing, availability, and custom project quotes, our showroom advisors in Hyderabad are readily available on WhatsApp.`;
    }

    const replyMsg: ChatMessage = {
      id: `assistant-${Date.now()}`,
      sender: 'assistant',
      text: replyText,
      whatsappHref: categoryMatch
        ? buildCategoryEnquiryUrl(categoryMatch, query)
        : buildGeneralEnquiryUrl(),
      whatsappLabel: categoryMatch
        ? `Enquire on WhatsApp about ${categoryMatch}`
        : 'Chat directly on WhatsApp',
      options: [
        { label: 'Explore Products', action: 'reset' },
        { label: 'Showroom Location', action: 'location' },
      ],
    };

    setMessages((prev) => [...prev, userMsg, replyMsg]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open Interior Boxx Assistant chat"
          className="group relative flex items-center gap-3 px-5 py-3.5 bg-[#171513] text-[#F4EFE6] border border-[#C5A16B]/50 rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.6)] hover:border-[#C5A16B] hover:shadow-[0_6px_28px_rgba(197,161,107,0.35)] transition-all duration-300 cursor-pointer"
        >
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#493426] via-[#C5A16B] to-[#E0C496] flex items-center justify-center text-[#171513]">
              <Sparkles className="w-4 h-4 text-[#171513]" />
            </div>
            {hasUnread && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#C5A16B] border-2 border-[#171513] rounded-full animate-ping" />
            )}
          </div>
          <div className="text-left hidden sm:block">
            <span className="block text-xs font-semibold tracking-wide text-[#C5A16B] uppercase">
              Concierge
            </span>
            <span className="block text-sm font-medium text-[#F4EFE6]">
              Interior Boxx Assistant
            </span>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Interior Boxx Assistant chat window"
          className="w-[calc(100vw-2rem)] sm:w-[410px] h-[560px] max-h-[85vh] bg-[#171513] border border-[#C5A16B]/40 rounded-lg shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#171513] via-[#1E1B18] to-[#493426] border-b border-[#C5A16B]/30 flex items-center justify-between text-[#F4EFE6]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#C5A16B] flex items-center justify-center text-[#171513] shadow-md">
                <Sparkles className="w-4 h-4 text-[#171513]" />
              </div>
              <div>
                <h3 className="font-editorial text-lg font-semibold text-[#F4EFE6]">
                  Interior Boxx Assistant
                </h3>
                <p className="text-[11px] text-[#C5A16B] font-medium tracking-wide flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Showroom Concierge &middot; Hyderabad</span>
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close assistant"
              className="p-1.5 text-[#DFD7C7] hover:text-[#C5A16B] hover:bg-[#262320] rounded-sm transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-[#1E1B18]/70">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-md p-3.5 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-[#C5A16B] to-[#B38F56] text-[#171513] font-medium shadow-sm'
                      : 'bg-[#262320] text-[#F4EFE6] border border-[#493426]/60'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>

                {/* WhatsApp Action Button if provided */}
                {msg.whatsappHref && (
                  <div className="mt-2.5 max-w-[85%]">
                    <a
                      href={msg.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#493426] hover:bg-[#614633] text-[#F4EFE6] border border-[#C5A16B]/50 rounded-sm text-xs font-semibold tracking-wide transition-all shadow-sm group"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#C5A16B]" />
                      <span>{msg.whatsappLabel || 'Continue to WhatsApp'}</span>
                      <ExternalLink className="w-3 h-3 text-[#C5A16B] opacity-75 group-hover:opacity-100" />
                    </a>
                  </div>
                )}

                {/* Predefined Clickable Suggestions */}
                {msg.options && msg.options.length > 0 && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[95%]">
                    {msg.options.map((opt, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleSelectOption(opt)}
                        className="px-2.5 py-1.5 bg-[#171513] hover:bg-[#493426] text-[#DFD7C7] hover:text-[#C5A16B] border border-[#C5A16B]/25 hover:border-[#C5A16B] rounded-sm text-[11px] font-medium transition-colors cursor-pointer text-left"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 bg-[#171513] border-t border-[#C5A16B]/30 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about handles, kitchen, veneers, plywood..."
              className="flex-1 px-3.5 py-2.5 bg-[#1E1B18] border border-[#493426] text-xs text-[#F4EFE6] placeholder:text-[#8E744D] rounded-sm focus:outline-none focus:border-[#C5A16B] transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
              className="p-2.5 bg-[#C5A16B] disabled:bg-[#493426] text-[#171513] disabled:text-[#8E744D] rounded-sm transition-colors cursor-pointer disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Bottom Transparency Disclaimer */}
          <div className="px-3 py-1.5 bg-[#171513] border-t border-[#262320] text-center">
            <span className="text-[10px] text-[#8E744D]">
              Showroom concierge assistant with direct WhatsApp enquiry integration.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
