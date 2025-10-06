"use client";

import Image from "next/image";
import SecondaryIllustration from "@/public/images/secondary-illustration.svg";
import WorkflowImage from "@/public/images/workflow-03.png";
import { copy } from "@/content/copy";

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Background illustration */}
      {/* <div
        className="pointer-events-none absolute right-0 top-1/2 -z-10 -translate-y-1/2 opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={WorkflowImage}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div> */}

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Content */}
            <div className="flex flex-col justify-center">
              <h2
                className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
                data-aos="fade-up"
              >
                {copy.about.title}
              </h2>
              <p
                className="mb-6 text-lg text-gray-300"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                {copy.about.description1}
              </p>
              <p
                className="mb-8 text-lg text-gray-300"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                {copy.about.description2}
              </p>
              <div data-aos="fade-up" data-aos-delay={600}>
                <a
                  className="btn group bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
                  href={copy.about.ctaLink}
                >
                  <span className="relative inline-flex items-center">
                    {copy.about.cta}
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* Illustration */}
            <div className="flex items-center justify-center" data-aos="fade-up" data-aos-delay={400}>
              <div className="relative">
                <Image
                  className="mx-auto"
                  src={WorkflowImage}
                  width={500}
                  height={400}
                  alt="About Integreat"
                />
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
