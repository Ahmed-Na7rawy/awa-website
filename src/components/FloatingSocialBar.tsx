import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export const FloatingSocialBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const socialLinks = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      url: 'https://wa.me/201019741633?text=Hello%20AWA%20Group,%20I%20would%20like%20to%20inquire%20about%20your%20products%20and%20solutions.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.771.82 2.796.821 3.183 0 5.769-2.587 5.77-5.768.001-3.181-2.585-5.766-5.77-5.766zm10.009 5.828c-.001 5.518-4.49 10.007-10.009 10.007-1.748 0-3.414-.456-4.887-1.258l-5.644 1.48 1.506-5.503c-.878-1.526-1.341-3.268-1.34-5.056.002-5.518 4.491-10.007 10.009-10.007 5.519 0 10.009 4.489 10.009 10.007zm-5.836 2.971c-.24-.12-1.422-.702-1.642-.782-.221-.08-.382-.12-.543.12-.161.24-.622.782-.763.942-.141.16-.281.18-.522.06-.24-.12-1.015-.374-1.933-1.192-.714-.637-1.196-1.424-1.336-1.664-.141-.24-.015-.37.106-.489.109-.107.24-.28.361-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.543-1.309-.744-1.794-.196-.473-.395-.409-.543-.417l-.462-.008c-.16 0-.421.06-.642.3-.221.24-.844.825-.844 2.012s.864 2.333.985 2.493c.12.16 1.7 2.597 4.12 3.642.576.248 1.026.396 1.377.508.579.184 1.106.158 1.523.096.465-.069 1.422-.581 1.623-1.142.2-.562.2-1.043.14-1.143-.06-.101-.221-.16-.462-.28z" fill="#25D366"/>
        </svg>
      ),
      color: '#25D366',
      bgColor: '#ECFDF5',
      borderColor: '#A7F3D0',
      tooltip: 'Chat on WhatsApp (+201019741633)',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/awa-food-solutions/',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      color: '#0A66C2',
      bgColor: '#EFF6FF',
      borderColor: '#BFDBFE',
      tooltip: 'Follow AWA Group on LinkedIn',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      url: 'https://www.facebook.com/awafoodsolutions/',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
        </svg>
      ),
      color: '#1877F2',
      bgColor: '#EFF6FF',
      borderColor: '#BFDBFE',
      tooltip: 'Visit AWA Group on Facebook',
    },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        right: '1.25rem',
        bottom: '5rem',
        zIndex: 990,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.6rem',
      }}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 15 }}
            transition={{ duration: 0.2 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem',
              alignItems: 'center',
            }}
          >
            {socialLinks.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: `1.5px solid ${item.borderColor}`,
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.12) translateY(-2px)';
                  e.currentTarget.style.boxShadow = `0 8px 25px ${item.color}44`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.1)';
                }}
                title={item.tooltip}
              >
                {item.icon}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sleek Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '38px',
          height: '38px',
          borderRadius: '50%',
          background: '#0F172A',
          color: '#FFFFFF',
          border: '1.5px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 20px rgba(15, 23, 42, 0.3)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.25s ease',
          padding: 0,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
        title={isOpen ? 'Hide Social Icons' : 'Show Social Icons'}
      >
        {isOpen ? <X size={16} /> : <MessageCircle size={16} />}
      </button>
    </div>
  );
};
