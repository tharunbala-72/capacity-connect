"use client";

import { useEffect, useRef, useState } from "react";

export function SpotlightCard({ children, className = "", isDark = false }) {
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, visible: false });
  const glow = isDark ? "rgba(56, 189, 248, 0.18)" : "rgba(2, 132, 199, 0.12)";
  return <div className={`relative overflow-hidden ${className}`} onMouseLeave={() => setSpotlight((value) => ({ ...value, visible: false }))} onMouseMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); setSpotlight({ x: event.clientX - rect.left, y: event.clientY - rect.top, visible: true }); }}><div aria-hidden="true" className="pointer-events-none absolute -inset-px transition-opacity duration-300" style={{ opacity: spotlight.visible ? 1 : 0, background: `radial-gradient(360px circle at ${spotlight.x}px ${spotlight.y}px, ${glow}, transparent 42%)` }} />{children}</div>;
}

export function TiltCard({ children, className = "", isDark = false }) {
  const [transform, setTransform] = useState("");
  return <SpotlightCard isDark={isDark} className={className}><div className="relative h-full transition-transform duration-200 will-change-transform" style={{ transform }} onMouseLeave={() => setTransform("")} onMouseMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); const x = (event.clientX - rect.left) / rect.width - 0.5; const y = (event.clientY - rect.top) / rect.height - 0.5; setTransform(`perspective(800px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`); }}>{children}</div></SpotlightCard>;
}

export function CountUp({ value, duration = 850, suffix = "", decimals = 0 }) { const [display, setDisplay] = useState(0); const previous = useRef(0); useEffect(() => { const start = previous.current; const started = performance.now(); let frame; const tick = (now) => { const progress = Math.min((now - started) / duration, 1); const next = start + (Number(value) - start) * (1 - (1 - progress) ** 3); setDisplay(next); if (progress < 1) frame = requestAnimationFrame(tick); else previous.current = Number(value); }; frame = requestAnimationFrame(tick); return () => cancelAnimationFrame(frame); }, [duration, value]); return <>{display.toLocaleString(undefined, { maximumFractionDigits: decimals, minimumFractionDigits: decimals })}{suffix}</>; }

export function PulseBadge({ children, className = "" }) { return <span className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-bold ${className}`}><span className="h-2 w-2 animate-pulse rounded-full bg-current" />{children}</span>; }
export function ShinyText({ children, className = "" }) { return <span className={`bg-gradient-to-r from-sky-300 via-white to-sky-300 bg-[length:200%_auto] bg-clip-text text-transparent animate-[pulse_3s_ease-in-out_infinite] ${className}`}>{children}</span>; }
