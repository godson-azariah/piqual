"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const modules = [
  {
    icon: "/features-plan.png",
    title: "Sales Plan Builder",
    text: "Piqual defines your go-to-market and sales plan using AI by identifying the right target accounts, goals, and touchpoints for sales team.",
  },
  {
    icon: "/features-campaign.png",
    title: "Sales Campaign Manager",
    text: "Piqual runs AI-driven campaigns that use buyer intent signals to deliver hyper-personalized outreach across Email, LinkedIn, and Calls.",
  },
  {
    icon: "/features-insights.png",
    title: "Sales Insights Dashboard",
    text: "Piqual provides real-time visibility into outreach performance, showing targets, meetings booked, and conversion outcomes as they happen.",
  },
];

export default function FeaturesSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const section = document.querySelector<HTMLElement>(".features-section");
    if (!section) return;

    section.style.position = "relative";
    section.style.overflow = "hidden";

    const content = section.querySelector<HTMLElement>(".features-section-content");
    if (content) {
      content.style.position = "relative";
      content.style.zIndex = "2";
    }

    const cellSize = 56;
    const cells: HTMLDivElement[] = [];
    let wrapper = section.querySelector<HTMLElement>(".grid-wrapper");
    let grid = section.querySelector<HTMLElement>(".grid-container");

    if (!wrapper) {
      wrapper = document.createElement("div");
      wrapper.className = "grid-wrapper";
      grid = document.createElement("div");
      grid.className = "grid-container";
      wrapper.appendChild(grid);
      section.prepend(wrapper);
    }

    Object.assign(wrapper.style, {
      position: "absolute",
      inset: "0",
      width: `${section.offsetWidth}px`,
      height: `${section.offsetHeight}px`,
      top: "0",
      left: "0",
      display: "block",
      zIndex: "1",
      pointerEvents: "auto",
      background: "transparent",
    });

    const buildGrid = () => {
      if (!grid) return;
      grid.innerHTML = "";
      cells.length = 0;
      const rect = section.getBoundingClientRect();
      const width = Math.max(rect.width, section.offsetWidth);
      const height = Math.max(rect.height, section.offsetHeight);
      if (!width || !height) return;
      const cols = Math.ceil(width / cellSize);
      const rows = Math.ceil(height / cellSize);
      Object.assign(wrapper.style, {
        width: `${width}px`,
        height: `${height}px`,
      });
      Object.assign(grid.style, {
        width: `${width}px`,
        height: `${height}px`,
        position: "absolute",
        inset: "0",
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
      });
      for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        Object.assign(cell.style, {
          background: "transparent",
          border: "0.6px solid rgba(180, 180, 180, 0.015)",
          boxSizing: "border-box",
          transition: "border-color 150ms ease, border-width 150ms ease",
        });
        cell.addEventListener("mouseenter", () => {
          cell.style.borderWidth = "0.9px";
          cell.style.borderColor = "rgba(64, 64, 64, 0.0875)";
        });
        cell.addEventListener("mouseleave", () => {
          cell.style.borderWidth = "0.6px";
          cell.style.borderColor = "rgba(180, 180, 180, 0.015)";
        });
        grid.appendChild(cell);
        cells.push(cell);
      }
    };

    buildGrid();
    const t1 = window.setTimeout(buildGrid, 300);
    const t2 = window.setTimeout(buildGrid, 800);
    const onResize = () => buildGrid();
    window.addEventListener("resize", onResize);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="features-section">
      <style jsx>{`
        .features-section {
          position: relative;
          overflow: hidden;
        }
        .features-section-content {
          position: relative;
          z-index: 2;
          pointer-events: none;
        }
        .features-section-content a,
        .features-section-content .features-card {
          pointer-events: auto;
        }
        .grid-wrapper {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: auto;
        }
        .grid-container {
          position: absolute;
          inset: 0;
          display: grid;
        }
        @keyframes elementor-animation-bob {
          0% { transform: translateY(-8px); }
          50% { transform: translateY(-4px); }
          100% { transform: translateY(-8px); }
        }
        @keyframes elementor-animation-bob-float {
          100% { transform: translateY(-8px); }
        }
        .features-demo-button:hover,
        .features-demo-button:focus,
        .features-demo-button:active {
          animation-name: elementor-animation-bob-float, elementor-animation-bob;
          animation-duration: .3s, 1.5s;
          animation-delay: 0s, .3s;
          animation-timing-function: ease-out, ease-in-out;
          animation-iteration-count: 1, infinite;
          animation-fill-mode: forwards;
          animation-direction: normal, alternate;
        }
      `}</style>
      <div className="features-section-content">
        {/* New heading added here */}
        <h2 className="features-heading">
          Features That Deliver High Quality B2B Leads
        </h2>

        <p className="features-intro">
          Take a quick look at how Piqual uses AI to deliver high quality B2B leads for sales teams.
        </p>

        <Image
          src="/features-grid-bg.png"
          alt="Piqual AI outreach workspace"
          width={2048}
          height={1066}
          className="features-visual"
        />

        <h3 className="features-modules-heading">Our AI-Driven B2B Lead Generation Modules</h3>
        <div className="features-cards">
          {modules.map((module) => {
            const isHovered = hovered === module.title;
            return (
              <article
                className="features-card"
                key={module.title}
                onMouseEnter={() => setHovered(module.title)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  transform: isHovered ? "translateY(-10px) scale(1.03)" : "translateY(0) scale(1)",
                }}
              >
                <div className="features-card-title">
                  <Image src={module.icon} alt="" width={512} height={512} />
                  <h4>{module.title}</h4>
                </div>
                <p>{module.text}</p>
              </article>
            );
          })}
        </div>
        <a
          className="features-demo-button"
          href="#contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.9rem 1.4rem",
            minHeight: "3.2rem",
            transform: "translateY(0)",
          }}
        >
          Get Your Demo <span>›</span>
        </a>
      </div>
    </section>
  );
}