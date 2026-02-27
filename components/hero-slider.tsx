'use client'

import { useEffect, useState } from 'react'

const slides = [
  {
    title: 'So Solidus PRO ušetríte',
    subtitle:
      'Špičkové plastové a hliníkové okná a dvere pre moderné bývanie s dôrazom na energetickú úsporu.',
  },
  {
    title: 'Keď okná, tak Solidus PRO',
    subtitle:
      'Výroba na mieru, certifikovaná kvalita a profesionálny servis od zamerania až po montáž.',
  },
  {
    title: '5 ročná záruka na nami vyrobené a montované prvky',
    subtitle:
      'Istota, na ktorú sa môžete spoľahnúť – precízne spracovanie a dlhodobá spokojnosť zákazníkov.',
  },
]

export function HeroSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="domov" className="relative h-screen overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#ffecd1,transparent_50%),radial-gradient(circle_at_80%_80%,#ffd8b0,transparent_40%),linear-gradient(135deg,#fef8f2,#f8f7f5)]" />
      {slides.map((slide, index) => (
        <article
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-700 ${
            active === index ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={active !== index}
        >
          <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-10">
            <p className="mb-4 inline-flex w-fit rounded-full border border-border bg-muted px-4 py-2 text-sm text-secondary">
              Výrobca plastových a hliníkových okien a dverí
            </p>
            <h1 className="max-w-3xl font-serif text-4xl leading-tight text-secondary md:text-6xl text-balance">
              {slide.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary/90">{slide.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#katalog" className="rounded-xl bg-primary px-6 py-3 font-semibold text-white">
                Prezrieť katalóg
              </a>
              <a href="#dopyt" className="rounded-xl border border-secondary px-6 py-3 font-semibold text-secondary">
                Vytvoriť dopyt
              </a>
            </div>
          </div>
        </article>
      ))}

      <div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            aria-label={`Prejsť na slide ${index + 1}`}
            onClick={() => setActive(index)}
            className={`h-2.5 w-8 rounded-full transition ${
              active === index ? 'bg-primary' : 'bg-secondary/20'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
