"use client";

import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import { copy } from "@/content/copy";

export default function FooterSection() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-transparent">
      {/* Background illustration */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 opacity-20"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={FooterIllustration}
          width={846}
          height={594}
          alt="Footer illustration"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20 flex flex-col items-center justify-center text-center">
          {/* Top line content (company + description + email) */}
          <div
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center text-gray-300 gap-4 sm:gap-8 mb-8"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-semibold text-white">
              {copy.footer.companyName}
            </h3>

            <span className="hidden sm:block text-gray-600">|</span>

            <p className="text-gray-400 max-w-xl sm:max-w-md text-center sm:text-left">
              {copy.footer.description}
            </p>

            <span className="hidden sm:block text-gray-600">|</span>

            <a
              href="/legal"
              className="hover:text-gray-300 transition-colors"
            >
              Legal Notice
            </a>

            <span className="hidden sm:block text-gray-600">|</span>

            <a
              href={`mailto:${copy.footer.email}`}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {copy.footer.email}
            </a>
            
          </div>

          {/* Copyright */}
          <div
            className="border-t border-gray-800 pt-8 mt-4"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <p className="text-gray-400 text-sm">{copy.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
