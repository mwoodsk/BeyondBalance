"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ParallaxHeroImageProps = {
  src: string;
  alt: string;
};

export default function ParallaxHeroImage({ src, alt }: ParallaxHeroImageProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.12);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="hero-image-wrap" style={{ transform: `translateY(${offset}px)` }}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
    </div>
  );
}
