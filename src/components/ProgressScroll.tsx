import { useState, useEffect } from 'react';

export default function ProgressScroll() {
    const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const totalScrollable = docHeight - winHeight;
      const pct = totalScrollable > 0 ? (scrollTop / totalScrollable) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-16 left-0 w-full h-1 z-200">
        <div 
            style={{ 
                height: '4px',
                width: `${progress}%`,
                background: 'var(--color-primary-100)',
                transition: 'width 0.01s linear',
            }} 
        />
        </div>
  );
}