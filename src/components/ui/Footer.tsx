import React from 'react'
import Image from 'next/image'

function Footer() {
  const email = 'Contact@KarlaFreelancing.pl'

  return (
    <footer className="bg-[var(--color-secondary)] border-t-neutral-600 border-t-1 text-white">
      <div className="mx-auto flex w-full flex-wrap gap-6 max-w-screen-2xl flex-col px-5 py-12 md:flex-row md:items-start md:justify-between lg:px-10">
        <div className="flex flex-1  flex-col gap-6 sm:max-w-md">
          <div>
            <h4 className="text-xl font-semibold md:text-2xl">Masz pytanie?</h4>
            <a
              href={`mailto:${email}`}
              className="text-sm text-[var(--color-accent-dark)] transition hover:text-[var(--color-accent-light)] hover:underline md:text-base"
            >
              {email}
            </a>
          </div>

          <div>
            <h4 className="text-xl font-semibold md:text-2xl">Chcesz omówić szczegóły?</h4>
            <a
              href={`mailto:${email}`}
              className="text-sm text-[var(--color-accent-dark)] transition hover:text-[var(--color-accent-light)] hover:underline md:text-base"
            >
              {email}
            </a>
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-3 sm:max-w-sm md:items-start">
          <h4 className="text-xl font-semibold md:text-2xl">Przejdź do:</h4>
          <a
            href={`mailto:${email}`}
            className="text-sm text-[var(--color-accent-dark)] transition hover:text-[var(--color-accent-light)] hover:underline md:text-base"
          >
            {email}
          </a>
        </nav>

        <div className="flex flex-1 flex-col gap-6 sm:max-w-md md:items-start">
          <div>
            <h4 className="text-xl font-semibold md:text-2xl">Polityka:</h4>
            <a
              href={`mailto:${email}`}
              className="text-sm text-[var(--color-accent-dark)] transition hover:text-[var(--color-accent-light)] hover:underline md:text-base"
            >
              {email}
            </a>
          </div>

          <div className=''>
            <h4 className="text-xl font-semibold md:text-2xl">Chcesz omówić szczegóły?</h4>
            <a
              href={`mailto:${email}`}
              className="text-sm text-[var(--color-accent-dark)] transition hover:text-[var(--color-accent-light)] hover:underline md:text-base"
            >
              {email}
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
          Realizujemy projekty dopasowane do Twoich potrzeb.
        </p>
      </div>
    </footer>
  )
}

export default Footer
