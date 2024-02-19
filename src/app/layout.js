import { Montserrat } from "next/font/google";
import "./globals.css";
import ContainerSection from "@/components/ContainerSection";
import { Footer } from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "mgomezdev's Protfolio",
  description: "Mati Gomez's CV and projects",

  openGraph: {
    title: "mgomezdev's Portfolio",
    description: "Mati Gomez's CV and projects",
    url: "https://magomezdev-portfolio.vercel.app/",
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
        <main className="relative overflow-hidden custom-pattern-2">
          {children}
          <ContainerSection>
            <Footer />
          </ContainerSection>
        </main>
      </body>
    </html>
  );
}
