'use client'

import { FormEvent, useState } from 'react'

export function InquiryForm() {
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="dopyt" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="section-title">Nezáväzný dopyt</h2>
          <p className="mt-4 text-lg leading-relaxed text-secondary/80">
            Vyplňte formulár a pripravíme pre vás cenovú ponuku na mieru. Platba online sa
            nerealizuje – následná komunikácia prebieha emailom.
          </p>
        </div>
        <form onSubmit={onSubmit} className="card grid gap-4" aria-label="Formulár dopytu">
          <input required placeholder="Meno a priezvisko" className="rounded-xl border border-border bg-background p-3" />
          <input required type="email" placeholder="Email" className="rounded-xl border border-border bg-background p-3" />
          <input required placeholder="Telefón" className="rounded-xl border border-border bg-background p-3" />
          <select className="rounded-xl border border-border bg-background p-3" defaultValue="">
            <option value="" disabled>
              Vyberte produkt
            </option>
            <option>Okná</option>
            <option>Dvere</option>
            <option>Doplnky</option>
          </select>
          <input placeholder="Rozmery (napr. 1200 x 1500 mm)" className="rounded-xl border border-border bg-background p-3" />
          <textarea
            placeholder="Poznámka"
            className="min-h-28 rounded-xl border border-border bg-background p-3"
          />
          <button type="submit" className="rounded-xl bg-primary px-5 py-3 font-semibold text-white">
            Odoslať dopyt
          </button>
          {sent ? (
            <p className="rounded-xl border border-primary/30 bg-primary/10 p-3 text-sm text-secondary">
              Ďakujeme! Váš dopyt bol odoslaný. Čoskoro vás budeme kontaktovať emailom.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
