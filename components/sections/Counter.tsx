'use client';

import React, { useEffect, useState, useRef } from 'react';
import { CounterData } from '@/types/templates.types';
import { FaSmile, FaSuitcaseRolling, FaGlobe, FaAward } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaSmile': return <FaSmile className="w-10 h-10 lg:w-12 lg:h-12 text-white" />;
    case 'FaSuitcaseRolling': return <FaSuitcaseRolling className="w-10 h-10 lg:w-12 lg:h-12 text-white" />;
    case 'FaGlobe': return <FaGlobe className="w-10 h-10 lg:w-12 lg:h-12 text-white" />;
    case 'FaUserStar': // Fallback for existing data
    case 'FaAward': return <FaAward className="w-10 h-10 lg:w-12 lg:h-12 text-white" />;
    default: return null;
  }
};

const AnimatedNumber = ({ target, suffix }: { target: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000; // 2 seconds
    let hasStarted = false;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          hasStarted = true;
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-black text-white tracking-tight">
      {count}{suffix || ''}
    </span>
  );
};

export const Counter = ({ data }: { data?: CounterData }) => {
  if (!data || !data.counters || data.counters.length === 0) return null;

  return (
    <section
      className="relative py-12 md:py-12 overflow-hidden"
      style={{
        backgroundColor: '#0c5c6f', // Fallback color that matches the screenshot
        backgroundImage: 'linear-gradient(rgba(12, 92, 111, 0.9), rgba(12, 92, 111, 0.9)), url("/banner/bg-02.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.counters.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 p-6 md:p-8 rounded-xl border border-white/20 bg-black/20 backdrop-blur-sm shadow-xl"
            >
              <div className="flex-shrink-0 opacity-80">
                {renderIcon(item.icon)}
              </div>
              <div className="flex flex-col">
                <AnimatedNumber target={item.number} suffix={item.suffix} />
                <span className="text-white/90 font-medium text-sm md:text-base mt-1">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
