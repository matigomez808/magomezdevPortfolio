import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export const metadata = {
  title: "mgomezdev's Protfolio",
  description: "Mati Gomez's CV and projects",
  openGraph: {
    title: "mgomezdev's Portfolio",
    description: "Mati Gomez's CV and projects",
    url: 'https://magomezdev-portfolio.vercel.app/',
    siteName: "mgomezdev's Portfolio",
    images: [
      {
        url: 'https://magomezdev-portfolio.vercel.app/preview.png', 
        width: 1107,
        height: 417,
      }
    ],
    locale: 'es_AR',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="relative overflow-hidden custom-pattern-2">
          {children}
        </main>
      </body>
    </html>
  );
}
