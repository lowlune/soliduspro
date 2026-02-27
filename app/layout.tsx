import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Solidus PRO | Plastové a hliníkové okná a dvere',
  description:
    'Solidus PRO s. r. o. – výrobca plastových a hliníkových okien a dverí. Katalóg produktov, služby montáže a nezáväzný dopyt.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sk">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
