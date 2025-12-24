import { Geist, Geist_Mono } from "next/font/google";
import WebPageTitle from "@/components/WebPageTitle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <WebPageTitle title="Beauty Hub - Where Beauty Meets Trust" />

      <div className={`${geistSans.className} ${geistMono.className}`}>New</div>
    </>
  );
}
