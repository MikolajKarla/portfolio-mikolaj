/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const containerEl = containerRef.current;
      if (!containerEl) {
        return;
      }

      const sections = Array.from(
        containerEl.querySelectorAll<HTMLElement>(".entry"),
      );

      if (sections.length === 0) {
        return;
      }

      const matchMedia = gsap.matchMedia();

      matchMedia.add("(min-width: 1024px)", () => {
        const totalSections = sections.length;
        if (totalSections <= 1) {
          return undefined;
        }

        const scrollDistance = () => sections[0].offsetWidth * (totalSections - 1);

        return gsap.to(sections, {
          xPercent: -100 * (totalSections - 1),
          ease: "none",
          scrollTrigger: {
            trigger: containerEl,
            start: "center center",
            end: () => `+=${scrollDistance()}`,
            scrub: 0.5,
            pin: true,
            invalidateOnRefresh: true,
            markers:true
          },
        });
      });

      return () => matchMedia.revert();
    },
    { scope: containerRef },
  );


  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-16 overflow-x-hidden px-4 sm:px-6 md:w-5/6 md:gap-20 lg:w-full lg:px-0">


      {/* Hero Section with Glassmorphism */}
      <section className="flex w-full max-w-5/6  h-2/3 flex-col-reverse items-center justify-between gap-12  py-16 sm:py-24 lg:flex-row lg:gap-16 lg:py-32">
        <div className="left w-full text-center font-light lg:w-1/2 lg:text-left">
          <h1 className="text-3xl  grotesk sm:text-4xl lg:text-5xl ">
            Nowoczesne aplikacje, sklepy i strony internetowe dla twojego
            biznesu.
          </h1>
          <h3 className="lg:text-2xl pt-8 text-base text-neutral-500 sm:text-lg">
            Budujemy cyfrowe narzędzia , które faktycznie realizują Twoje cele
            biznesowe. Stawiam na nowoczesny design i czysty kod.
          </h3>
          <div className="btn-group mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:items-start lg:justify-start">
            <Button
              size="lg"
              variant="dark"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-white"
            >
              Omówmy Twój Projekt
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>

            <Button
              size="lg"
              variant="light"
              className="border-gray-300 text-foreground hover:bg-gray-100"
            >
              Zobacz Case Studies
            </Button>
          </div>
        </div>
        <div className="right flex w-full justify-center lg:w-1/2">
          <img
            src="/HeroPhoto.png"
            alt="Hero"
            className="h-auto w-full max-w-xs sm:max-w-sm lg:max-w-[660px]"
            loading="lazy"
          />
          <div />
        </div>
      </section>
      <div className="bg-change w-full">
        <h2 className="px-2 text-center text-2xl h1 lg:text-5xl sm:text-3xl">Czym się zajmujemy?</h2>
      <section
        ref={containerRef}
        className="horizontal relative flex flex-row gap-12 overflow-hidden py-12 sm:py-16 lg:items-center h-screen lg:flex-row lg:gap-0 lg:py-0"
      >
          {/* Entry 1 */}
          <div className="entry flex w-full flex-shrink-0 flex-col items-center justify-center gap-10 px-6 text-center lg:w-screen lg:flex-row lg:items-center  lg:text-left">
            <div className="meta  w-full space-y-14 text-center lg:w-1/2">
              <h2 className="text-3xl  grotesk sm:text-4xl lg:text-5xl">Strategic Design <br /> (UI/UX)</h2>
              <p className="text-base leading-relaxed text-neutral-600  sm:text-lg lg:px-12 lg:text-2xl lg:leading-9">
                Tworzę nowoczesne i intuicyjne projekty graficzne. <b>Strona musi wyglądać świetnie</b>, ale przede wszystkim musi być prosta w obsłudze i skutecznie prowadzić klienta do celu.
              </p>
            </div>
            <div className="media flex w-full justify-center lg:w-1/2">
              <img
                src="/Section1MainPage.svg"
                alt="Strony Internetowe"
                className="h-auto w-full max-w-md sm:max-w-xl lg:max-w-[600px]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Entry 2 */}
          <div className="entry flex w-full flex-shrink-0 flex-col items-center justify-center gap-10 px-6 text-center lg:w-screen lg:flex-row lg:items-center lg:gap-24 lg:px-28 lg:text-left">
            <div className="meta w-full space-y-14 text-center lg:w-1/2">
              <h2 className="text-3xl grotesk sm:text-4xl lg:text-5xl">Strony, Aplikacje, Sklepy</h2>
              <p className="text-base leading-relaxed text-neutral-600 sm:text-lg lg:px-12 lg:text-2xl lg:leading-9">
                Realizuję szeroki zakres projektów: od szybkich stron <b>WordPress</b>, przez zaawansowane <b>aplikacje internetowe</b>, aż po <b>wydajne sklepy e-commerce</b>.
              </p>
            </div>
            <div className="media flex w-full justify-center lg:w-1/2">
              <img
                src="/Section2MainPage.svg"
                alt="Aplikacje Webowe"
                className="h-auto w-full max-w-md sm:max-w-xl lg:max-w-[600px]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Entry 3 */}
          <div className="entry flex w-full flex-shrink-0 flex-col items-center justify-center gap-10 px-6 text-center lg:w-screen lg:flex-row lg:items-center lg:gap-24 lg:px-28 lg:text-left">
            <div className="meta w-full space-y-14 text-center lg:w-1/2">
              <h2 className="text-3xl grotesk sm:text-4xl l lg:text-5xl">SEO Techniczne</h2>
              <p className="text-base leading-relaxed text-neutral-600 sm:text-lg lg:px-12 lg:text-2xl lg:leading-9">
                Upewniam się, że Twój projekt jest od podstaw zoptymalizowany pod kątem wyszukiwarek (Google). To czysty kod, szybkie ładowanie i struktura, którą Google pokocha oraz baza do późniejszych działań reklamowych              </p>
            </div>
            <div className="media flex w-full justify-center lg:w-1/2">
              <img
                src="/Section3MainPage.svg"
                alt="E-commerce"
                className="h-auto w-full max-w-md sm:max-w-xl lg:max-w-[900px]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Entry 4 */}
          <div className="entry flex w-full flex-shrink-0 flex-col items-center justify-center gap-10 px-6 text-center lg:w-screen lg:flex-row lg:items-center lg:gap-24 lg:px-28 lg:text-left">
            <div className="meta w-full space-y-14 text-center lg:w-1/2">
              <h2 className="text-3xl grotesk sm:text-4xl lg:text-5xl">Wsparcie i Poprawki</h2>
              <p className="text-base leading-relaxed text-neutral-600 sm:text-lg lg:px-12 lg:text-2xl lg:leading-9">
                Potrzebujesz <b>szybkich poprawek na istniejącej stronie</b> lub wdrożenia nowej funkcjonalności? Pomagam utrzymać i rozwijać Twój cyfrowy projekt.
              </p>
            </div>
            <div className="media flex w-full justify-center lg:w-1/2">
              <img
                src="/Section4MainPage.svg"
                alt="Automatyzacja"
                className="h-auto w-full max-w-md sm:max-w-xl lg:max-w-[600px]"
                loading="lazy"
              />
            </div>
          </div>
      </section>
      </div>
    </div>
  );
}
