"use client";

import { useState } from "react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        "Up to 5 team members",
        "Basic automation tools",
        "Email support",
        "Standard integrations",
        "Monthly reports"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Growth", 
      description: "Ideal for growing businesses",
      monthlyPrice: 79,
      annualPrice: 790,
      features: [
        "Up to 25 team members",
        "Advanced automation suite",
        "Priority support",
        "Custom integrations",
        "Real-time analytics",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Pro",
      description: "For enterprise-level organizations", 
      monthlyPrice: 149,
      annualPrice: 1490,
      features: [
        "Unlimited team members",
        "Full AI-powered suite",
        "24/7 dedicated support",
        "White-label solutions",
        "Advanced reporting",
        "Custom development"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

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
              Pick the right plan for your business
            </h2>
            <p
              className="text-xl text-gray-300 mb-8"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Choose the perfect plan to accelerate your business growth
            </p>

            {/* Billing toggle */}
            <div className="flex items-center justify-center space-x-4" data-aos="fade-up" data-aos-delay={400}>
              <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
                Billed Monthly
              </span>
              <button
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                onClick={() => setIsAnnual(!isAnnual)}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
                Billed Annually
              </span>
            </div>
          </div>

          {/* Pricing cards */}
          <div className="grid gap-8 md:grid-cols-3">
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
                    <span className="text-4xl font-bold text-white">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-400">
                      {isAnnual ? '/year' : '/month'}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA button */}
                <a
                  className={`btn w-full text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]'
                      : 'bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]'
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
