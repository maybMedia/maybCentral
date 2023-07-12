import './globals.css'
import { Merriweather } from 'next/font/google'

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito",})

export const metadata = {
  title: 'maybCentral',
  description: 'Your place for all things mayb!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`mx-4 md:mx-48 xl:mx-96 ${merriweather.variable}`}>{children}</body>
    </html>
  )
}
