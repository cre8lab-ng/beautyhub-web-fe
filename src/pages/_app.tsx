import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SpeedInsights } from "@vercel/speed-insights/next"
import NewsletterModal from "@/components/NewsletterModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <NewsletterModal />
      <SpeedInsights />
    </>
  );
}
