import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  glow?: boolean;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', glow = false, className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 font-sans font-semibold text-sm tracking-wider uppercase rounded-full transition-all duration-300 cursor-pointer select-none',
        variant === 'primary' && 'bg-[#c9a882] text-white hover:bg-[#b8936e] hover:scale-[1.03] px-8 py-4',
        variant === 'outline' && 'border-2 border-[#c9a882] text-[#c9a882] hover:bg-[#c9a882] hover:text-white px-8 py-4 relative overflow-hidden',
        variant === 'ghost' && 'text-[#8a8070] hover:text-[#1a1a1a] px-6 py-3',
        glow && 'shadow-[0_0_30px_rgba(201,168,130,0.3)] hover:shadow-[0_0_45px_rgba(201,168,130,0.45)]',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
