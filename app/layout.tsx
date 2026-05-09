import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '../components/theme-provider'

export const metadata: Metadata = {
  title: 'Aayush Dev - IT Student & Frontend Developer',
  description: 'Modern personal portfolio website with glassmorphism design. IT Student and Frontend Developer based in 2026.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f0f1e" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;900&family=Poppins:wght@400;600;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
