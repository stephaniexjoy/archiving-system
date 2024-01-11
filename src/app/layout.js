import { Inter } from 'next/font/google'
import './globals.css'
import { EdgeStoreProvider } from '@/app/lib/edgestore'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Archiving System',
  description: '',
  icon: '/favicon.ico'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>{inter.styles}</style>
      </head>
      <body className={`bg-[#5B0505] ${inter.className}`}>
        <EdgeStoreProvider>{children}</EdgeStoreProvider>
      </body>
    </html>
  )
}
