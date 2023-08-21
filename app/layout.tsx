import './globals.css'

import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'


const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shop With Us',
  description: 'Shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
