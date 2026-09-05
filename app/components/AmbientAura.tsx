"use client";

import React, { useEffect, useState } from "react";

export const AmbientAura: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on pointer-capable devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let rafId: number;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    // Smooth lerp loop
    const animate = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      setPosition({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 overflow-hidden"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        className="absolute w-[450px] h-[450px] rounded-full -translate-x-1/2 -translate-y-1/2 blur-[100px]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          background: "radial-gradient(circle, rgba(201, 168, 106, 0.08) 0%, rgba(201, 168, 106, 0.02) 45%, transparent 70%)",
        }}
      />
    </div>
  );
};
