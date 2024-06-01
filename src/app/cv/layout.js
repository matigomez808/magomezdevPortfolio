import { Montserrat } from "next/font/google";
import "../(home)/layout";
import { Analytics } from "@vercel/analytics/react"
import { Footer } from "@/components/UI/Footer";
import Navigator from "@/components/UI/Navigator";
import { Background } from "@/components/UI/Background";


const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "mgomezdev's CV",
  description: "Mati Gomez's CV and link to pdf version",
  verification: {google: "poYktLqxzTcMOZ-7W4EV9BeEjPvdH12TUkAtBg5qV5Y"},
  openGraph: {
    title: "mgomezdev's CV",
    description: "Mati Gomez's CV",
    url: "https://magomezdev.tech/",
    siteName: "mgomezdev's Portfolio",
    author: "Matias Gomez",
    publishedTime: "2024-02-09T11:42:10.367Z",
    images: [
      {
        url: "https://magomezdev-portfolio.vercel.app/preview2.png",
        width: 619,
        height: 417,
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Background>
        <main className="relative overflow-hidden custom-pattern-3">
          <Navigator />
          {children}
          <Footer />
          <Analytics />
        </main>
        </Background>
      </body>
    </html>
  );
}
