"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const cardsData = [
  {
    icon: "/why-icon-leads.png",
    title: "High Quality B2B Leads",
    description: "Generate 80% better B2B leads by aligning outreach with ICP fit and buyer intent.",
    image: "/why-leads-chart.png",
  },
  {
    icon: "/why-icon-campaigns.png",
    title: "Targeted Campaigns",
    description: "Drive upto 5× higher replies using AI-assisted and multi-channel outreach.",
    image: "/why-campaigns-chart.png",
  },
  {
    icon: "/why-icon-optimization.png",
    title: "Continuous Optimization",
    description: "Increase conversions by 90% with real-time insights and ongoing optimization.",
    image: "/why-optimization-chart.png",
  },
];

export default function WhyChoose() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const section = document.querySelector<HTMLElement>(".why-section");
    if (!section) return;

    section.style.position = "relative";
    section.style.overflow = "hidden";

    const content = section.querySelector<HTMLElement>(".why-section-content");
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
          border: "0.6px solid rgba(180, 180, 180, 0.06)",
          boxSizing: "border-box",
          transition: "border-color 150ms ease, border-width 150ms ease",
        });
        cell.addEventListener("mouseenter", () => {
          cell.style.borderWidth = "0.9px";
          cell.style.borderColor = "rgba(64, 64, 64, 0.0875)";
        });
        cell.addEventListener("mouseleave", () => {
          cell.style.borderWidth = "0.6px";
          cell.style.borderColor = "rgba(180, 180, 180, 0.06)";
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
    <section className="why-section">
      <style jsx>{`
        .why-section {
          position: relative;
          overflow: hidden;
          background: #ffffff;
          padding: 80px 0 95px;
        }
        .why-section-content {
          position: relative;
          z-index: 2;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 15px;
          text-align: center;
          pointer-events: none;
        }
        .why-section-content a,
        .why-section-content .why-card {
          pointer-events: auto;
        }
        .why-heading {
          margin: 0 0 15px;
          font-family: var(--font-urbanist), "Urbanist", sans-serif;
          font-size: 40px;
          font-weight: 700;
          line-height: 55px;
          color: #000000;
        }
        .why-intro {
          margin: 0 auto;
          max-width: 800px;
          font-family: var(--font-urbanist), "Urbanist", sans-serif;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.65;
          color: #4b5563;
        }
        .why-cards {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          padding-top: 50px;
          text-align: left;
        }
        .why-card {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 100%;
          padding: 35px 30px;
          color: #ffffff;
          background: linear-gradient(108deg, #1b3d9a 76%, #564ed5 93%);
          border: 2px solid #ffffff;
          border-radius: 30px;
          box-shadow: 0 6px 41px 1px rgba(212, 212, 212, 0.43);
          transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.3s;
        }
        @media (min-width: 768px) {
          .why-card:hover {
            transform: translateY(-10px) scale(1.03);
            border-color: #564ed5;
            box-shadow: 0 0 45px 3px rgba(86, 78, 213, 0.29);
          }
        }
        .why-card-top {
          margin-bottom: 25px;
        }
        .why-card-title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }
        .why-card-title-row :global(img) {
          width: 32px;
          height: 32px;
          object-fit: contain;
        }
        .why-card h4 {
          margin: 0;
          font-family: var(--font-urbanist), "Urbanist", sans-serif;
          font-size: 22px;
          font-weight: 700;
          line-height: 1.2;
        }
        .why-card p {
          margin: 0;
          font-family: var(--font-urbanist), "Urbanist", sans-serif;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.65;
          opacity: 0.9;
        }
        .why-card-image-wrap {
          width: 100%;
          margin-top: auto;
          display: flex;
          justify-content: center;
        }
        .why-card-image-wrap :global(img) {
          width: 70% !important;
          height: auto !important;
          display: block;
          margin: 0 auto;
        }
        .why-demo-button-container {
          margin-top: 50px;
          text-align: center;
        }
        .why-demo-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 20px 42px;
          font-family: var(--font-urbanist), "Urbanist", sans-serif;
          font-size: 16px;
          font-weight: 600;
          line-height: 1;
          color: #ffffff;
          background: #00bc53;
          border-radius: 999px;
          transition: transform 0.3s ease;
        }
        .why-demo-button span {
          font-size: 20px;
          line-height: 12px;
        }
        @keyframes why-button-bob {
          0% { transform: translateY(-4px); }
          50% { transform: translateY(-2px); }
          100% { transform: translateY(-4px); }
        }
        @keyframes why-button-bob-float {
          100% { transform: translateY(-4px); }
        }
        .why-demo-button:hover {
          animation-name: why-button-bob-float, why-button-bob;
          animation-duration: .3s, 1.5s;
          animation-delay: 0s, .3s;
          animation-timing-function: ease-out, ease-in-out;
          animation-iteration-count: 1, infinite;
          animation-fill-mode: forwards;
          animation-direction: normal, alternate;
        }
        @media (max-width: 1024px) {
          .why-cards {
            gap: 20px;
          }
          .why-card {
            padding: 30px 24px;
          }
          .why-heading {
            font-size: 34px;
            line-height: 45px;
          }
        }
        @media (max-width: 767px) {
          .why-section {
            padding: 60px 0;
          }
          .why-cards {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 30px 10px 0;
          }
          .why-heading {
            font-size: 30px;
            line-height: 40px;
          }
          .why-intro {
            font-size: 16px;
          }
          .why-card {
            margin: 0;
          }
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
      `}</style>
      <div className="why-section-content">
        <h3 className="why-heading">Why Choose Piqual?</h3>
        <p className="why-intro">
          Piqual is built by experienced sales leaders who have closed multimillion-dollar deals. Piqual helps your sales team stay in control while supporting every step to generate high quality B2B leads.
        </p>

        <div className="why-cards">
          {cardsData.map((card, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <article
                className="why-card"
                key={card.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  transform: isHovered ? "translateY(-10px) scale(1.03)" : "translateY(0) scale(1)",
                }}
              >
                <div className="why-card-top">
                  <div className="why-card-title-row">
                    <Image src={card.icon} alt="" width={512} height={512} />
                    <h4>{card.title}</h4>
                  </div>
                  <p>{card.description}</p>
                </div>
                <div className="why-card-image-wrap">
                  <Image src={card.image} alt={card.title} width={760} height={300} />
                </div>
              </article>
            );
          })}
        </div>

        <div className="why-demo-button-container">
          <a className="why-demo-button" href="#contact">
            Get a Demo <span>&rsaquo;</span>
          </a>
        </div>
      </div>
    </section>
  );
}