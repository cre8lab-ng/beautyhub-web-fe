import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  containerClassName?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className = '', 
    type = 'text', 
    label, 
    error, 
    fullWidth = true, 
    containerClassName = '',
    ...props 
  }, ref) => {
    
    const inputStyles = `
      bg-white 
      px-4 
      py-3 
      text-sm 
      font-semibold 
      text-gray-900 
      placeholder-gray-500 
      outline-none 
      transition-all
      ${fullWidth ? 'w-full' : ''}
      ${error 
        ? 'ring-2 ring-red-500' 
        : 'focus:ring-2 focus:ring-black/10' // Changed to black/10 for better visibility on white, can be overridden
      }
      ${className}
    `;

    return (
      <div className={`relative ${fullWidth ? 'w-full' : ''} ${containerClassName}`}>
        {label && (
          <label 
            htmlFor={props.id} 
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        
        <input
          ref={ref}
          type={type}
          className={inputStyles.trim()}
          {...props}
        />
        
        {error && (
          <div className="absolute -bottom-5 left-0 text-xs font-bold text-white bg-red-500 px-1 rounded z-10">
            {error}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
