import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Countdown from "../components/Countdown";
import WebPageTitle from "@/components/WebPageTitle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Social Icons
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.53c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
      clipRule="evenodd"
    />
  </svg>
);

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 01-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 013.183-4.51v-3.5a6.329 6.329 0 00-5.394 10.692 6.33 6.33 0 0010.857-4.424V8.687a8.182 8.182 0 004.773 1.526V6.79a4.831 4.831 0 01-1.003-.104z" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Home() {
  return (
    <>
      <WebPageTitle title="Beauty Hub | Coming Soon" />

      <div
        className={`${geistSans.className} ${geistMono.className} relative min-h-screen flex flex-col items-center justify-center text-black p-4 overflow-hidden`}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/debcfaccq/image/upload/v1766438396/Launch_Banner_-_Web_q2zcr0.webp"
            alt="Beauty Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <main className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-4xl w-full">
          {/* Content Card with Background Overlay */}
          <div className="bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl w-full space-y-8 md:space-y-10">
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
                We have exciting news
              </h2>
              <p className="text-black/60 max-w-md mx-auto text-lg">
                Get ready for the ultimate beauty experience.
              </p>
            </div>

            {/* Countdown Component */}
            <div className="w-full">
              <Countdown />
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center gap-6 text-black/60">
              <a
                href="#"
                className="hover:text-[#E1306C] transition-colors transform hover:scale-110"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="hover:text-black transition-colors transform hover:scale-110"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="hover:text-[#1877F2] transition-colors transform hover:scale-110"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-8 h-8" />
              </a>
            </div>

            {/* Footer / Contact (Optional Minimalist Footer) */}
            <footer className="pt-4 text-sm text-black/60 font-medium">
              &copy; {new Date().getFullYear()} Beauty Hub. All rights reserved.
            </footer>
          </div>
        </main>
      </div>
    </>
  );
}
