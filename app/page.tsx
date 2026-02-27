import Image from 'next/image'
import { CheckCircle2, Factory, Phone, ShieldCheck, Wrench } from 'lucide-react'
import { HeroSlider } from '@/components/hero-slider'
import { InquiryForm } from '@/components/inquiry-form'

const windows = [
  {
    name: 'Solidus PRO ALPHALINE 90 MD',
    desc: '6-komorový profil, energetická trieda A, trojité tesnenie a výborná statika.',
    specs: ['Profil 90 mm', 'Trieda RAL A', 'Dvojsklo / trojsklo'],
  },
  {
    name: 'Solidus PRO SOFTLINE 70 MD',
    desc: 'Klasický dizajn, 5-komorový profil a veľmi dobrý pomer ceny a výkonu.',
    specs: ['Profil 70 mm', 'Energetická trieda B', 'Odolné oceľové vystuženie'],
  },
]

const doors = [
  {
    name: 'Solidus PRO SOFTLINE 70',
    desc: 'Vchodové dvere s vynikajúcou stabilitou, tepelne deleným prahom a kvalitným tesnením.',
    specs: ['Dvojité tesnenie', 'Hliníková okapnica', 'Výplne AGC'],
  },
]

const extras = ['Parapety', 'Žalúzie', 'Siete proti hmyzu']

export default function Home() {
  return (
    <main>
      <header className="fixed left-0 top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
          <a href="#domov" className="flex items-center gap-3">
            <Image src="/images/solidus-pro-logo.svg" alt="Solidus PRO logo" width={180} height={52} priority />
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-secondary lg:flex">
            <a href="#onas">O nás</a>
            <a href="#katalog">Produkty</a>
            <a href="#technologia">Technológia</a>
            <a href="#sluzby">Služby</a>
            <a href="#kontakt">Kontakt</a>
            <a href="#dopyt" className="rounded-lg bg-primary px-4 py-2 text-white">
              Dopyt
            </a>
          </nav>
        </div>
      </header>

      <HeroSlider />

      <section id="onas" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h2 className="section-title">O spoločnosti Solidus PRO</h2>
            <p className="mt-5 text-lg leading-relaxed text-secondary/80">
              Spoločnosť Solidus PRO s. r. o. vyrába plastové a hliníkové okná a dvere od roku 2000.
              Našou filozofiou je ponúknuť vysokú kvalitu za primeranú cenu so servisom na najvyššej
              úrovni.
            </p>
          </div>
          <div className="card grid gap-4">
            {[
              'Vysoká tepelná izolácia a protihluková ochrana',
              'Odolnosť voči počasiu a vlámaniu',
              'Minimálne náklady na údržbu',
              '5-ročná záruka na montované prvky',
            ].map((point) => (
              <p key={point} className="flex items-center gap-2 text-secondary">
                <CheckCircle2 className="h-5 w-5 text-primary" /> {point}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="katalog" className="border-y border-border bg-muted/60 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:px-10">
          <div>
            <h2 className="section-title">Katalóg produktov</h2>
            <p className="mt-4 leading-relaxed text-secondary/80">
              Prehľad produktov je navrhnutý v e-shop štýle. Výber produktu odošlete cez dopytový
              formulár a my vám pripravíme nezáväznú cenovú ponuku.
            </p>
          </div>

          <div className="grid gap-4">
            <h3 className="text-2xl font-semibold text-secondary">Okná</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {windows.map((item) => (
                <article key={item.name} className="card">
                  <h4 className="text-xl font-semibold text-secondary">{item.name}</h4>
                  <p className="mt-3 text-secondary/80">{item.desc}</p>
                  <ul className="mt-4 grid gap-2 text-sm text-secondary/80">
                    {item.specs.map((spec) => (
                      <li key={spec}>• {spec}</li>
                    ))}
                  </ul>
                  <a href="#dopyt" className="mt-5 inline-block rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white">
                    Mám záujem
                  </a>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <h3 className="text-2xl font-semibold text-secondary">Dvere</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {doors.map((item) => (
                <article key={item.name} className="card md:col-span-1">
                  <h4 className="text-xl font-semibold text-secondary">{item.name}</h4>
                  <p className="mt-3 text-secondary/80">{item.desc}</p>
                  <ul className="mt-4 grid gap-2 text-sm text-secondary/80">
                    {item.specs.map((spec) => (
                      <li key={spec}>• {spec}</li>
                    ))}
                  </ul>
                  <a href="#dopyt" className="mt-5 inline-block rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white">
                    Mám záujem
                  </a>
                </article>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="text-2xl font-semibold text-secondary">Doplnky</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {extras.map((extra) => (
                <span key={extra} className="rounded-full border border-border bg-background px-4 py-2 text-sm text-secondary">
                  {extra}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="technologia" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <h2 className="section-title">Technológia výroby</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <article className="card">
            <Factory className="h-8 w-8 text-primary" />
            <h3 className="mt-4 text-xl font-semibold text-secondary">Presná výroba</h3>
            <p className="mt-3 text-secondary/80">CNC nárez, CNC zváranie a kontrolované začisťovanie rohov pre stabilitu a dlhú životnosť.</p>
          </article>
          <article className="card">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <h3 className="mt-4 text-xl font-semibold text-secondary">Kovanie MACO</h3>
            <p className="mt-3 text-secondary/80">Celoobvodové kovanie MACO Multi Matic a voliteľné MACO Invisible pre vyššiu bezpečnosť aj dizajn.</p>
          </article>
          <article className="card">
            <Wrench className="h-8 w-8 text-primary" />
            <h3 className="mt-4 text-xl font-semibold text-secondary">Kontrola kvality</h3>
            <p className="mt-3 text-secondary/80">Každý výrobok prechádza výstupnou kontrolou a finálnym nastavením pred expedíciou.</p>
          </article>
        </div>
      </section>

      <section id="sluzby" className="border-y border-border bg-muted/60 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="section-title">Služby</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="card">
              <h3 className="text-xl font-semibold text-secondary">Komplexný servis</h3>
              <ul className="mt-4 grid gap-2 text-secondary/80">
                <li>• Zameranie a konzultácia</li>
                <li>• Vypracovanie cenovej ponuky</li>
                <li>• Výroba na mieru</li>
                <li>• Profesionálna montáž</li>
                <li>• Záručný aj pozáručný servis</li>
              </ul>
            </article>
            <article className="card">
              <h3 className="text-xl font-semibold text-secondary">Dobré vedieť</h3>
              <p className="mt-4 text-secondary/80">
                Odporúčame pravidelné intenzívne vetranie 5–10 minút viackrát denne a každoročné
                premazanie kovania pre optimálnu funkčnosť okien.
              </p>
            </article>
          </div>
        </div>
      </section>

      <InquiryForm />

      <section id="kontakt" className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="card grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="section-title">Kontakt</h2>
            <p className="mt-4 leading-relaxed text-secondary/80">
              Solidus PRO s. r. o.<br />
              Nábrežná 1212/8 024 01 Kysucké Nové Mesto
            </p>
            <p className="mt-4 leading-relaxed text-secondary/80">
              Staškov 165, 023 53 Staškov, Slovensko<br />
              IČO: 36522821 • IČ DPH: SK2021172026
            </p>
          </div>
          <div className="grid gap-3 text-secondary">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +421 41 / 524 10 54</p>
            <p>Email: madam@madam.sk</p>
            <p>Pondelok - Piatok: 8:00 - 17:00</p>
          </div>
        </div>
      </section>
    </main>
  )
}
