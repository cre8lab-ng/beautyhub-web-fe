import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Countdown from "../components/Countdown";

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
      <Head>
        <title>Beauty Hub - Coming Soon</title>
        <meta name="description" content="Beauty Hub is coming soon. Stay tuned!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${geistSans.className} ${geistMono.className} relative min-h-screen flex flex-col items-center justify-center text-black p-4 overflow-hidden`}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
            alt="Beauty Background"
            fill
            className="object-cover"
            priority
          />
          {/* Light overlay to ensure text readability while keeping the color palette */}
          <div className="absolute inset-0 bg-white/90"></div>
        </div>

        <main className="relative z-10 flex flex-col items-center text-center space-y-8 md:space-y-12 max-w-4xl w-full">
          
          {/* Header / Logo Section */}
          <div className="relative w-64 h-24 md:w-80 md:h-32 mx-auto">
            <Image
              src="https://res.cloudinary.com/debcfaccq/image/upload/v1766008840/Asset_12BH_bwsukr.png"
              alt="Beauty Hub Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Coming Soon Text */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-light uppercase tracking-[0.1em] text-black/80">
              We have exciting news launching
            </h2>
            <p className="text-black/60 max-w-md mx-auto text-lg">
              Get ready for the ultimate beauty experience.
            </p>
          </div>

          {/* Countdown Component */}
          <div className="w-full">
            <Countdown />
          </div>

          {/* Footer / Contact (Optional Minimalist Footer) */}
          <footer className="pt-12 text-sm text-black/40">
            &copy; {new Date().getFullYear()} Beauty Hub. All rights reserved.
          </footer>
        </main>
      </div>
    </>
  );
}
