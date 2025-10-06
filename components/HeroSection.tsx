"use client";

import Image from "next/image";
import HeroImage from "@/public/images/ai_collab3_1.png";
import BlurredShape from "@/public/images/blurred-shape.svg";
import LiquidEther from "@/app/css/LiquidEther";
import { copy } from "@/content/copy";

export default function HeroSection() {
  return (

    <section id="hero" className="relative overflow-hidden">
      
      {/* LiquidEther Background Effect */}
      {/* <div className="absolute inset-0 -z-20">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.7}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.3}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div> */}

      {/* Background illustrations */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/4"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-20 md:py-32">
          {/* Hero content */}
          <div className="pb-20 text-center md:pb-32">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              {copy.hero.title}
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                {copy.hero.subtitle}
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href={copy.hero.primaryCtaLink}
                  >
                    <span className="relative inline-flex items-center">
                      {copy.hero.primaryCta}
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href={copy.hero.secondaryCtaLink}
                  >
                    {copy.hero.secondaryCta}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative" data-aos="fade-up" data-aos-delay={800}>
            <div className="relative mx-auto max-w-4xl">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl"
                   style={{
                     maskImage: `
                       linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%),
                       linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)
                     `,
                     WebkitMaskImage: `
                       linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%),
                       linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)
                     `,
                     maskComposite: 'intersect',
                     WebkitMaskComposite: 'source-in'
                   }}>
                <Image
                  className="mx-auto"
                  src={HeroImage}
                  width={1104}
                  height={576}
                  alt="Integreat Platform Preview"
                  priority
                />
              </div>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
