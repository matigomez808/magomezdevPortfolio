import { Montserrat } from "next/font/google";

import { Analytics } from "@vercel/analytics/react"
import { Footer } from "@/components/UI/Footer";
import Navigator from "@/components/UI/Navigator";


const montserrat = Montserrat({ subsets: ["latin"] });



export default function BiblioLayout({ children }) {

  return (
    <html lang="en">
      <body className={montserrat.className}>
        
        <main className="relative overflowX-hidden bg-cover bg-no-repeat bg-center" style={{backgroundImage: "url('/assets/bgTorre.jpg')", backgroundAttachment: 'fixed'}}>
          <Navigator />
          {children}
          <Footer />
          <Analytics />
        </main>
        
      </body>
    </html>
  );
}
