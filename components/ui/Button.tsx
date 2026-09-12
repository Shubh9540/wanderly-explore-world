import React from 'react';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'decorated';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const LeftDecorator = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" className="opacity-90">
    <path d="M 4 12 L 17 12" />
    <circle cx="18" cy="12" r="2" fill="var(--color-primary)" stroke="none" />
    <path d="M 12 7 L 7 4" />
    <path d="M 12 17 L 7 20" />
  </svg>
);

const RightDecorator = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" className="opacity-90">
    <path d="M 7 12 L 20 12" />
    <circle cx="6" cy="12" r="2" fill="var(--color-primary)" stroke="none" />
    <path d="M 12 7 L 17 4" />
    <path d="M 12 17 L 17 20" />
  </svg>
);

export const Button = ({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button'
}: ButtonProps) => {
  const baseClasses = "bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] text-white font-bold text-base lg:text-lg px-5 py-2 lg:px-7 lg:py-2.5 rounded-full flex items-center justify-center gap-2 shadow-[0_8px_20px_-6px_rgba(248,161,20,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(248,161,20,0.6)] hover:scale-105 transition-all duration-300";
  
  const content = (
    <>
      {children}
      <FaChevronRight className="text-[12px] ml-1" />
    </>
  );

  const buttonElement = href ? (
    <Link href={href} className={`${baseClasses} ${className}`} onClick={onClick}>
      {content}
    </Link>
  ) : (
    <button type={type} onClick={onClick} className={`${baseClasses} ${className}`}>
      {content}
    </button>
  );

  if (variant === 'decorated') {
    return (
      <div className="flex items-center justify-center gap-3">
        <LeftDecorator />
        {buttonElement}
        <RightDecorator />
      </div>
    );
  }

  return buttonElement;
};
