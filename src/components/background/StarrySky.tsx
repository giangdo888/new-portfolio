"use client";

import { useEffect, useRef, useState } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  baseOpacity: number;
}

export function StarrySky() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stars, setStars] = useState<Star[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const animationRef = useRef<number | undefined>(undefined);

  // Generate stars
  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      const starCount = 200; // Star density

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2.5 + 1, // 1px to 3.5px - larger stars
          opacity: Math.random() * 0.5 + 0.5, // 0.5 to 1.0 - more visible
          twinkleSpeed: Math.random() * 0.015 + 0.005, // Twinkle speed variation
          baseOpacity: Math.random() * 0.4 + 0.6, // 0.6 to 1.0 - brighter base
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  // Handle mouse movement for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 15, // Subtle parallax
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Handle scroll for fade effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate stars
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || stars.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() * 0.001;

      stars.forEach((star, index) => {
        // Twinkling effect
        const twinkle = Math.sin(time * star.twinkleSpeed + index) * 0.4 + 0.6;
        const currentOpacity = star.baseOpacity * twinkle;

        // Parallax offset based on mouse
        const parallaxX = (star.x / 100) * mousePosition.x;
        const parallaxY = (star.y / 100) * mousePosition.y;

        // Subtle scroll parallax
        const scrollParallaxY = scrollY * 0.1;

        ctx.beginPath();
        ctx.arc(
          (star.x / 100) * canvas.width + parallaxX,
          (star.y / 100) * canvas.height + parallaxY - scrollParallaxY,
          star.size,
          0,
          Math.PI * 2
        );
        // More visible stars - using darker color with higher opacity
        ctx.fillStyle = `rgba(92, 64, 51, ${currentOpacity * 0.8})`; // Foreground color, more visible
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [stars, mousePosition, scrollY]);

  // Handle resize and initial setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Set initial size
    resize();
    
    // Handle window resize
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ mixBlendMode: "normal" }}
    />
  );
}
