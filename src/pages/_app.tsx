import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NewsletterModal from "@/components/NewsletterModal";
import { Source_Sans_3 } from "next/font/google";

const sourceSans3 = Source_Sans_3({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={sourceSans3.className}>
      <Component {...pageProps} />
      <NewsletterModal />
      <SpeedInsights />
    </div>
  );
}
