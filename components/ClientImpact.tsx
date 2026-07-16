"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const logos = [
  { src: "/logo-prodeia.png", alt: "Prodeia" },
  { src: "/logo-talentou.png", alt: "Talentou" },
  { src: "/logo-ignitho.png", alt: "Ignitho" },
  { src: "/logo-client4.png", alt: "Client" },
];

function StarRating({ rating, fillPercent }: { rating: number; fillPercent: number }) {
  const full = Math.floor(rating);
  return (
    <div style={{ fontSize: "2em", color: "lightgray", display: "inline-block", position: "relative", lineHeight: 1 }}>
      {Array.from({ length: full }).map((_, i) => (
        <span key={i} style={{ color: "orange" }}>★</span>
      ))}
      <span style={{ position: "relative", display: "inline-block" }}>
        <span style={{ color: "orange", position: "absolute", overflow: "hidden", width: `${fillPercent}%` }}>★</span>
        <span style={{ color: "lightgray" }}>★</span>
      </span>
    </div>
  );
}

export default function ClientImpact() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let pos = 0;
    let raf: number;
    const speed = 1.5;
    const half = track.scrollWidth / 2;
    const animate = () => {
      if (!pausedRef.current) {
        pos += speed;
        if (pos >= half) pos = 0;
        track.style.transform = `translateX(-${pos}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="impact-section">
      <style jsx>{`
        .impact-section {
          position: relative;
          padding: 50px 0 50px;
          background-image: url("/next-section-bg.jpg");
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          overflow: hidden;
          isolation: isolate;
        }
        .impact-wave {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 35px;
          pointer-events: none;
          z-index: 0;
        }
        .impact-wave svg {
          display: block;
          width: calc(100% + 1.3px);
          height: 35px;
        }
        .impact-wave .wf { fill: #ffffff; }
        .impact-content {
          position: relative;
          z-index: 1;
          max-width: 1300px;
          margin: 0 auto;
          padding: 20px 15px 0;
          text-align: center;
        }
        .impact-heading {
          margin: 0 0 10px;
          font-family: var(--font-urbanist), "Urbanist", sans-serif;
          font-size: 40px;
          font-weight: 700;
          line-height: 55px;
          color: #000;
        }
        .impact-intro {
          margin: 0 auto 30px;
          font-family: var(--font-urbanist), "Urbanist", sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #4b5563;
        }
        .impact-ratings {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          max-width: 685px;
          margin: 0 auto 40px;
        }
        .impact-rating-card {
          background: #fff;
          border-radius: 15px;
          padding: 30px 20px 20px;
          box-shadow: 0 5px 10px rgba(193,193,193,0.5);
          border: 2px solid transparent;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.3s;
        }
        @media (min-width: 768px) {
          .impact-rating-card:hover {
            transform: translateY(-10px) scale(1.03);
            border-color: #564ed5;
            box-shadow: 0 0 20px 2px rgba(255, 255, 255, 0.35);
          }
        }
        .impact-rating-card :global(img) {
          width: 20%;
          height: auto;
        }
        .impact-rating-card h4 {
          margin: 0;
          font-family: var(--font-urbanist), "Urbanist", sans-serif;
          font-size: 24px;
          font-weight: 600;
          color: #000;
        }
        .impact-logos-outer {
          overflow: hidden;
          max-width: 846px;               /* increased from 705px by 20% */
          margin: 0 auto;
          padding: 10px 0;
        }
        .impact-logos-track {
          display: flex;
          align-items: center;
          gap: 100px;
          width: max-content;
        }
        .impact-logos-track :global(img) {
          width: 145px;
          height: auto;
          max-height: 60px;
          object-fit: contain;
          flex-shrink: 0;
          filter: grayscale(1);
          opacity: 1;                    /* full opacity, no transparency */
          transition: filter 0.3s ease, opacity 0.3s ease;
        }
        .impact-logos-track :global(img:hover) {
          filter: grayscale(0);
          opacity: 1;
        }
        @media (max-width: 767px) {
          .impact-heading { font-size: 28px; line-height: 38px; }
          .impact-ratings { grid-template-columns: 1fr; max-width: 320px; }
        }
      `}</style>

      <div className="impact-wave" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 4080 400"
          preserveAspectRatio="none"
          style={{ transform: "scaleY(-1)", transformOrigin: "center" }}
        >
          <g transform="translate(4080 400) scale(-1 -1)">
            <path className="wf" opacity="0.2" d="M4080,79.3V0L1179.4,0v79.3c0,0,694.9,437.4,1471.3,275.6S3575.7-152.5,4080,79.3z" />
            <path className="wf" opacity="0.2" d="M2249,79.3V0L0,0l0,79.3c0,0,43.3,437.4,819.8,275.6S1744.7-152.5,2249,79.3z" />
            <path className="wf" opacity="0.2" d="M2631.6,49.8c0,0-596.3,547.3-1468.8,230.2S0,95.6,0,95.6L0,0l2631.6,0V49.8z" />
            <path className="wf" opacity="0.2" d="M4080,95.6c0,0-428.4,501.5-1208.9,184.4S1831,95.6,1831,95.6V0l2249,0V95.6z" />
            <path className="wf" d="M4080,0v192.6c-392.4,177-703.2,95.6-1075-34.1c-214.6-74.8-508-126-839.1,6.1c-149.2,59.5-447.2,203.4-1026.2,10.8C313.2-99.5,0,95.6,0,95.6L0,0l2249,0L4080,0z" />
          </g>
        </svg>
      </div>

      <div className="impact-content">
        <h3 className="impact-heading">Already Making an Impact with Global Clients</h3>
        <p className="impact-intro">Driving real business outcomes through smarter selling, deeper insights, and stronger engagement.</p>

        <div className="impact-ratings">
          <div className="impact-rating-card">
            <Image src="/client-g2.webp" alt="G2" width={461} height={461} />
            <h4>4.9/5 on G2</h4>
            <StarRating rating={4.9} fillPercent={65} />
          </div>
          <div className="impact-rating-card">
            <Image src="/client-producthunt.png" alt="Product Hunt" width={1160} height={1155} />
            <h4>4.8/5 on Product Hunt</h4>
            <StarRating rating={4.8} fillPercent={55} />
          </div>
        </div>

        <div className="impact-logos-outer">
          <div
            className="impact-logos-track"
            ref={trackRef}
            onMouseEnter={() => { pausedRef.current = true; }}
            onMouseLeave={() => { pausedRef.current = false; }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <Image key={i} src={logo.src} alt={logo.alt} width={145} height={60} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}