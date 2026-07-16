import Image from "next/image";

function MultiWave() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 4080 400"
      preserveAspectRatio="none"
    >
      <path className="wave-fill" opacity="0.2" d="M4080,79.3V0L1179.4,0v79.3c0,0,694.9,437.4,1471.3,275.6S3575.7-152.5,4080,79.3z" />
      <path className="wave-fill" opacity="0.2" d="M2249,79.3V0L0,0l0,79.3c0,0,43.3,437.4,819.8,275.6S1744.7-152.5,2249,79.3z" />
      <path className="wave-fill" opacity="0.2" d="M2631.6,49.8c0,0-596.3,547.3-1468.8,230.2S0,95.6,0,95.6L0,0l2631.6,0V49.8z" />
      <path className="wave-fill" opacity="0.2" d="M4080,95.6c0,0-428.4,501.5-1208.9,184.4S1831,95.6,1831,95.6V0l2249,0V95.6z" />
      <path className="wave-fill" d="M4080,0v192.6c-392.4,177-703.2,95.6-1075-34.1c-214.6-74.8-508-126-839.1,6.1c-149.2,59.5-447.2,203.4-1026.2,10.8C313.2-99.5,0,95.6,0,95.6L0,0l2249,0L4080,0z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-copy">
          <p className="hero-kicker">AI Powered B2B Lead Generation</p>
          <h1 className="hero-title">
            Are you getting the most out of your{" "}
            <span>B2B lead generation?</span>
          </h1>
          <p className="hero-description">
            As sales leaders, we built Piqual by combining AI with real sales
            expertise to generate high-quality B2B leads. Like many sales teams,
            we were frustrated with tools that failed to deliver consistent
            results, so we built our own. Piqual brings together sales planning,
            multi-channel outreach, and performance insights, powered by AI
            while keeping humans in the loop.
          </p>
        </div>

        <div className="hero-visual">
          <Image
            src="/hero-main.png"
            alt=""
            width={1248}
            height={1010}
            priority
            className="hero-main-image"
          />
        </div>
      </div>

      <a href="#scroll" className="hero-scroll" id="scroll" aria-label="Scroll">
        <Image
          src="/hero-mascot.png"
          alt=""
          width={435}
          height={380}
          className="hero-scroll-image"
        />
      </a>

      <div className="hero-wave" aria-hidden="true">
        <MultiWave />
      </div>
    </section>
  );
}
