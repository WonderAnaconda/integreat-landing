"use client";

import { useEffect } from "react";
import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import PageIllustration from "@/public/images/page-illustration.svg";
import { copy } from "@/content/copy";

export default function ContactSection() {
  useEffect(() => {
    // ✅ Load the Tally embed script once, client-side
    const d = document;
    const w = "https://tally.so/widgets/embed.js";

    const v = () => {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      } else {
        d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((el) => {
          el.setAttribute("src", (el as HTMLElement).dataset.tallySrc || "");
        });
      }
    };

    if (typeof (window as any).Tally !== "undefined") {
      v();
    } else if (!d.querySelector(`script[src="${w}"]`)) {
      const s = d.createElement("script");
      s.src = w;
      s.onload = v;
      s.onerror = v;
      d.body.appendChild(s);
    }
  }, []);

  return (
    <section
      id="contact"
      className="relative overflow-hidden min-h-[70vh] flex flex-col items-center justify-center"
    >
      {/* Background illustrations */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-28 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={880}
          height={720}
          alt="Blurred shape"
        />
      </div>

      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/4 opacity-35"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={PageIllustration}
          width={920}
          height={620}
          alt="Page illustration"
        />
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-10 sm:px-6 w-full">
        <div className="bg-linear-to-r from-transparent via-gray-800/50 py-16 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-6 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              {copy.contact.title}
            </h2>

            <p
              className="mb-10 text-lg md:text-xl text-gray-300"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              {copy.contact.subtitle}
            </p>

            {/* CTA Buttons */}
            {/* <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center gap-4 mb-12">
              <div data-aos="fade-up" data-aos-delay={400}>
                <a
                  className="btn group mb-4 w-full sm:w-auto px-8 py-4 text-lg font-medium bg-linear-to-t from-indigo-600 to-indigo-500 text-white shadow-lg hover:opacity-90 rounded-xl transition-all sm:mb-0"
                  href="#tally-form"
                >
                  <span className="relative inline-flex items-center">
                    {copy.contact.primaryCta}
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </a>
              </div>
            </div> */}

            {/* ✅ Embedded Tally Form */}
            <div
              id="tally-form"
              className="w-full max-w-2xl mx-auto mt-10"
              data-aos="fade-up"
              data-aos-delay={800}
            >
              <iframe
                data-tally-src="https://tally.so/embed/wvoOdl?alignLeft=1&hideTitle=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="534"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Contact form"
                className="rounded-2xl border border-gray-800 shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
