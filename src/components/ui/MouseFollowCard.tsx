import { useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';

interface MouseFollowCardProps {
  children: React.ReactNode;
  className?: string;
}

export function MouseFollowCard({ children, className }: MouseFollowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        'relative rounded-3xl border border-[#e8e0d5] bg-[#fafaf8] overflow-hidden transition-all duration-300',
        'hover:border-[#c9a882]/40 hover:shadow-[0_8px_32px_rgba(201,168,130,0.12)] hover:-translate-y-1',
        'before:absolute before:inset-0 before:rounded-3xl before:opacity-0 hover:before:opacity-100',
        'before:transition-opacity before:duration-300',
        className
      )}
      style={{
        background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(201,168,130,.06) 0%, transparent 60%), #fafaf8',
      }}
    >
      {children}
    </div>
  );
}
