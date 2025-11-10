"use client";

import { copy } from "@/content/copy";

export default function PricingSection() {
  const plans = copy.pricing.plans;

  return (
    <section id="pricing" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-purple-900/20"></div>
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl text-center pb-12 md:pb-20">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              {copy.pricing.title}
            </h2>
            <p
              className="text-xl text-gray-300 mb-8"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              {copy.pricing.subtitle}
            </p>

          </div>

          {/* Pricing cards */}
          <div className="grid gap-12 md:gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-8 backdrop-blur-sm border transition-all duration-300 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-indigo-500/50 shadow-2xl shadow-indigo-500/20 scale-105' 
                    : 'border-gray-700/50 hover:border-indigo-500/50 hover:shadow-indigo-500/10'
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-1 text-sm font-semibold text-white">
                      Popular
                    </span>
                  </div>
                )}

                {/* Plan header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {plan.description}
                  </p>
                  <div className="mb-4">
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-white">
                        from €{plan.setupFee}
                      </span>
                      <span className="text-gray-400 text-sm ml-1">setup</span>
                    </div>
                    <div className="text-sm text-gray-300">
                      + <span className="text-xl font-semibold text-indigo-300">€{plan.monthlyRetainer}</span>
                      <span className="text-gray-400 ml-1">/month maintenance</span>
                    </div>
                  </div>
                </div>

                {/* Setup Features */}
                <div className="mb-6 h-80 flex flex-col">
                  <h4 className="text-sm font-semibold text-indigo-300 mb-4">Setup Includes:</h4>
                  <ul className="space-y-4 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className="mr-3 mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Maintenance Features */}
                <div className="mb-8 h-64 flex flex-col">
                  <h4 className="text-sm font-semibold text-green-300 mb-4">Monthly Maintenance:</h4>
                  <ul className="space-y-4 flex-1">
                    {plan.maintenanceFeatures.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className="mr-3 mt-0.5 h-4 w-4 flex-shrink-0 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA button */}
                <a
                  className={`btn w-full text-center transition-all duration-300 rounded-xl py-3 px-6 font-semibold ${
                    plan.popular
                      ? 'bg-gradient-to-t from-indigo-600 to-indigo-500 text-white shadow-lg hover:shadow-xl hover:from-indigo-500 hover:to-indigo-400'
                      : 'bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700 hover:border-gray-600'
                  }`}
                  href="#contact"
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
