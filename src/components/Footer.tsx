'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Activity } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest py-16 px-6 md:px-10 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-16 h-16">
              <Image src="/assets/images/logo.png" alt="SKYON Logo" fill className="object-contain drop-shadow-[0_0_10px_rgba(121,248,179,0.2)]" />
            </div>
            <div className="text-xl font-bold text-white font-headline uppercase tracking-tight">
              SKYON <br/>
           <span  className="!text-[10px] text-on-surface-variant leading-relaxed">Innovations </span>

            </div>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Setting the global gold standard for medical furniture engineering. Trusted by luminaries in 40+ countries.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 font-headline">Navigation</h4>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/systems" className="hover:text-primary transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-primary transition-colors">
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 font-headline">Support</h4>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Warranty
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Training
              </a>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 font-headline">Newsletter</h4>
          <p className="text-on-surface-variant text-sm mb-4">Stay updated with surgical engineering advancements.</p>
          <div className="flex">
            <input
              className="bg-surface-container border border-outline-variant/30 rounded-l-lg p-3 text-white text-xs w-full focus:outline-none focus:border-primary"
              placeholder="Your email"
              type="email"
              suppressHydrationWarning
            />
            <button className="bg-primary text-on-primary px-4 rounded-r-lg hover:bg-primary-container transition-all" suppressHydrationWarning>
              <Activity className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-outline-variant/10 text-center">
        <p className="text-xs text-on-surface-variant uppercase tracking-widest">
          © 2026 SKYON Innovations. Precision Engineering for Life.
        </p>
      </div>
    </footer>
  );
}
