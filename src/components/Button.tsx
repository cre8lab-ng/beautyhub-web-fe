import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  fullWidth?: boolean;
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className = '', 
    variant = 'primary', 
    size = 'md', 
    fullWidth = false, 
    isLoading = false, 
    children, 
    disabled, 
    ...props 
  }, ref) => {
    
    // Base styles
    const baseStyles = 'inline-flex items-center justify-center font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
    
    // Variant styles
    const variants = {
      primary: 'bg-black text-white uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98]',
      secondary: 'bg-white text-black shadow-md hover:scale-110 active:scale-95', // Matching the close button on image
      outline: 'border-2 border-black text-black hover:bg-black hover:text-white',
      ghost: 'text-gray-500 hover:bg-black/5 hover:text-black', // Matching modal close button
      icon: 'rounded-full p-1 text-gray-500 hover:bg-black/5 hover:text-black transition-colors', // Specific for icon buttons
    };

    // Size styles
    const sizes = {
      sm: 'text-xs px-3 py-2',
      md: 'text-sm px-4 py-3',
      lg: 'text-base px-6 py-4',
      icon: 'h-8 w-8', // Fixed size for icon buttons
    };

    // Width styles
    const widthStyles = fullWidth ? 'w-full' : '';

    // Combine styles
    // Note: In a real project with more dependencies, usage of clsx or tailwind-merge is recommended
    const combinedClassName = `
      ${baseStyles} 
      ${variants[variant]} 
      ${size === 'icon' ? sizes.icon : sizes[size]} 
      ${widthStyles} 
      ${className}
    `.trim();

    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
