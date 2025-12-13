/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Target } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "@/contexts/LanguageContext";
import FaqListItem from "@/components/ui/faq-list-item";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { t } = useLanguage();

  const services = [
    {
      key: "design",
      title: t("home.sections.design.title"),
      body: t("home.sections.design.body"),
      image: "/Section1MainPage.svg",
      alt: t("home.sections.design.imageAlt"),
      wrapperClass: "lg:gap-16 lg:px-12",
      imageClass: "lg:max-w-[600px]",
    },
    {
      key: "build",
      title: t("home.sections.build.title"),
      body: t("home.sections.build.body"),
      image: "/Section2MainPage.svg",
      alt: t("home.sections.build.imageAlt"),
      wrapperClass: "lg:gap-24 lg:px-28",
      imageClass: "lg:max-w-[600px]",
    },
    {
      key: "seo",
      title: t("home.sections.seo.title"),
      body: t("home.sections.seo.body"),
      image: "/Section3MainPage.svg",
      alt: t("home.sections.seo.imageAlt"),
      wrapperClass: "lg:gap-24 lg:px-28",
      imageClass: "lg:max-w-[900px]",
    },
    {
      key: "support",
      title: t("home.sections.support.title"),
      body: t("home.sections.support.body"),
      image: "/Section4MainPage.svg",
      alt: t("home.sections.support.imageAlt"),
      wrapperClass: "lg:gap-24 lg:px-28",
      imageClass: "lg:max-w-[600px]",
    },
  ];

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

        const totalSections = sections.length;
        if (totalSections <= 1) {
          return undefined;
        }

        return gsap.to(sections, {
          xPercent: -100 * (totalSections - 1),
          ease: "none",
          scrollTrigger: {
            trigger: containerEl,
            start: "center center",
            end: () => `+=${window.innerWidth*totalSections}`,
            scrub: 0.5,
            pin: true,
            pinSpacing:true,
            invalidateOnRefresh: true,
          },
        });
      });

  
  useGSAP(
    ()=>{
    const img = document.querySelector(".bg")
    ScrollTrigger.create({
      trigger:".case-studies",
      start:"center center",
      end:`+${window.innerHeight * 6}`,
      pin:true,
      pinSpacing:true, 
      onUpdate:(self)=>{
        const progress = self.progress
        console.log(progress);

      }
    })
  }
  
  )

  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-16 overflow-x-hidden md:gap-20 lg:w-full lg:px-0">
      <section className="flex w-full max-w-5/6  h-2/3 flex-col-reverse items-center justify-between gap-12  py-16 sm:py-24 lg:flex-row lg:gap-16 lg:py-32">
        <div className="left w-full text-center font-light lg:w-2/3 lg:text-left">
          <h1 className="text-3xl font-medium space-mono sm:text-4xl lg:text-5xl ">
            {t("home.hero.title")}
          </h1>
          <h3 className="lg:text-2xl pt-8 text-base text-neutral-500 pr-10 sm:text-lg">
            {t("home.hero.subtitle")}
          </h3>
          <div className="btn-group mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:items-start lg:justify-start">
            <Button
              size="lg"
              variant="dark"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-white"
            >
              {t("home.hero.cta.primary")}
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>

            <Button
              size="lg"
              variant="light"
              className="border-gray-300 text-foreground hover:bg-gray-100"
            >
              {t("home.hero.cta.secondary")}
            </Button>
          </div>
        </div>
        <div className="right flex w-full justify-center lg:w-1/2">
          <img
            src="/HeroPhoto.png"
            alt={t("home.hero.imageAlt")}
            className="h-auto w-full max-w-xs sm:max-w-sm lg:max-w-[660px]"
            loading="lazy"
          />
          <div />
        </div>
      </section>
      {/* #TODO: dodac tutaj animacje tekstu i pb */}
        <h2 className="px-2 text-center text-2xl h1 lg:text-5xl sm:text-3xl">{t("home.whatWeDo.heading")}</h2>  
      <div className="w-full overflow-hidden">
      <section
        ref={containerRef}
        className="horizontal relative flex flex-row gap-12 overflow-hidden py-12 sm:py-16 lg:items-center h-screen lg:flex-row lg:gap-0 lg:py-0"
      >
          {services.map((service) => (
            <div
              key={service.key}
              className={`entry flex w-full flex-shrink-0 flex-col items-center justify-center gap-10 px-6 text-center lg:w-screen lg:flex-row lg:items-center lg:text-left ${service.wrapperClass}`}
            >
              <div className="meta w-full space-y-14 text-center lg:w-1/2">
                <h2 className="text-3xl grotesk sm:text-4xl lg:text-5xl">
                  {service.title}
                </h2>
                <p className="text-base leading-relaxed text-neutral-600 sm:text-lg lg:px-12 lg:text-2xl lg:leading-9">
                  {service.body}
                </p>
              </div>
              <div className="media flex w-full justify-center lg:w-1/2">
                <img
                  src={service.image}
                  alt={service.alt}
                  className={`h-auto w-full max-w-md sm:max-w-xl ${service.imageClass}`}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
      </section>
      </div>
      

      <section className="w-full h-[100vh] bg-img-logo flex justify-center items-center">
        <div className="w-1/3 p-6 items-center gap-6 text-center flex flex-col rounded-3xl light-gradient-bg ">
        <h3 className="text-2xl grotesk">{t("home.cta.heading")}</h3>
        <span className="px-10">{t("home.cta.body")}</span>
        <a target="_blank" href="/contact" className="-mb-10 ">
          <Button 
              size="lg"
              variant="dark"
              className="bg-primarytext-primary-foreground hover:bg-primary/90 text-white"
              
            >
              {t("home.cta.button")}
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            </a>
        </div>
      </section>

      <section className="faq text-center  text-white py-20 text-xl bg-[var(--color-secondary)] min-w-full">
        <span className="text-neutral-500 ">{t("home.faq.badge")}</span>
        <h3 className="text-2xl">{t("home.faq.heading")}</h3>
        <div className="flex px-40 gap-20  py-25 ">
          <div className="left w-1/2 text-left flex flex-col gap-6">
          <p>{t("home.faq.body")}</p>
          <p className="font-black">{t("home.faq.body2")}</p>

          </div>
          <div className="right w-1/2 text-left flex flex-col  gap-12">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaqListItem key={`faq-item-${index}`} id={index} title={t(`home.faq.item-${index + 1}.question`)} answer={t(`home.faq.item-${index + 1}.answer`)} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
