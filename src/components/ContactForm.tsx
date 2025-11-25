import React from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Mail, MessageSquare, PhoneCall } from 'lucide-react'
import { cn } from '@/lib/utils'

type ContactFormProps = {
  className?: string
}

function ContactForm({ className }: ContactFormProps) {
  return (
    <div className={cn('relative flex h-full w-full flex-col overflow-hidden rounded-xl border-2 border-stone-300 lg:rounded-tl-3xl bg-[var(--color-secondary)] text-white shadow-2xl', className)}>

      <div className="relative flex  h-full flex-col gap-10 p-8 sm:p-10">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[0.95fr,1.05fr] lg:items-start lg:gap-12">
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent-dark)]">
                <Mail className="h-4 w-4" />
                Kontakt
              </span>
              <h2 className="text-3xl font-semibold grotesk sm:text-4xl">
                Porozmawiajmy o Twoim projekcie
              </h2>
              <p className="text-sm text-white/70 sm:text-base">
                Wypełnij formularz, a odezwę się maksymalnie w ciągu 24 godzin z propozycją kolejnych kroków.
              </p>
            </div>

            <div className="space-y-4 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <PhoneCall className="h-5 w-5 text-[var(--color-accent)]" />
                <a href="tel:+48575464064" className="transition hover:text-white">+48 575 464 064</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[var(--color-accent)]" />
                <a href="mailto:Contact@KarlaFreelancing.pl" className="transition hover:text-white">
                  Contact@KarlaFreelancing.pl
                </a>
              </div>
              <p className="text-xs text-white/50">
                Twoje dane są bezpieczne – użyjemy ich wyłącznie do kontaktu związanego z zapytaniem.
              </p>
            </div>
          </div>

          <form
            action="/api/send"
            method="post"
            className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label htmlFor="name" className="space-y-2 sm:col-span-1">
                <span className="text-sm font-medium text-white">Imię i nazwisko</span>
                <Input
                  id="name"
                  name="name"
                  placeholder="Jak się nazywasz?"
                  required
                  className="bg-white/5 text-white placeholder:text-white/50"
                />
              </label>
              <label htmlFor="email" className="space-y-2 sm:col-span-1">
                <span className="text-sm font-medium text-white">Adres e-mail</span>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Napisz swój e-mail"
                  required
                  className="bg-white/5 text-white placeholder:text-white/50"
                />
              </label>
              <label htmlFor="company" className="space-y-2 sm:col-span-2">
                <span className="text-sm font-medium text-white">Firma (opcjonalnie)</span>
                <Input
                  id="company"
                  name="company"
                  placeholder="Nazwa firmy lub projektu"
                  className="bg-white/5 text-white placeholder:text-white/50"
                />
              </label>
            </div>

            <label htmlFor="message" className="space-y-2">
              <span className="flex items-center gap-2 text-sm font-medium text-white">
                <MessageSquare className="h-4 w-4" />
                Opisz swoje potrzeby
              </span>
              <Textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Opisz krótko projekt, zakres prac lub oczekiwany termin."
                required
                className="bg-white/5 text-white placeholder:text-white/50"
              />
            </label>

            <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-white/60">
                Klikając wyślij, potwierdzasz zgodę na kontakt i przetwarzanie danych zgodnie z polityką prywatności.
              </p>
              <Button variant="light" size="lg" type="submit" className="whitespace-nowrap">
                Wyślij wiadomość
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm