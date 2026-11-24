import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FloatingSocialBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { language } = useLanguage();
  const isAr = language === 'ar';

  const socialLinks = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      url: 'https://wa.me/201019741633?text=Hello%20AWA%20Group,%20I%20would%20like%20to%20inquire%20about%20your%20products%20and%20solutions.',
      title: isAr ? 'واتساب — تواصل مباشر' : 'WhatsApp — Direct Inquiries',
      brandColor: '#25D366',
      hoverGlow: '0 0 16px rgba(37, 211, 102, 0.4)',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.677.15-.2.301-.777.979-.953 1.18-.175.2-.351.226-.652.075s-1.271-.469-2.42-1.494c-.895-.798-1.5-1.784-1.676-2.085s-.019-.463.132-.613c.135-.134.301-.351.451-.527.151-.175.201-.301.301-.501.101-.2.05-.376-.025-.527s-.677-1.631-.928-2.233c-.244-.587-.493-.507-.677-.517-.175-.01-.376-.01-.577-.01s-.527.075-.803.376c-.276.301-1.053 1.028-1.053 2.508s1.079 2.909 1.229 3.11c.15.2 2.122 3.24 5.14 4.544.718.31 1.279.496 1.716.635.721.23 1.378.197 1.9.12.581-.088 1.78-.727 2.03-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.201-.577-.351zM12.05 2C6.52 2 2.03 6.49 2.03 12.02c0 1.77.46 3.49 1.33 5.01L2 22l5.12-1.34a10.02 10.02 0 0 0 4.93 1.28h.01c5.52 0 10.01-4.49 10.01-10.02C22.07 6.49 17.58 2 12.05 2zm.01 18.33h-.01a8.32 8.32 0 0 1-4.24-1.16l-.3-.18-3.15.83.84-3.07-.2-.31a8.33 8.33 0 1 1 7.06 3.89z"/>
        </svg>
      ),
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/awa-food-solutions/',
      title: isAr ? 'لينكد إن — AWA Group' : 'LinkedIn — AWA Group',
      brandColor: '#0A66C2',
      hoverGlow: '0 0 16px rgba(10, 102, 194, 0.4)',
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z"/>
        </svg>
      ),
    },
    {
      id: 'facebook',
      name: 'Facebook',
      url: 'https://www.facebook.com/awafoodsolutions/',
      title: isAr ? 'فيسبوك — AWA Solutions' : 'Facebook — AWA Solutions',
      brandColor: '#1877F2',
      hoverGlow: '0 0 16px rgba(24, 119, 242, 0.4)',
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
  ];

  return (
    <div
      className="floating-social-dock"
      aria-label={isAr ? 'روابط التواصل الاجتماعي' : 'Social Channels'}
      role="region"
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          /* AWA Navy Blue Floating Capsule Dock */
          <motion.div
            key="capsule-dock"
            initial={{ opacity: 0, scale: 0.88, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 12 }}
            transition={{ type: 'spring', damping: 24, stiffness: 350 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              padding: '6px',
              background: '#10263B',
              border: '1.5px solid rgba(255, 255, 255, 0.16)',
              borderRadius: '9999px',
              boxShadow: '0 14px 32px rgba(16, 38, 59, 0.35)',
            }}
          >
            {socialLinks.map((item) => {
              const isHovered = hoveredId === item.id;
              return (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  title={item.title}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: isHovered ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                    color: isHovered ? item.brandColor : '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                    boxShadow: isHovered ? item.hoverGlow : 'none',
                  }}
                >
                  {item.icon}
                </a>
              );
            })}

            {/* Understated Collapse Chevron */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label={isAr ? 'تصغير' : 'Minimize'}
              title={isAr ? 'تصغير' : 'Minimize'}
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: 'transparent',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                marginTop: '1px',
                padding: 0,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <ChevronDown size={14} />
            </button>
          </motion.div>
        ) : (
          /* Minimized AWA Navy Blue Floating Button */
          <motion.div
            key="minimized-fab"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ type: 'spring', damping: 24, stiffness: 350 }}
          >
            <button
              onClick={() => setIsOpen(true)}
              onMouseEnter={() => setHoveredId('fab')}
              onMouseLeave={() => setHoveredId(null)}
              aria-label={isAr ? 'قنوات التواصل' : 'Social Channels'}
              title={isAr ? 'قنوات التواصل' : 'Social Channels'}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: '#10263B',
                color: hoveredId === 'fab' ? '#00A84F' : '#FFFFFF',
                border: '1.5px solid rgba(255, 255, 255, 0.22)',
                boxShadow: '0 10px 24px rgba(16, 38, 59, 0.35)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: hoveredId === 'fab' ? 'scale(1.08)' : 'scale(1)',
              }}
            >
              <MessageSquare size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
