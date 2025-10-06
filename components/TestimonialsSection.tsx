"use client";

import { copy } from "@/content/copy";

export default function TestimonialsSection() {
  const testimonials = copy.testimonials.items;

  return (
    <section id="testimonials" className="relative w-full overflow-hidden py-20">
      {/* Section header */}
      <div className="mx-auto max-w-3xl text-center pb-12 md:pb-16 px-6">
        <h2
          className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-6 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
          data-aos="fade-up"
        >
          {copy.testimonials.title}
        </h2>
        <p
          className="text-xl text-gray-300"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          {copy.testimonials.subtitle}
        </p>
      </div>

      {/* Auto-scrolling carousel */}
      <div className="relative w-screen overflow-hidden">
        <div
          className="flex animate-scroll-slow gap-6 md:gap-8 px-6"
          style={{ width: "max-content" }}
        >
          {/* Duplicate list for seamless infinite loop */}
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="flex-none w-[280px] md:w-[460px] lg:w-[520px] rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 p-6 md:p-8"
              style={{ height: "280px" }}
            >
              <div className="flex flex-col justify-between h-full">
                <p className="text-gray-200 text-lg leading-relaxed mb-4">
                  “{item.quote}”
                </p>
                <p className="text-sm font-medium text-indigo-400">
                  — {item.source}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Soft fade edges */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        <div className="pointer-events-none absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent"></div>
      </div>

      {/* Footer disclaimer */}
      <div
        className="mt-12 text-center text-sm text-gray-500 max-w-2xl mx-auto px-6"
        data-aos="fade-up"
        data-aos-delay={800}
      >
        {copy.testimonials.disclaimer}
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes scroll-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-slow {
          animation: scroll-slow 120s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-scroll-slow {
            animation-duration: 80s; /* slower on mobile */
          }
        }
      `}</style>
    </section>
  );
}
