"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export default function Reveal({ children, className = "", ...rest }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
