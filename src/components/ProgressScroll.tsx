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
      setProgress(pct/100);
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
                background: 'var(--color-primary-100)',
                transform: `scaleX(${progress})`,
                transformOrigin: 'left',
                willChange: 'transform'
            }} 
        />
        </div>
  );
}