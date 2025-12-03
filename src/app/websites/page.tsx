"use client"
import { useGSAP } from '@gsap/react';
import React, { useRef, useState } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

function Page() {

  const { t } = useLanguage();

  const offer = [
    t('websites.hero.offer.0'),
    t('websites.hero.offer.1'),
    t('websites.hero.offer.2'),
    t('websites.hero.offer.3'),
    t('websites.hero.offer.4'),
    t('websites.hero.offer.5'),
  ];
  const offerRef = useRef(null);
  const [offerCounter, setOfferCounter] = useState(0);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(
      offerRef.current,
      {
        y: 70,
        opacity: 0,
        duration: 0,
        rotateX: 70,
      });
      tl.to(
        offerRef.current,
        {
        y: 0,
        duration: 1,
        ease:"Power4.inOut",
        opacity: 1,
        rotateX: 0,
        delay: 0.35,
      });
      tl.to(
        offerRef.current,
        {
        y: -40,
        duration: 0.8,
        ease:"Power4.inOut",
        opacity: 0,
        rotateX: -55,
      });



    const intervalId = setInterval(() => {
      tl.restart();
      setOfferCounter((prev) => (prev + 1) % offer.length);
    }, 2150);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cases",
        start: "bottom bottom",
        end: "bottom bottom-=100%",
        scrub: 1,
        pin: true,
      }
    });
    tl.fromTo(".list",
      {
        opacity: 0,
        y: 500,
      },
      {
        opacity: 1,
        y: 0,
        duration: 3,
        stagger: 0.6,
      }
    );
    return () => {
      tl.kill();
    };

  }, []);
useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cases2",
        start: "bottom bottom",
        end: "bottom bottom-=100%",
        scrub: 1,
        pin: true,
      }
    });
    tl.fromTo(".list2",
      {
        opacity: 0,
        y: 500,
      },
      {
        opacity: 1,
        y: 0,
        duration: 3,
        stagger: 0.6,
      }
    );
    return () => {
      tl.kill();
    };

  }, []);
  return (
      <div className='relative'>
      <div className="min-h-screen flex flex-col justify-center items-center gap-12 px-12 text-center lg:px-0 pb-32">
        <div className=' flex flex-col'>
        <h1 className='text-5xl font-black space-mono'>{t('websites.hero.heading1')}</h1>
        <h1 ref={offerRef} className='text-5xl font-bold space-mono text-shadow-xl bg-gradient-to-t from-[#B98F5F] from-10% to-[#FEDFBD] to-60%  bg-clip-text text-transparent py-6'>{offer[offerCounter]}</h1>
        <h1 className='text-5xl font-bold space-mono'>{t('websites.hero.heading2')}</h1>
        </div>
        <span className='w-6/12 px-12 h3 text-center '>{t('websites.hero.description')}</span>

      </div>
      <div className="min-h-screen w-full flex flex-row items-center justify-center gap-6 px-14 bg-gradient-to-t from-[#3E3E3E] to-[#000000]">
        <div className="box rounded-4xl py-6 px-2">
          <h1 className='text-3xl space-mono pt-4 pb-8 text-white '>{t('websites.process.step1.title')}</h1>
          <span className='text-white px-4 text-lg'>{t('websites.process.step1.description')}</span>
    
        </div>
        <div className="box rounded-4xl py-6  px-2">
          <h1 className='text-3xl  space-mono pt-4 pb-8 text-white '>{t('websites.process.step2.title')}</h1>
          <span className='text-white px-4 text-lg'>{t('websites.process.step2.description')}</span>

        </div>
        <div className="box rounded-4xl py-6 px-2">
          <h1 className='text-3xl space-mono pt-4 pb-8 text-white '>{t('websites.process.step3.title')}</h1>
          <span className='text-white px-4 text-lg'>{t('websites.process.step3.description')}</span>

        </div>
        <div className="box rounded-4xl py-6 px-2">
          <h1 className='text-3xl space-mono pt-4 pb-8 text-white '>{t('websites.process.step4.title')}</h1>
          <span className='text-white px-4 text-lg'>{t('websites.process.step4.description')}</span>
        </div>


      </div>


      <div className="cases px-30 h-[100vh]">
        <div className="case flex">
          <div className="case-content w-1/2 flex items-center justify-center flex-col px-12">
            <h2 className='text-4xl font-bold space-mono mb-4'>{t('websites.case.title')}</h2>
            <div>
                <ul className='list-disc list-inside text-lg flex flex-col gap-2'>
                {[
                  t('websites.caseOne.items.design'),
                  t('websites.caseOne.items.build'),
                  t('websites.caseOne.items.pixel'),
                  t('websites.caseOne.items.support'),
                  t('websites.caseOne.items.hosting'),
                ].map((item) => (
                  <li
                  key={item}
                  className="list list-none rounded border-transparent [background:linear-gradient(160deg,#cacaca,#000000)] p-[3px]"
                  >
                  <span className="block rounded bg-white px-5 py-2 text-gray-900">
                    {item}
                  </span>
                  </li>
                ))}
                <li className="list list-none rounded border-transparent [background:linear-gradient(160deg,#cacaca,#000000)] p-[3px]">
                  <div className="block rounded bg-white px-5 py-2 space-y-2 text-gray-900">
                    <ul className='list-disc list-inside text-lg flex flex-col gap-2'>{t('websites.case.pagespeed.title')}</ul>
                  <div className="flex flex-col text-sm">
                    <span>{t('websites.case.pagespeed.performance')} 84,5%</span>
                    <span>{t('websites.case.pagespeed.seo')} 100%</span>
                  </div>
                  </div>
                </li>
                </ul>
            </div>

          </div>
          <div className="case-content w-1/2">
            <img src="RezydencjaMockup.png" alt={t('websites.caseOne.imageAlt')} />
          </div>

        </div>

      </div>
      
      <div className="spacer">
      <div className='h-1/2 border px-30'></div>
      </div>


      <div className="cases2 px-30 h-[100vh]">
        <div className="case flex">
   <div className="case-content w-1/2">
            <img src="AgataMockup.png" alt={t('websites.caseTwo.imageAlt')} />
          </div>
          <div className="case-content w-1/2 flex items-center justify-center flex-col px-12">
            <h2 className='text-4xl font-bold space-mono mb-4'>{t('websites.case.title')}</h2>
            <div>
                <ul className='list-disc list-inside text-lg flex flex-col gap-2'>
                {[
                  t('websites.caseTwo.items.build'),
                  t('websites.caseTwo.items.woocommerce'),
                  t('websites.caseTwo.items.elearning'),
                  t('websites.caseTwo.items.newsletter'),
                ].map((item) => (
                  <li
                  key={item}
                  className="list2 list-none rounded border-transparent [background:linear-gradient(160deg,#cacaca,#000000)] p-[3px]"
                  >
                  <span className="block rounded bg-white px-5 py-2 text-gray-900">
                  {item}
                  </span>
                  </li>
                ))}
                <li className="list2 list-none rounded border-transparent [background:linear-gradient(160deg,#cacaca,#000000)] p-[3px]">
                  <div className="block rounded bg-white px-5 py-2 space-y-2 text-gray-900">
                  <ul className='list-disc list-inside text-lg flex flex-col gap-2'>{t('websites.case.pagespeed.title')}</ul>
                  <div className="flex flex-col text-sm">
                    <span>{t('websites.case.pagespeed.performance')} 85%</span>
                    <span>{t('websites.case.pagespeed.seo')} 100%</span>
                  </div>
                  </div>
                </li>
                </ul>
            </div>

          </div>
      
        </div>

      </div>
      



    </div>

  )
}

export default Page