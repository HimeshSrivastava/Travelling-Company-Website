import Link from "next/link";
import { Facebook, X, Instagram, Youtube, Music } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top Social Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">
        <div className="flex justify-center gap-6 text-xl mb-6">
          <Facebook />
          <X />
          <Music /> {/* Pinterest alternative */}
          <Instagram />
          <Youtube />
          <Music /> {/* TikTok alternative */}
        </div>

        {/* Rating */}
        <div className="flex justify-center items-center gap-3 text-sm mb-10">
          <div className="flex gap-1 text-green-500">
            ★ ★ ★ ★ ★
          </div>
          <span>4.4 rating | 297,657 reviews</span>
          <span className="text-green-500 font-semibold">★ Trustpilot</span>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-17 text-center text-sm">
          <div className="space-y-3">
          <h1 className="text-2xl">Chetan Trip Solution</h1>
           <div className="text-left">
            <p>Welcome to Chetan Tour & Travels, we believe in turning your travel dreams into reality. With a passion for exploration and a commitment to exceptional service, we offer a wide range of travel services tailored to meet your needs, We have continuously improved with our customer experience by providing them safe, secure & pocket eco-friendly rides.</p>
           </div>
          </div>
          <div className="space-y-3">
          <h1 className="text-2xl">Our Services</h1>
            <p>Airport & Railway</p>
            <p>Out Of Station</p>
            <p>Corporate Clients</p>
            <p>Local Delhi/NCR</p>
          </div>

          <div className="space-y-3">
            <h1 className="text-2xl">Our Packages</h1>
            <p>Kashmir Packages</p>
            <p>Himachal Packages</p>
            <p>Nainital Packages</p>
            <p>Rajasthan Packages</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        {/* App Buttons */}
        <div className="flex gap-4">
          <img
            src="/images/google-play.png"
            alt="Google Play"
            className="h-10"
          />
          <img
            src="/images/app-store.png"
            alt="App Store"
            className="h-10"
          />
        </div>

        {/* Copyright */}
        <div className="flex flex-wrap justify-center gap-6 text-white/80">
          <span>© 1997–2026 YourCompany, Inc.</span>
          <Link href="#">Terms & Conditions</Link>
          <Link href="#">How it works</Link>
        </div>
      </div>
    </footer>
  );
}
