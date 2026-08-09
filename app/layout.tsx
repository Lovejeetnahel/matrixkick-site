import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://matrixkick.com"),
  title: "Matrix Kick | AI Automation & Instant Lead Response for Service Businesses",
  description: "Matrix Kick builds AI automation systems: instant 24/7 AI lead replies, n8n workflow automation, AI chatbots, dashboards and SaaS MVPs. Based in Hamilton, Ontario. Serving clients worldwide.",
  openGraph: { title: "Matrix Kick - AI Automation Services", description: "Your leads answered in seconds. 24/7. Automatically.", url: "https://matrixkick.com", siteName: "Matrix Kick", type: "website" }
};

const ld = { "@context": "https://schema.org", "@type": "ProfessionalService", name: "Matrix Kick", url: "https://matrixkick.com", email: "babalyrics@gmail.com", telephone: "+1-437-984-3592", address: { "@type": "PostalAddress", addressLocality: "Hamilton", addressRegion: "ON", addressCountry: "CA" }, description: "AI automation, instant AI lead response, chatbots, dashboards and SaaS development for service businesses.", founder: "Lovejeet Singh", priceRange: "$$" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      </body>
    </html>
  );
}
