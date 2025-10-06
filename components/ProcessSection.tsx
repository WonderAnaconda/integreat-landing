"use client";

import Image from "next/image";
import Workflow01 from "@/public/images/workflow-01.png";
import Workflow02 from "@/public/images/workflow-02.png";
import Workflow03 from "@/public/images/workflow-03.png";
import { copy } from "@/content/copy";

export default function ProcessSection() {
  const workflowImages = [Workflow01, Workflow02, Workflow03];
  
  const steps = copy.process.steps.map((step, index) => ({
    ...step,
    image: workflowImages[index],
    delay: index * 200
  }));

  return (
    <section id="process" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl text-center pb-12 md:pb-20">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              {copy.process.title}
            </h2>
            <p
              className="text-xl text-gray-300"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              {copy.process.subtitle}
            </p>
          </div>

          {/* Process steps */}
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-8 backdrop-blur-sm border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
                data-aos="fade-up"
                data-aos-delay={step.delay}
              >
                {/* Step number */}
                <div className="mb-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-sm font-semibold text-white">
                    {step.number}
                  </div>
                </div>

                {/* Step image */}
                <div className="mb-6">
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      className="mx-auto transition-transform duration-300 group-hover:scale-105"
                      src={step.image}
                      width={300}
                      height={200}
                      alt={`${step.title} process`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                  </div>
                </div>

                {/* Step content */}
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connecting line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden h-0.5 w-8 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 md:block"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
