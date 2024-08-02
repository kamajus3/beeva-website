import { GeistSans } from 'geist/font/sans'

import './globals.css'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Beeva',
  description: 'Oi!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={GeistSans.className}>
      <body>{children}</body>
    </html>
  )
}
