import { cn } from '../../utils/cn';

interface PulseRingProps {
  children: React.ReactNode;
  className?: string;
}

export function PulseRing({ children, className }: PulseRingProps) {
  return (
    <div className={cn('relative inline-flex', className)}>
      <div className="absolute inset-0 rounded-full bg-[#4ade80]/20 animate-ping scale-[1.15]" style={{ animationDuration: '2s' }} />
      <div className="absolute inset-0 rounded-full bg-[#4ade80]/10 animate-ping scale-[1.25]" style={{ animationDuration: '2s', animationDelay: '0.3s' }} />
      <div className="relative overflow-hidden rounded-full">
        {children}
      </div>
    </div>
  );
}
