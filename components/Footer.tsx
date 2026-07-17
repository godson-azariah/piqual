"use client";

import Image from "next/image";

const navLinks = [
  { label: "Product", href: "https://www.piqual.com/product/" },
  { label: "Pricing", href: "https://www.piqual.com/pricing/" },
  { label: "About", href: "https://www.piqual.com/about/" },
  { label: "Testimonials", href: "https://www.piqual.com/testimonials/" },
  { label: "Careers", href: "https://www.piqual.com/careers/" },
  { label: "Login", href: "https://app.piqual.ai/", external: true },
];

export default function Footer() {
  return (
    <footer className="footer">
      <style jsx>{`
        .footer {
          background: #ffffff;
          padding: 0;
        }
        .footer-main {
          max-width: 1300px;
          margin: 0 auto;
          padding: 30px 15px 20px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          align-items: center;
          gap: 20px;
        }
        .footer-logo :global(img) {
          width: 180px;
          height: auto;
          display: block;
        }
        .footer-nav {
          display: flex;
          flex-wrap: nowrap;               /* single line on desktop */
          justify-content: center;
          gap: 12px 20px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .footer-nav a {
          white-space: nowrap;
          font-family: var(--font-urbanist), "Urbanist", sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: #334155;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-nav a:hover { color: #046bd2; }
        .footer-social {
          display: flex;
          justify-content: flex-end;
          gap: 14px;
        }
        .footer-social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: #f0f5fa;
          color: #334155;
        }
        .footer-social a:hover {
          animation: footer-float .3s ease-out forwards,
                     footer-bob 1.5s ease-in-out .3s infinite alternate;
        }
        .footer-social svg { width: 18px; height: 18px; fill: currentColor; }

        @keyframes footer-float {
          0% { transform: translateY(0); }
          100% { transform: translateY(-4px); }
        }
        @keyframes footer-bob {
          0% { transform: translateY(-4px); }
          50% { transform: translateY(-2px); }
          100% { transform: translateY(-4px); }
        }

        .footer-divider {
          border: none;
          border-top: 1px solid #e2e8f0;
          margin: 0;
        }
        .footer-bottom {
          max-width: 1300px;
          margin: 0 auto;
          padding: 16px 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }
        .footer-copy {
          font-family: var(--font-urbanist), "Urbanist", sans-serif;
          font-size: 14px;
          color: #64748b;
        }
        .footer-legal {
          display: flex;
          gap: 20px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .footer-legal a {
          font-family: var(--font-urbanist), "Urbanist", sans-serif;
          font-size: 14px;
          color: #64748b;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-legal a:hover { color: #046bd2; }

        /* Responsive: stack footer columns, allow nav wrapping */
        @media (max-width: 767px) {
          .footer-main {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .footer-logo {
            display: flex;
            justify-content: center;
          }
          .footer-nav {
            flex-wrap: wrap;          /* allow links to wrap into multiple lines */
            justify-content: center;
            gap: 8px 16px;            /* slightly tighter spacing for small screens */
          }
          .footer-nav a {
            white-space: nowrap;      /* still prevent individual words from breaking */
          }
          .footer-social {
            justify-content: center;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>

      <div className="footer-main">
        <div className="footer-logo">
          <a href="https://www.piqual.com/">
            <Image src="/footer-logo.png" alt="Piqual" width={750} height={364} />
          </a>
        </div>

        <ul className="footer-nav">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href="#" onClick={(e) => e.preventDefault()}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="footer-social">
          <a href="https://in.linkedin.com/company/piqualdigital" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/piqualdigital/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p className="footer-copy">&copy; 2026 Piqual. All rights reserved.</p>
        <ul className="footer-legal">
          <li><a href="https://www.piqual.com/privacy-policy/">Privacy Policy</a></li>
          <li><a href="https://www.piqual.com/terms-and-condition/">Terms of Service</a></li>
        </ul>
      </div>
    </footer>
  );
}