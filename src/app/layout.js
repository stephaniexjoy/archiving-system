import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Archiving System',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>{inter.styles}</style>
      </head>
      <body className={`bg-[#5B0505] ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
