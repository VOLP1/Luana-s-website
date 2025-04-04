"use client"

import React, { useEffect, useRef, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  delay = 0,
  className = '' 
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fallback timer para garantir que a animação ocorra mesmo se o IntersectionObserver falhar
    const fallbackTimer = setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.classList.add('animate-in');
      }
    }, 1000 + delay); // 1 segundo de espera + delay configurado

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (entry.target instanceof HTMLElement) {
                entry.target.classList.add('animate-in');
              }
            }, delay);
            observer.unobserve(entry.target);
            clearTimeout(fallbackTimer); // Limpa o timer de fallback se o observer funcionar
          }
        });
      },
      {
        threshold: 0.05, // Reduzido para detectar mesmo uma pequena parte do elemento
        rootMargin: '0px 0px -50px 0px' // Margem mais generosa
      }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      clearTimeout(fallbackTimer);
    };
  }, [delay]);

  return (
    <div 
      ref={sectionRef} 
      className={`animated-section ${className}`}
      style={{ 
        opacity: 0.01, // Valor mínimo para ainda ser "detectável" pelo DOM
        transform: 'translateY(20px)',
        transition: `opacity 0.6s ease-out, transform 0.6s ease-out`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;