'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { label: 'Product', href: '' },
  { label: 'Pricing', href: '' },
  { label: 'About', href: '' },
  { label: 'Testimonials', href: '' },
  { label: 'Careers', href: '' },
  { label: 'Login', href: '' },
];

const mobileNavLinks = navLinks.filter((link) => link.label !== 'Login');

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className="hidden lg:block fixed top-0 left-0 w-full z-[9999]"
        style={{
          backgroundColor: isScrolled ? '#ffffff' : 'transparent',
          boxShadow: isScrolled
            ? '0 0px 30px 0px rgba(0,0,0,0.15)'
            : '0 0 0 0 rgb(0 0 0 / 0%)',
          transform: 'translateY(0)',
          transition:
            'all 0.4s ease-in-out, height 0.4s ease-in-out, background-color 0.4s ease-in-out, margin 0s',
          clipPath: 'inset(0 0 -100vh 0)',
        }}
      >
        <div
          className="flex items-center w-full"
          style={{
            maxWidth: '1300px',
            margin: '0 auto',
            padding: '10px 20px 5px 20px',
            transition: 'padding 0.4s ease-in-out',
          }}
        >
          <div className="flex items-center" style={{ width: '13%' }}>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Piqual"
                width={750}
                height={364}
                priority
                style={{ width: '80%', height: 'auto' }}
              />
            </Link>
          </div>

          <div
            className="flex items-center justify-center"
            style={{ width: '70.332%', height: '35px' }}
          >
            <ul className="flex items-center list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.label} style={{ margin: '0 10px' }}>
                  <a
                    href={link.href}
                    className="block transition-all duration-200 ease-in-out"
                    style={{
                      fontFamily: 'var(--font-urbanist), "Urbanist", sans-serif',
                      fontSize: '17px',
                      fontWeight: 700,
                      color: '#374151',
                      padding: '0 15px',
                      lineHeight: '35px',
                      borderRadius: '0',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.color = '#564ED5';
                      el.style.backgroundColor = '#564ED536';
                      el.style.borderRadius = '14px';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.color = '#374151';
                      el.style.backgroundColor = 'transparent';
                      el.style.borderRadius = '0';
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-end" style={{ width: '16%' }}>
            <a
              href=""
              style={{
                fontFamily: 'var(--font-urbanist), "Urbanist", sans-serif',
                fontSize: '17px',
                fontWeight: 600,
                color: '#FFFFFF',
                backgroundColor: '#00BC53',
                borderRadius: '40px',
                padding: '15px 18px',
                lineHeight: 1,
                whiteSpace: 'nowrap',
                display: 'inline-block',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </nav>

      <nav
        className="lg:hidden fixed top-0 left-0 w-full z-[9999]"
        style={{
          backgroundColor: '#ffffff',
          boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.11)',
          transform: 'translateY(0)',
          transition:
            'all 0.4s ease-in-out, height 0.4s ease-in-out, background-color 0.4s ease-in-out, margin 0s',
        }}
      >
        <div
          className="flex items-center justify-between w-full"
          style={{
            maxWidth: '1300px',
            margin: '0 auto',
            padding: '10px 20px',
          }}
        >
          <div style={{ width: '65%' }} className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Piqual"
                width={750}
                height={364}
                priority
                style={{ width: 'auto', height: '44px' }}
              />
            </Link>
          </div>

          <div style={{ width: '35%' }} className="flex items-center justify-end">
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              style={{
                backgroundColor: '#564ED5',
                border: '2px solid #564ED5',
                borderRadius: '0',
                width: '50px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                padding: '8px',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                style={{ width: '25px', height: '25px' }}
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`mobile-menu-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      <div className={`mobile-menu-panel ${mobileOpen ? 'open' : ''}`}>
        <div
          className="flex items-center justify-between w-full"
          style={{
            padding: '10px 0 10px 0',
            borderBottom: '1px solid #e5e7eb',
          }}
        >
          <div style={{ margin: '5px 0 5px 10px', padding: '5px' }}>
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image
                src="/logo-mobile.png"
                alt="Piqual"
                width={500}
                height={250}
                style={{ maxWidth: '160px', maxHeight: '60px', width: 'auto', height: 'auto' }}
              />
            </Link>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
            style={{
              padding: '8px',
              margin: '12px',
              width: '45px',
              height: '45px',
              borderRadius: '3px',
              border: '1px solid #ddd',
              background: 'transparent',
              color: 'rgba(51,51,51,1)',
              fontSize: '16px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            X
          </button>
        </div>

        <ul
          className="w-full list-none"
          style={{
            padding: 0,
            margin: 0,
            flex: '1 1 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {mobileNavLinks.map((link) => (
            <li key={link.label} className="w-full" style={{ textAlign: 'center' }}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-urbanist), "Urbanist", sans-serif',
                  fontSize: '22px',
                  fontWeight: 700,
                  background: 'linear-gradient(90deg, #1e3a8a 0%, #564ed5 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                  margin: '26px 30px 0px 30px',
                  textAlign: 'center',
                  padding: '0',
                }}
              >
                {link.label}
              </a>
            </li>
          ))}

          <li className="w-full" style={{ textAlign: 'center', marginTop: '15px' }}>
            <a
              href=""
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                fontFamily: 'var(--font-inter), "Inter", sans-serif',
                fontSize: '16px',
                fontWeight: 500,
                color: '#ffffff',
                backgroundColor: '#00BC53',
                borderRadius: '8px',
                padding: '10px 0',
                marginLeft: '70px',
                marginRight: '70px',
                marginTop: '15px',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
            >
              Start Free Trial
            </a>
          </li>

          <li className="w-full" style={{ textAlign: 'center' }}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setMobileOpen(false);
              }}
              style={{
                display: 'block',
                fontFamily: 'var(--font-urbanist), "Urbanist", sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                color: '#374151',
                padding: '10px 15px 5px 20px',
                textAlign: 'center',
              }}
            >
              An AI product Built for B2B Lead Generation
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}