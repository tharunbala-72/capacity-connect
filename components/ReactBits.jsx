"use client";

import { useEffect, useRef, useState } from "react";

export function SpotlightCard({ children, className = "" }) {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, visible: false });
  return <div className={`relative overflow-hidden ${className}`} onMouseLeave={() => setSpotlight((value) => ({ ...value, visible: false }))} onMouseMove={(event) => { const bounds = event.currentTarget.getBoundingClientRect(); setSpotlight({ x: event.clientX - bounds.left, y: event.clientY - bounds.top, visible: true }); }}><div aria-hidden="true" className="pointer-events-none absolute -inset-px transition-opacity duration-300" style={{ opacity: spotlight.visible ? 1 : 0, background: `radial-gradient(360px circle at ${spotlight.x}px ${spotlight.y}px, rgba(245, 158, 11, 0.14), transparent 42%)` }} /><div className="relative">{children}</div></div>;
}

export function CountUp({ value, duration = 850, suffix = "", decimals = 0 }) {
  const [displayValue, setDisplayValue] = useState(0);
  const previousValue = useRef(0);
  useEffect(() => {
    const startValue = previousValue.current;
    const startedAt = performance.now();
    let frame;
    const animate = (now) => { const progress = Math.min((now - startedAt) / duration, 1); const nextValue = startValue + (Number(value) - startValue) * (1 - (1 - progress) ** 3); setDisplayValue(nextValue); if (progress < 1) frame = requestAnimationFrame(animate); else previousValue.current = Number(value); };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [duration, value]);
  return <>{displayValue.toLocaleString(undefined, { maximumFractionDigits: decimals, minimumFractionDigits: decimals })}{suffix}</>;
}
