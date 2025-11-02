"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Home() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".entry")

      sections.forEach((section) => {
        const meta = section.querySelector(".meta")
        const media = section.querySelector(".media")

        if (!meta || !media) return

        gsap.set([meta, media], { xPercent: 100, opacity: 0 })

        gsap.to(meta, {
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom +=300",
            toggleActions: "play none none reverse",
            markers:true,
            scrub: true
          },
          xPercent: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        })

        gsap.to(media, {
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom +=300",
            toggleActions: "play none none reverse",
            markers:true,
            scrub: true
          },
          xPercent: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        })
      })
    })

    return () => ctx.revert()
  }, [])


  return (
    <div className="min-h-screen lg:w-3/4 md:w-5/6 mx-auto flex flex-col gap-20">


      {/* Hero Section with Glassmorphism */}
      <section className="lg:py-40 px-10 lg:flex-row flex flex-col items-center justify-center gap-10 ">
        <div className="left w-1/2 font-light">
          <h1>
            Nowoczesne aplikacje, sklepy i strony internetowe dla twojego
            biznesu.
          </h1>
          <h3 className="font-small pt-4">
            Budujemy cyfrowe narzędzia , które faktycznie realizują Twoje cele
            biznesowe. Stawiam na nowoczesny design i czysty kod.
          </h3>
          <div className="btn-group flex flex-col items-start gap-4 mt-6">
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
        <div className="right w-1/2 flex justify-center">
          <Image
            src="/HeroPhoto.png"
            alt="Hero Image"
            width={500}
            height={500}
            className=""
          />
          <div />
        </div>
      </section>
      <h2 className="text-center">Czym się zajmujemy?</h2>
      
      <section id="services" className="portfolio flex flex-col items-center justify-center gap-20 lg:pb-40 lg:pt-10">
        {/* Entry 1 */}
        <div className="entry flex lg:flex-row flex-col items-center justify-between gap-10 w-full">
          <div className="meta lg:w-1/2 w-full">
            <h2>Strony Internetowe</h2>
            <p>Tworzymy responsywne strony internetowe, które przyciągają uwagę i konwertują odwiedzających w klientów. Nowoczesny design, szybkie ładowanie i SEO.</p>
          </div>
          <div className="media lg:w-1/2 w-full flex justify-center">
            <Image
              src="/Section1MainPage.svg"
              alt="Strony Internetowe"
              width={550}
              height={550}
            />
          </div>
        </div>

        {/* Entry 2 */}
        <div className="entry flex lg:flex-row flex-col items-center justify-between gap-10 w-full">
          <div className="meta lg:w-1/2 w-full">
            <h2>Aplikacje Webowe</h2>
            <p>Projektujemy i budujemy zaawansowane aplikacje webowe dostosowane do Twoich potrzeb biznesowych. Skalowalne, bezpieczne i intuicyjne.</p>
          </div>
          <div className="media lg:w-1/2 w-full flex justify-center">
            <Image
              src="/Section1MainPage.svg"
              alt="Aplikacje Webowe"
              width={550}
              height={550}
            />
          </div>
        </div>

        {/* Entry 3 */}
        <div className="entry flex lg:flex-row flex-col items-center justify-between gap-10 w-full">
          <div className="meta lg:w-1/2 w-full">
            <h2>E-commerce</h2>
            <p>Kompleksowe rozwiązania e-commerce z integracją płatności, zarządzaniem magazynem i narzędziami marketingowymi. Zwiększ swoją sprzedaż online.</p>
          </div>
          <div className="media lg:w-1/2 w-full flex justify-center">
            <Image
              src="/Section1MainPage.svg"
              alt="E-commerce"
              width={550}
              height={550}
            />
          </div>
        </div>

        {/* Entry 4 */}
        <div className="entry flex lg:flex-row flex-col items-center justify-between gap-10 w-full">
          <div className="meta lg:w-1/2 w-full">
            <h2>Automatyzacja</h2>
            <p>Automatyzujemy procesy biznesowe, integrujemy systemy i tworzymy custom toolsy. Oszczędzaj czas i zwiększ efektywność swojego zespołu.</p>
          </div>
          <div className="media lg:w-1/2 w-full flex justify-center">
            <Image
              src="/Section1MainPage.svg"
              alt="Automatyzacja"
              width={550}
              height={550}
            />
          </div>
        </div>
      </section>
      
    </div>
  );
}
