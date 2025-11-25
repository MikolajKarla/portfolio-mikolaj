import React from 'react'

function WebpagesPage() {
  return (
    <section className="flex min-h-[70vh] w-full items-center justify-center bg-[var(--color-secondary)] px-6 py-24 text-center text-white">
      <div className="space-y-6">
        <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
          Wkrótce
        </span>
        <h1 className="text-4xl font-semibold grotesk sm:text-5xl md:text-6xl">Nowe projekty webowe są w przygotowaniu</h1>
        <p className="mx-auto max-w-xl text-base text-white/70 sm:text-lg">
          Kończę ostatnie szlify, aby pokazać najnowsze realizacje stron i aplikacji internetowych. Wpadnij niedługo albo napisz, jeśli chcesz zajrzeć za kulisy już dziś.
        </p>
        <div className="flex flex-col items-center gap-3 text-sm text-white/60">
          <span>Masz pytanie? Napisz na <a href="mailto:Contact@KarlaFreelancing.pl" className="text-white hover:underline">Contact@KarlaFreelancing.pl</a></span>
        </div>
      </div>
    </section>
  )
}

export default WebpagesPage