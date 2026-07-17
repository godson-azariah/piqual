"use client";

import Image from "next/image";

export default function ContactCTA() {
  return (
    <section className="contact-section">
      <style jsx>{`
        /* ── Section background ──
           Original uses banner-image-2-scaled (dark cityscape from WP CDN, not cached locally).
           We use Tampa-7-scaled (contact-bg.webp) as a stand-in — same image is ALSO
           the right-column office photo at width:90% per post-115.css.
           Replace with the real banner-image-2 URL once available.         */
        .contact-section {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          background-image: url("/hero-bg.webp");
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          padding: 58px 0px 46px 0px;
          margin-top: 0;
          margin-bottom: 0;
        }

        /* ── Darker overlay (0.55) so it's noticeably darker than the hero ── */
        .contact-overlay {
          position: absolute;
          inset: 0;
          background-color: #000000;
          opacity: 0.28;
          pointer-events: none;
          z-index: 0;
        }

        /* ── Mountains wave — exact SVG paths + fill from original ──
           .elementor-element-f587e4c > .elementor-shape-top svg { height: 60px }
           fill colour: #628FDA85 (from post-115.css elementor-shape-fill)        */
        .contact-wave {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 60px;
          pointer-events: none;
          z-index: 2;
        }
        .contact-wave svg {
          display: block;
          width: calc(100% + 1.3px);
          height: 60px;
        }
        .contact-wave .sf {
          fill: #628FDA85;
        }

        /* ── Inner container ── */
        .contact-inner {
          position: relative;
          z-index: 3;
          max-width: 1300px;
          margin: 0 auto;
          padding: 23px 20px;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0;
        }

        /* Left half ─ text + button */
        .contact-copy {
          flex: 0 0 50%;
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding-right: 40px;
        }

        /* Right half ─ image */
        .contact-image-wrap {
          flex: 0 0 50%;
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .contact-image-wrap :global(img) {
          width: 100% !important;
          height: auto !important;
          display: block;
        }

        /* h3: font-size 50px, weight 700, line-height 55px, color #FFF — post-115.css */
        .contact-heading {
          margin: 0 0 15px;
          font-family: var(--font-urbanist), "Urbanist", sans-serif;
          font-size: 50px;
          font-weight: 700;
          line-height: 55px;
          color: #ffffff;
          text-align: start;
        }

        /* body text: 20px weight 400, color #FFF — post-115.css */
        .contact-text {
          margin: 0 0 30px;
          font-family: var(--font-urbanist), "Urbanist", sans-serif;
          font-size: 20px;
          font-weight: 400;
          color: #ffffff;
          line-height: 1.65;
          text-align: start;
        }

        /* ── "Talk to Our Team" button ──
           From post-115.css: bg #00BC53, border 2px solid #00BC53,
           border-radius 50px, padding 20px, font 16px/600 Urbanist
           Animation: elementor-animation-bob (bob-float + bob loop on hover) */
        .contact-btn {
          display: inline-flex;
          align-items: center;
          flex-direction: row-reverse; /* icon before text — flex-direction:row-reverse from original */
          gap: 10px;
          padding: 20px 20px;
          font-family: var(--font-urbanist), "Urbanist", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
          background-color: #00bc53;
          border: 2px solid #00bc53;
          border-radius: 50px;
          text-decoration: none;
          line-height: 1;
        }
        .contact-btn-arrow {
          display: inline-block;
          font-size: 16px;
        }

        /* Bob animation — identical to e-animation-bob.min.css */
        @keyframes contact-btn-bob {
          0%   { transform: translateY(-8px); }
          50%  { transform: translateY(-4px); }
          100% { transform: translateY(-8px); }
        }
        @keyframes contact-btn-bob-float {
          100% { transform: translateY(-8px); }
        }
        .contact-btn:hover,
        .contact-btn:focus,
        .contact-btn:active {
          animation-name: contact-btn-bob-float, contact-btn-bob;
          animation-duration: 0.3s, 1.5s;
          animation-delay: 0s, 0.3s;
          animation-timing-function: ease-out, ease-in-out;
          animation-iteration-count: 1, infinite;
          animation-fill-mode: forwards;
          animation-direction: normal, alternate;
          color: #ffffff;
          background-color: #00bc53;
          border-color: #00bc53;
        }



        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .contact-inner { padding: 30px 20px; }
          .contact-copy { padding-right: 20px; }
        }
        @media (max-width: 767px) {
          .contact-inner { flex-direction: column; padding: 30px 20px; }
          .contact-copy { flex: none; width: 100%; padding-right: 0; align-items: center; }
          .contact-image-wrap {
            display: flex;
            flex: none;
            width: 100%;
            justify-content: center;
            margin-top: 30px;
          }
        }
      `}</style>

      {/* Dark overlay */}
      <div className="contact-overlay" aria-hidden="true" />

      {/* Mountains wave — exact SVG paths from original HTML (elementor-shape-top) */}
      <div className="contact-wave" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            className="sf"
            opacity="0.33"
            d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
          />
          <path
            className="sf"
            opacity="0.66"
            d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
          />
          <path
            className="sf"
            d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="contact-inner">
        {/* Left: copy + button */}
        <div className="contact-copy">
          <h3 className="contact-heading">Fancy a chat?</h3>
          <p className="contact-text">
            We have teams and offices across the USA, UK, and India &ndash; perfect for a coffee catch-up.
          </p>
          <a className="contact-btn" href="https://www.piqual.com/contact/">
            <span className="contact-btn-arrow">&#8250;</span>
            Talk to Our Team
          </a>
        </div>

        {/* Right: office photo (Tampa-7-scaled.webp, width 90%) */}
        <div className="contact-image-wrap">
          <Image
            src="/contact-bg.webp"
            alt="Piqual office"
            width={2560}
            height={1440}
          />
        </div>
      </div>
    </section>
  );
}