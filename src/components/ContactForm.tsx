import React, { useId, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Mail, MessageSquare, PhoneCall } from 'lucide-react'
import { cn } from '@/lib/utils'
import Alert from './ui/alert'
import { useLanguage } from '@/contexts/LanguageContext'

type ContactFormProps = {
  className?: string
}

function ContactForm({ className }: ContactFormProps) {
  const { t } = useLanguage()

  const formId = useId()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [alert, setAlert] = useState<null | { message: string; type: 'success' | 'error' }>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isSubmitting) return

    const form = e.currentTarget
    const formData = new FormData(form)

    setIsSubmitting(true)
    setAlert(null)

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setAlert({ message: t('contact.form.alert.success'), type: 'success' })
        form.reset()
      } else {
        const data = await response.json().catch(() => null)
        const errorMessage = data?.error
          ? String(data.error)
          : t('contact.form.alert.unknownError')
        setAlert({ message: `${t('contact.form.alert.errorPrefix')} ${errorMessage}`, type: 'error' })
      }
    } catch (error) {
      setAlert({ message: `${t('contact.form.alert.errorPrefix')} ${String(error)}`, type: 'error' })
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className={cn('relative flex h-full w-full flex-col overflow-hidden rounded-xl border-2 border-stone-300 lg:rounded-tl-3xl bg-[var(--color-secondary)] text-white shadow-2xl', className)}>
      <div className="relative flex  h-full flex-col gap-10 p-8 sm:p-10">
        <div className="min-h-[44px]" aria-live="polite" aria-atomic="true">
          {alert ? <Alert message={alert.message} type={alert.type} /> : null}
        </div>
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[0.95fr,1.05fr] lg:items-start lg:gap-12">
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent-dark)]">
                <Mail className="h-4 w-4" />
                {t('contact.form.badge')}
              </span>
              <h2 className="text-3xl font-semibold grotesk sm:text-4xl">
                {t('contact.form.title')}
              </h2>
              <p className="text-sm text-white/70 sm:text-base">
                {t('contact.form.description')}
              </p>
            </div>

            <div className="space-y-4 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <PhoneCall className="h-5 w-5 text-[var(--color-accent)]" />
                <a href="tel:+48731866536" className="transition hover:text-white">+48 731 866 536</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[var(--color-accent)]" />
                <a href="mailto:Contact@KarlaFreelancing.pl" className="transition hover:text-white">
                  Contact@KarlaFreelancing.pl
                </a>
              </div>
              <p className="text-xs text-white/50">
                {t('contact.form.dataSafety')}
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}

            className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur"
          >
            {/* Honeypot for basic spam protection (should stay empty) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor={`${formId}-website`}>
                Website
              </label>
              <input
                id={`${formId}-website`}
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                defaultValue=""
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <label htmlFor="name" className="space-y-2 sm:col-span-1">
                <span className="text-sm font-medium text-white">{t('contact.form.name.label')}</span>
                <Input
                  id="name"
                  name="name"
                  placeholder={t('contact.form.name.placeholder')}
                  required
                  autoComplete="name"
                  disabled={isSubmitting}
                  className="bg-white/5 text-white placeholder:text-white/50"
                />
              </label>
              <label htmlFor="email" className="space-y-2 sm:col-span-1">
                <span className="text-sm font-medium text-white">{t('contact.form.email.label')}</span>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t('contact.form.email.placeholder')}
                  required
                  inputMode="email"
                  autoComplete="email"
                  disabled={isSubmitting}
                  className="bg-white/5 text-white placeholder:text-white/50"
                />
              </label>
              <label htmlFor="company" className="space-y-2 sm:col-span-2">
                <span className="text-sm font-medium text-white">{t('contact.form.company.label')}</span>
                <Input
                  id="company"
                  name="company"
                  placeholder={t('contact.form.company.placeholder')}
                  autoComplete="organization"
                  disabled={isSubmitting}
                  className="bg-white/5 text-white placeholder:text-white/50"
                />
              </label>
            </div>

            <label htmlFor="message" className="space-y-2">
              <span className="flex items-center gap-2 text-sm font-medium text-white">
                <MessageSquare className="h-4 w-4" />
                {t('contact.form.message.label')}
              </span>
              <Textarea
                id="message"
                name="message"
                rows={6}
                placeholder={t('contact.form.message.placeholder')}
                required
                autoComplete="off"
                disabled={isSubmitting}
                className="bg-white/5 text-white placeholder:text-white/50"
              />
            </label>

            <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-white/60">
                {t('contact.form.consent')}
              </p>
              <Button variant="light" size="lg" type="submit" className="whitespace-nowrap">
                {t('contact.form.submit')}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm