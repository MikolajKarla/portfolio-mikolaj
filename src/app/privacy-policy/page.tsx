"use client";
import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const processingRows = [
  {
    purpose: 'privacy.processing.contact.purpose',
    scope: 'privacy.processing.contact.scope',
    legal: 'privacy.processing.contact.legal',
    retention: 'privacy.processing.contact.retention',
  },
  {
    purpose: 'privacy.processing.newsletter.purpose',
    scope: 'privacy.processing.newsletter.scope',
    legal: 'privacy.processing.newsletter.legal',
    retention: 'privacy.processing.newsletter.retention',
  },
  {
    purpose: 'privacy.processing.analytics.purpose',
    scope: 'privacy.processing.analytics.scope',
    legal: 'privacy.processing.analytics.legal',
    retention: 'privacy.processing.analytics.retention',
  },
]

const rightsList = [
  'privacy.rights.access',
  'privacy.rights.rectification',
  'privacy.rights.erasure',
  'privacy.rights.restriction',
  'privacy.rights.portability',
  'privacy.rights.objection',
  'privacy.rights.withdraw',
  'privacy.rights.complaint',
]

const recipients = [
  'privacy.recipients.hosting',
  'privacy.recipients.analytics',
  'privacy.recipients.newsletter',
]

const cookiesInfo = [
  'privacy.cookies.essential',
  'privacy.cookies.functional',
  'privacy.cookies.analytics',
]

function Page() {
  const { t } = useLanguage()
  return (
    <main className="bg-[var(--color-secondary)] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-10 px-6 pt-40 pb-24 sm:px-12">

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm leading-relaxed text-white/80 shadow-lg">
          <p>
            <strong>{t('privacy.note.important')}</strong>
            {` ${t('privacy.note.body')} `}
            <strong>{t('privacy.note.consult')}</strong>
          </p>
        </section>

        <header className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent-dark)]">{t('privacy.updated')}</p>
          <h1 className="text-4xl font-black space-mono text-white">{t('privacy.title')}</h1>
          <p className="text-white/70">{t('privacy.admin')}</p>
          <div className="flex flex-col gap-1 text-sm text-white/70">
            <span>{t('privacy.contact.emailLabel')} <a href="mailto:contact@km-designs.pl" className="text-[var(--color-accent)]">contact@km-designs.pl</a></span>
            <span>{t('privacy.contact.phoneLabel')} <a href="tel:+48731866536" className="text-[var(--color-accent)]">+48 731 866 536</a></span>
            <span>{t('privacy.contact.siteLabel')} <a href="https://km-designs.pl/" className="text-[var(--color-accent)]" target="_blank" rel="noreferrer">https://km-designs.pl/</a></span>
          </div>
        </header>

        <section className="space-mono space-y-4">
          <h2 className="text-2xl font-semibold text-white">{t('privacy.section1.title')}</h2>
          <p className="text-white/80">{t('privacy.section1.body')}</p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">{t('privacy.section2.title')}</h2>
          <p className="text-white/80">{t('privacy.section2.description')}</p>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <table className="w-full text-left text-sm text-white/80">
              <thead className="bg-white/10 text-xs uppercase tracking-wide text-white/70">
                <tr>
                  <th className="px-4 py-3">{t('privacy.table.header.purpose') ?? 'Cel przetwarzania'}</th>
                  <th className="px-4 py-3">{t('privacy.table.header.scope') ?? 'Zakres danych'}</th>
                  <th className="px-4 py-3">{t('privacy.table.header.legal') ?? 'Podstawa prawna'}</th>
                  <th className="px-4 py-3">{t('privacy.table.header.retention') ?? 'Okres przechowywania'}</th>
                </tr>
              </thead>
              <tbody>
                {processingRows.map((row) => (
                  <tr key={row.purpose} className="border-t border-white/5">
                    <td className="px-4 py-3 font-semibold text-white">{t(row.purpose)}</td>
                    <td className="px-4 py-3">{t(row.scope)}</td>
                    <td className="px-4 py-3">{t(row.legal)}</td>
                    <td className="px-4 py-3">{t(row.retention)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">{t('privacy.section3.title')}</h2>
          <p className="text-white/80">{t('privacy.section3.description')}</p>
          <ul className="list-disc space-y-2 pl-6 text-white/80">
            {rightsList.map((item) => (
              <li key={item}>{t(item)}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">{t('privacy.section4.title')}</h2>
          <p className="text-white/80">{t('privacy.section4.description')}</p>
          <ul className="list-disc space-y-2 pl-6 text-white/80">
            {recipients.map((item) => (
              <li key={item}>{t(item)}</li>
            ))}
          </ul>
        </section>

        <section id="cookies" className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">{t('privacy.section5.title')}</h2>
          <p className="text-white/80">{t('privacy.section5.description')}</p>
          <ol className="list-decimal space-y-2 pl-6 text-white/80">
            {cookiesInfo.map((item) => (
              <li key={item}>{t(item)}</li>
            ))}
          </ol>
          <p className="text-white/70">{t('privacy.section5.browserInfo')}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">{t('privacy.section6.title')}</h2>
          <p className="text-white/80">{t('privacy.section6.description')}</p>
        </section>
      </div>
    </main>
  )
}

export default Page