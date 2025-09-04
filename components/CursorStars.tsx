"use client";

import React, { useEffect, useRef } from "react";

// CursorStars: Fullscreen canvas that renders a starry wave trail following the cursor
export default function CursorStars() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const pointer = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: true })!;

    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number; // 0..1
      decay: number; // amount per frame
      size: number;
      hue: number;
      spin: number; // used to modulate velocity for wave effect
    };

    const particles: Particle[] = [];
    const maxParticles = 400; // safety cap

    const spawn = (x: number, y: number) => {
      // Create a small radial burst to form a wave-like star pattern
      const count = 10; // number of particles per burst
      const baseHue = (performance.now() / 20) % 360; // subtle color shift over time
      const speed = 1.2; // base speed

      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2; // radial distribution
        const jitter = (Math.random() - 0.5) * 0.6; // add slight randomness
        const wave = Math.sin(performance.now() / 200 + i) * 0.6; // wave modulation
        const magnitude = speed + wave + Math.random() * 0.4;

        particles.push({
          x,
          y,
          vx: Math.cos(angle + jitter) * magnitude,
          vy: Math.sin(angle + jitter) * magnitude,
          life: 1,
          decay: 0.02 + Math.random() * 0.02,
          size: 1.2 + Math.random() * 1.6,
          hue: baseHue + i * (360 / count),
          spin: (Math.random() - 0.5) * 0.2,
        });
      }

      // cap length
      if (particles.length > maxParticles) {
        particles.splice(0, particles.length - maxParticles);
      }
    };

    let lastX = pointer.current.x;
    let lastY = pointer.current.y;

    const onMove = (e: MouseEvent) => {
      pointer.current.active = true;
      const x = e.clientX;
      const y = e.clientY;

      // spawn more when moving faster
      const dx = x - lastX;
      const dy = y - lastY;
      const dist = Math.hypot(dx, dy);
      const steps = Math.min(8, Math.max(1, Math.floor(dist / 6)));

      for (let s = 0; s < steps; s++) {
        const t = s / steps;
        spawn(lastX + dx * t, lastY + dy * t);
      }

      lastX = x;
      lastY = y;
    };

    const onLeave = () => {
      pointer.current.active = false;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // wave modulation over life
        p.vx += p.spin * 0.02;
        p.vy -= p.spin * 0.02;

        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const alpha = Math.max(0, Math.min(1, p.life));

        // Glow settings
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.shadowBlur = 12;
        ctx.shadowColor = `hsla(${p.hue}, 100%, 70%, ${alpha})`;
        ctx.fillStyle = `hsla(${p.hue}, 100%, 80%, ${alpha})`;

        // Draw a simple star-like sparkle using two rotated rectangles
        ctx.translate(p.x, p.y);
        const s = p.size;
        ctx.rotate((1 - p.life) * 2);
        // vertical sparkle
        ctx.fillRect(-s * 0.5, -s * 2.2, s, s * 4.4);
        // horizontal sparkle
        ctx.rotate(Math.PI / 2);
        ctx.fillRect(-s * 0.5, -s * 2.2, s, s * 4.4);
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60]"
    />
  );
}
