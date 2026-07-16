"use client";

import Image from "next/image";

const journeyCards = [
  {
    title: "Smart Sales Planning",
    description: "AI-driven go-to-market and sales planning",
    icon: "/journey-smart-icon.png",
    decoration: "/journey-smart-bg.png",
    iconClassName: "journey-card-icon-large",
    className: "journey-card-standard",
    items: [
      "Build AI-driven GTM strategy",
      "Define lead targeting goals",
      "Structure sales execution",
    ],
  },
  {
    title: "Targeted Sales Campaigns",
    description: "AI-powered campaigns that reach buyers",
    icon: "/journey-target-icon.png",
    decoration: "/journey-target-bg.png",
    iconClassName: "journey-card-icon-small",
    className: "journey-card-tight",
    items: [
      "Define AI-led value propositions",
      "Create hyper-personalized sequences",
      "Run multi-channel outreach",
    ],
  },
  {
    title: "Actionable Sales Insights",
    description: "Real-time sales performance visibility",
    icon: "/journey-insights-icon.png",
    decoration: "/journey-insights-bg.png",
    iconClassName: "journey-card-icon-medium",
    className: "journey-card-standard",
    items: [
      "Track multi-channel performance",
      "Monitor lead quality metrics",
      "Improve conversions with insights",
    ],
  },
];

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" className="journey-check">
      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
    </svg>
  );
}

function MultiWave() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 4080 400"
      preserveAspectRatio="none"
    >
      <g transform="translate(4080 400) scale(-1 -1)">
        <path className="wave-fill" opacity="0.2" d="M4080,79.3V0L1179.4,0v79.3c0,0,694.9,437.4,1471.3,275.6S3575.7-152.5,4080,79.3z" />
        <path className="wave-fill" opacity="0.2" d="M2249,79.3V0L0,0l0,79.3c0,0,43.3,437.4,819.8,275.6S1744.7-152.5,2249,79.3z" />
        <path className="wave-fill" opacity="0.2" d="M2631.6,49.8c0,0-596.3,547.3-1468.8,230.2S0,95.6,0,95.6L0,0l2631.6,0V49.8z" />
        <path className="wave-fill" opacity="0.2" d="M4080,95.6c0,0-428.4,501.5-1208.9,184.4S1831,95.6,1831,95.6V0l2249,0V95.6z" />
        <path className="wave-fill" d="M4080,0v192.6c-392.4,177-703.2,95.6-1075-34.1c-214.6-74.8-508-126-839.1,6.1c-149.2,59.5-447.2,203.4-1026.2,10.8C313.2-99.5,0,95.6,0,95.6L0,0l2249,0L4080,0z" />
      </g>
    </svg>
  );
}

export default function SalesJourney() {
  return (
    <section className="journey-section">
      {/* Mobile fix: add vertical gap between cards, reset margin on tight card */}
      <style jsx>{`
        @media (max-width: 767px) {
          .journey-cards {
            gap: 20px;
          }
          .journey-card-tight {
            margin: 0 !important;
          }
        }
      `}</style>

      <div className="journey-overlay" />
      <div className="journey-content">
        <h2 className="journey-heading">
          Built for Every Stage of Your Sales Journey
        </h2>
        <p className="journey-intro">
          Piqual works in three simple steps &ndash; defining the sales plan,
          executing the sales plan, and optimizing your sales campaigns.
        </p>

        <div className="journey-cards">
          {journeyCards.map((card) => (
            <article
              className={`journey-card ideate ${card.className}`}
              key={card.title}
            >
              <Image
                src={card.decoration}
                alt=""
                width={144}
                height={144}
                className="journey-card-decoration"
              />
              <div className="journey-card-title-row">
                <Image
                  src={card.icon}
                  alt=""
                  width={144}
                  height={144}
                  className={`journey-card-icon ${card.iconClassName}`}
                />
                <h3>{card.title}</h3>
              </div>
              <p className="journey-card-description">{card.description}</p>
              <ul className="journey-card-list">
                {card.items.map((item) => (
                  <li key={item}>
                    <span className="journey-check-wrap">
                      <CheckIcon />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <a
          href="#scroll2"
          className="journey-scroll"
          id="scroll2"
          aria-label="Scroll"
        >
          <Image
            src="/hero-mascot.png"
            alt=""
            width={435}
            height={380}
            className="journey-scroll-image"
          />
        </a>
      </div>

      <div className="journey-wave" aria-hidden="true">
        <MultiWave />
      </div>
    </section>
  );
}