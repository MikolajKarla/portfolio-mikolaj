"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react";

export default function Home() {

  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(useGSAP)
  
  
  useGSAP(()=>{
    const container = document.querySelector(".horizontal")
    const sections = gsap.utils.toArray(".horizontal .entry")
    console.log(sections,container)
    const dist = document.querySelector(".horizontal")?.clientWidth*sections.length
    console.log(dist)
      gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
          trigger: container,
          markers:true,
          start:"center center",
          end: () => `+=${dist*0.6}`,
          scrub: 1,
          pin:true,
          snap: 1 / (sections.length - 1),
      },
    })

})


  return (
    <div className="min-h-screen overflow-x-hidden lg:w-full md:w-5/6 mx-auto items-center  flex flex-col gap-20">


      {/* Hero Section with Glassmorphism */}
      <section className="lg:py-40 px-10 lg:flex-row lg:w-3/4 flex flex-col items-center justify-center gap-10 ">
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
      <section className="horizontal justify-items-start flex flex-nowrap flex-row ">
          {/* Entry 1 */}
          <div className="entry flex w-full flex-shrink-0 flex-col  items-center justify-between gap-10 lg:px-30 px-10 lg:flex-row">
            <div className="meta w-full lg:w-1/2">
              <h2>Strony Internetowe</h2>
              <p>Tworzymy responsywne strony internetowe, które przyciągają uwagę i konwertują odwiedzających w klientów. Nowoczesny design, szybkie ładowanie i SEO.</p>
            </div>
            <div className="media flex w-full justify-center lg:w-1/2">
              <Image
                src="/Section1MainPage.svg"
                alt="Strony Internetowe"
                width={550}
                height={550}
              />
            </div>
          </div>

          {/* Entry 2 */}
          <div className="entry flex w-full flex-shrink-0 flex-col items-center justify-between gap-10 lg:px-30 px-10 lg:flex-row">
            <div className="meta w-full lg:w-1/2">
              <h2>Aplikacje Webowe</h2>
              <p>Projektujemy i budujemy zaawansowane aplikacje webowe dostosowane do Twoich potrzeb biznesowych. Skalowalne, bezpieczne i intuicyjne.</p>
            </div>
            <div className="media flex w-full justify-center lg:w-1/2">
              <Image
                src="/Section2MainPage.svg"
                alt="Aplikacje Webowe"
                width={550}
                height={550}
              />
            </div>
          </div>

          {/* Entry 3 */}
          <div className="entry flex w-full flex-shrink-0 flex-col items-center justify-between gap-10 lg:px-30 px-10 lg:flex-row">
            <div className="meta w-full lg:w-1/2">
              <h2>E-commerce</h2>
              <p>Kompleksowe rozwiązania e-commerce z integracją płatności, zarządzaniem magazynem i narzędziami marketingowymi. Zwiększ swoją sprzedaż online.</p>
            </div>
            <div className="media flex w-full justify-center lg:w-1/2">
              <Image
                src="/Section3MainPage.svg"
                alt="E-commerce"
                width={550}
                height={550}
              />
            </div>
          </div>

          {/* Entry 4 */}
          <div className="entry flex w-full flex-shrink-0 flex-col items-center justify-between gap-10 lg:px-30 px-10 lg:flex-row">
            <div className="meta w-full lg:w-1/2">
              <h2>Automatyzacja</h2>
              <p>Automatyzujemy procesy biznesowe, integrujemy systemy i tworzymy custom toolsy. Oszczędzaj czas i zwiększ efektywność swojego zespołu.</p>
            </div>
            <div className="media flex w-full justify-center lg:w-1/2">
              <Image
                src="/Section4MainPage.svg"
                alt="Automatyzacja"
                width={550}
                height={550}
              />
            </div>
          </div>
      </section>
      <div className=" h-[500vh]"></div>
    </div>
  );
}
