import { Inter } from "next/font/google"
import "./globals.css"
import React, { ReactNode } from 'react'; // Import React and ReactNode


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sleep Quality Management Platform - CS-40",
  description: "A comprehensive sleep management solution for university students",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

