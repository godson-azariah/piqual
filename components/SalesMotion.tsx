"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type CounterProps = { value: number; suffix: string; label: string };

function Counter({ value, suffix, label }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const animate = (time: number) => {
        const progress = Math.min((time - start) / 2000, 1);
        setCount(Math.round(value * (1 - (1 - progress) ** 3)));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
      observer.disconnect();
    }, { threshold: 0.35 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return <div className="motion-counter" ref={ref}><strong>{count}{suffix}</strong><span>{label}</span></div>;
}

const leaderCounters = [[6, "x", "More B2B Leads"], [7, "x", "Better Team Alignment"], [90, "%", "Pipeline Influenced"]] as const;
const teamCounters = [[6, "x", "More Replies"], [90, "%", "Better Personalization"], [8, "x", "Targets Achieved"]] as const;

export default function SalesMotion() {
  return (
    <section className="sales-motion-section">
      <div className="sales-motion-divider" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 4080 400"
          preserveAspectRatio="none"
          style={{ transform: "scaleY(-1)", transformOrigin: "center" }}
        >
          <g transform="translate(4080 400) scale(-1 -1)">
            <path className="wave-fill" opacity="0.2" d="M4080,79.3V0L1179.4,0v79.3c0,0,694.9,437.4,1471.3,275.6S3575.7-152.5,4080,79.3z" />
            <path className="wave-fill" opacity="0.2" d="M2249,79.3V0L0,0l0,79.3c0,0,43.3,437.4,819.8,275.6S1744.7-152.5,2249,79.3z" />
            <path className="wave-fill" opacity="0.2" d="M2631.6,49.8c0,0-596.3,547.3-1468.8,230.2S0,95.6,0,95.6L0,0l2631.6,0V49.8z" />
            <path className="wave-fill" opacity="0.2" d="M4080,95.6c0,0-428.4,501.5-1208.9,184.4S1831,95.6,1831,95.6V0l2249,0V95.6z" />
            <path className="wave-fill" d="M4080,0v192.6c-392.4,177-703.2,95.6-1075-34.1c-214.6-74.8-508-126-839.1,6.1c-149.2,59.5-447.2,203.4-1026.2,10.8C313.2-99.5,0,95.6,0,95.6L0,0l2249,0L4080,0z" />
          </g>
        </svg>
      </div>
      <div className="sales-motion-content">
        <h2>Designed to Match Your Sales Motion</h2>
        <div className="motion-card motion-card-leaders">
          <div className="motion-image"><Image src="/sales-leaders.png" alt="Sales leader" width={1200} height={1200} /></div>
          <div className="motion-copy"><div className="motion-quote motion-quote-right">&rdquo;</div><h3>Designed for Sales Leaders</h3><p>Piqual helps sales leaders build a clear sales plan based on market position, set targets, align teams, and track outreach performance to consistently generate high quality B2B leads.</p><div className="motion-counters">{leaderCounters.map(([value, suffix, label]) => <Counter key={label} value={value} suffix={suffix} label={label} />)}</div></div>
        </div>
        <div className="motion-card motion-card-team">
          <div className="motion-copy"><div className="motion-quote motion-quote-left">&ldquo;</div><h3>Designed for Sales Team</h3><p>Piqual powers sales teams run focused campaigns aligned to buyer pain and value, using AI-driven market intelligence to deliver personalized multi-channel sequences to the right contacts.</p><div className="motion-counters">{teamCounters.map(([value, suffix, label]) => <Counter key={label} value={value} suffix={suffix} label={label} />)}</div></div>
          <div className="motion-image"><Image src="/sales-team.png" alt="Sales team" width={1200} height={1200} /></div>
        </div>
      </div>
    </section>
  );
}