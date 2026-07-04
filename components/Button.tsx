import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "cyan";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 active:scale-95 cursor-pointer outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-indigo";

  const sizeStyles = {
    sm: "px-4 py-1.5 text-xs font-mono tracking-wider uppercase",
    md: "px-6 py-2.5 text-sm font-mono tracking-wider uppercase",
    lg: "px-8 py-3.5 text-base font-mono tracking-wider uppercase",
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-brand-indigo to-violet-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:brightness-110",
    cyan: "bg-gradient-to-r from-brand-cyan to-blue-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:brightness-110",
    secondary: "border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 backdrop-blur-sm",
    ghost: "text-white/60 hover:text-white hover:bg-white/5",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
