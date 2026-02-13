"use client";
import React from 'react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

function Footer() {
  const email = 'Contact@km-designs.pl'
  const { t } = useLanguage()

  return (
    <footer className="bg-[var(--color-secondary)] border-t-neutral-600 border-t-1 w-max-[1920px] text-white">
      <div className="mx-auto flex w-full flex-wrap gap-6 max-w-screen-2xl flex-col px-5 py-12 md:flex-row md:items-start md:justify-between lg:px-10">
        <div className="flex flex-1  flex-col gap-12 sm:max-w-md">
          <div className='flex flex-col gap-3'>
            <h4 className="text-xl font-semibold md:text-2xl">{t('footer.contact.headingQuestion')}</h4>
            <a
              href={`mailto:${email}`}
              className="text-sm text-[var(--color-accent)] transition hover:text-white hover:underline md:text-base"
            >
              {email}
            </a>
          </div>

          <div className='flex flex-col gap-3'>
            <h4 className="text-xl font-semibold md:text-2xl">{t('footer.contact.headingDiscuss')}</h4>
            <a
              href={`tel:+48731866536`}
              className="text-sm text-[var(--color-accent)] transition hover:text-white hover:underline md:text-base"
            >
              +48 731 866 536
            </a>
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-3 sm:max-w-sm md:items-start">
          <h4 className="text-xl font-semibold md:text-2xl">{t('footer.nav.heading')}</h4>
          <a
            href={`/`} className="text-sm text-[var(--color-accent)] transition hover:text-white hover:underline md:text-base">
            {t('footer.nav.about')}
          </a>
          <a
            href={`/websites`} className="text-sm text-[var(--color-accent)] transition hover:text-white hover:underline md:text-base">
            {t('nav.services')}
          </a>
          <a
            href={`/case-studies`} className="text-sm text-[var(--color-accent)] transition hover:text-white hover:underline md:text-base">
            {t('nav.portfolio')}
          </a>
          <a
            href={`/contact`} className="text-sm text-[var(--color-accent)] transition hover:text-white hover:underline md:text-base">
            {t('nav.contact')}
          </a>
        </nav>

        <div className="flex flex-1 flex-col gap-12 sm:max-w-md md:items-start">
          <div className='flex flex-col gap-3'>
            <h4 className="text-xl font-semibold md:text-2xl">{t('footer.policy.heading')}</h4>
            <a
              href={`/privacy-policy`} className="text-sm text-[var(--color-accent)] transition hover:text-white hover:underline md:text-base">
              {t('footer.policy.privacy')}
            </a>
            <a
              href={`/privacy-policy#cookies`} className="text-sm text-[var(--color-accent)] transition hover:text-white hover:underline md:text-base">
              {t('footer.policy.cookies')}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-6  px-5 pb-10 pt-6 md:flex-row md:items-center md:justify-between lg:px-10">
        <div className="flex items-center gap-4">
          <Image width={120} height={120} src="/KM-logo.png" alt="KM-Design Logo" className="h-18 w-auto md:h-20" />
          <p className="text-sm text-white/80 md:text-base">KM-Design &copy; {new Date().getFullYear()}</p>
        </div>

        <p className="text-sm text-white/60 md:text-right md:text-base">
          {t('footer.tagline')}
        </p>
      </div>
    </footer>
  )
}

export default Footer
