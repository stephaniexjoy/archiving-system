import { Inter } from 'next/font/google'
import './globals.css'
import { EdgeStoreProvider } from '@/app/lib/edgestore'
import { NextAuthProvider } from './providers';
import { Toaster } from "@/components/ui/toaster";


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
      <body className={`bg-[#FFFFFF] ${inter.className}`}>
        <NextAuthProvider>
          <EdgeStoreProvider>
            {children}
            <Toaster />
          </EdgeStoreProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
