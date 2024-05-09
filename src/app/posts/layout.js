import { Montserrat } from "next/font/google";
import "../(home)/layout";
import { Analytics } from "@vercel/analytics/react"
import { Footer } from "@/components/UI/Footer";
import Navigator from "@/components/UI/Navigator";


const montserrat = Montserrat({ subsets: ["latin"] });



export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={montserrat.className}>
        
        <main className="relative overflow-hidden custom-pattern-3">
          <Navigator />
          {children}
          <Footer />
          <Analytics />
        </main>
        
      </body>
    </html>
  );
}
