import '../src/app/globals.css'
import Script from 'next/script'

export const metadata = {
  title: "Umbral",
  description: "Un proyecto de Nicolás Márquez",
};

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        {children}
      </html>
    )
  }