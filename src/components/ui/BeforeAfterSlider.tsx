import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  }, []);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const onTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const onInteractionEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onInteractionEnd);
      window.addEventListener('touchmove', onTouchMove, { passive: false });
      window.addEventListener('touchend', onInteractionEnd);
    } else {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onInteractionEnd);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onInteractionEnd);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onInteractionEnd);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onInteractionEnd);
    };
  }, [isDragging, onMouseMove, onTouchMove, onInteractionEnd]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] sm:aspect-video rounded-3xl overflow-hidden select-none touch-pan-y shadow-[0_20px_50px_rgba(201,168,130,0.15)] group cursor-ew-resize border-4 border-white"
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
    >
      {/* After Image (Background) */}
      <img 
        src={afterImage} 
        alt="Tratamento finalizado" 
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before Image (Foreground with clip-path) */}
      <img 
        src={beforeImage} 
        alt="Antes do tratamento" 
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        draggable={false}
      />

      {/* Labels */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-surface-0/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold text-text-main tracking-widest shadow-sm z-10 pointer-events-none uppercase">
        Antes
      </div>
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-primary/95 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold tracking-widest shadow-sm z-10 pointer-events-none uppercase">
        Depois
      </div>

      {/* Slider Handle and Line */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_15px_rgba(201,168,130,0.5)] z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-transform duration-300 group-hover:scale-110 pointer-events-auto">
          <ArrowLeftRight className="w-5 h-5 text-primary" strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
};
