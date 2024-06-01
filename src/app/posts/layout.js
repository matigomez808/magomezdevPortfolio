import { Montserrat } from "next/font/google";
import "../(home)/layout";
import { Analytics } from "@vercel/analytics/react"
import { Footer } from "@/components/UI/Footer";
import Navigator from "@/components/UI/Navigator";
import { Background } from "@/components/UI/Background";


const montserrat = Montserrat({ subsets: ["latin"] });



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
