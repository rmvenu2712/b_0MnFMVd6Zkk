'use client';

import FadeInSection from "@/components/FadeInSection";

export default function ContactContent() {
  return (
    <main className="pt-32 pb-24 technical-grid min-h-screen">
      <div className="max-w-7xl mx-auto px-8">
        {/* Hero Header */}
        <FadeInSection direction="up">
          <div className="mb-20 text-center md:text-left">
            <span className="font-label text-primary text-xs tracking-[0.3em] uppercase mb-4 block">Precision Partnership</span>
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-background max-w-4xl leading-tight tracking-tight">
              Let&apos;s <span className="text-primary italic">Equip</span> Your Facility
            </h1>
            <p className="mt-6 text-on-surface-variant font-light text-xl max-w-2xl leading-relaxed">
              Connecting leading healthcare providers with world-class medical engineering. Our technical advisors are ready to assist with your next precision laboratory or surgical suite integration.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Form Card (Glassmorphism) */}
          <div className="lg:col-span-7">
            <FadeInSection>
              <div className="glass-panel p-8 md:p-12 rounded-xl glow-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-label text-xs uppercase tracking-widest text-outline">Full Name</label>
                      <input className="w-full bg-surface-container-lowest border-none rounded-lg p-4 text-on-surface focus:ring-1 focus:ring-primary focus:bg-surface-bright transition-all placeholder:text-outline/40" placeholder="Dr. Julian Vane" type="text"/>
                    </div>
                    <div className="space-y-2">
                      <label className="font-label text-xs uppercase tracking-widest text-outline">Professional Email</label>
                      <input className="w-full bg-surface-container-lowest border-none rounded-lg p-4 text-on-surface focus:ring-1 focus:ring-primary focus:bg-surface-bright transition-all placeholder:text-outline/40" placeholder="vane.j@medical.org" type="email"/>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-label text-xs uppercase tracking-widest text-outline">Phone Number</label>
                      <input className="w-full bg-surface-container-lowest border-none rounded-lg p-4 text-on-surface focus:ring-1 focus:ring-primary focus:bg-surface-bright transition-all placeholder:text-outline/40" placeholder="+1 (555) 000-0000" type="tel"/>
                    </div>
                    <div className="space-y-2">
                      <label className="font-label text-xs uppercase tracking-widest text-outline">Facility Name</label>
                      <input className="w-full bg-surface-container-lowest border-none rounded-lg p-4 text-on-surface focus:ring-1 focus:ring-primary focus:bg-surface-bright transition-all placeholder:text-outline/40" placeholder="Central Surgical Center" type="text"/>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-xs uppercase tracking-widest text-outline">Requirement Type</label>
                    <select className="w-full bg-surface-container-lowest border-none rounded-lg p-4 text-on-surface focus:ring-1 focus:ring-primary focus:bg-surface-bright transition-all appearance-none cursor-pointer">
                      <option>Surgical Equipment Integration</option>
                      <option>Laboratory Diagnostic Systems</option>
                      <option>High-Precision Maintenance Contract</option>
                      <option>General Consultation</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-xs uppercase tracking-widest text-outline">Project Overview</label>
                    <textarea className="w-full bg-surface-container-lowest border-none rounded-lg p-4 text-on-surface focus:ring-1 focus:ring-primary focus:bg-surface-bright transition-all placeholder:text-outline/40" placeholder="Detail your facility requirements here..." rows={4}></textarea>
                  </div>
                  <button className="w-full py-5 rounded-lg bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-headline font-bold text-lg uppercase tracking-widest shadow-[0_10px_30px_rgba(121,248,179,0.2)] hover:shadow-[0_10px_40px_rgba(121,248,179,0.4)] hover:scale-[1.01] active:scale-95 transition-all" type="submit">
                    Send Enquiry
                  </button>
                </form>
              </div>
            </FadeInSection>
          </div>

          {/* Info Sidebar (Bento Style) */}
          <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {/* Phone */}
            <FadeInSection>
              <div className="p-8 rounded-xl bg-surface-container-low transition-colors hover:bg-surface-bright group h-full">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">&#xe0b0;</span>
                  </div>
                  <div>
                    <h3 className="font-label text-xs uppercase tracking-[0.2em] text-outline mb-2">Technical Support</h3>
                    <p className="font-headline text-2xl font-medium text-on-background">+1 (800) LUM-PRO-0</p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Email */}
            <FadeInSection>
              <div className="p-8 rounded-xl bg-surface-container-low transition-colors hover:bg-surface-bright group h-full">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">&#xe0e6;</span>
                  </div>
                  <div>
                    <h3 className="font-label text-xs uppercase tracking-[0.2em] text-outline mb-2">Corporate Inquiries</h3>
                    <p className="font-headline text-2xl font-medium text-on-background">logistics@skyon.eng</p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Location */}
            <FadeInSection>
              <div className="p-8 rounded-xl bg-surface-container-low transition-colors hover:bg-surface-bright group h-full">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">&#xe0c8;</span>
                  </div>
                  <div>
                    <h3 className="font-label text-xs uppercase tracking-[0.2em] text-outline mb-2">Global Headquarters</h3>
                    <p className="font-headline text-2xl font-medium text-on-background">Silicon District, 402 Tech Park</p>
                    <p className="text-on-surface-variant mt-1">Palo Alto, CA 94304</p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Hours */}
            <FadeInSection>
              <div className="p-8 rounded-xl bg-surface-container-low transition-colors hover:bg-surface-bright group h-full">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">&#xe8b5;</span>
                  </div>
                  <div className="w-full">
                    <h3 className="font-label text-xs uppercase tracking-[0.2em] text-outline mb-2">Operation Hours</h3>
                    <div className="space-y-1">
                      <p className="font-headline text-lg sm:text-xl text-on-background flex justify-between gap-4 sm:gap-8">
                        <span className="text-on-surface-variant font-light">Mon — Fri:</span>
                        <span>08:00 - 18:00</span>
                      </p>
                      <p className="font-headline text-lg sm:text-xl text-on-background flex justify-between gap-4 sm:gap-8">
                        <span className="text-on-surface-variant font-light">Saturday:</span>
                        <span>10:00 - 14:00</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>

      {/* Bottom CTA Strip */}
      <FadeInSection>
        <div className="bg-surface-container-high py-12 px-8 border-t border-outline-variant/15 mt-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                <img className="w-12 h-12 rounded-full border-2 border-surface-container-high object-cover" alt="Support agent 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR4be2x4Zo7EpWppTiogMxOQ5f7quyShC2aax_ILRAL5bB1gRsuWTFsUI9TOq7UwXwHBRattnG02qR6Hqu2H-Xw7VBsZRTMtwI6Po5NpZmZat7ERUEzj4kyNe7rATq2-YY80tAZty8aA2O8NMwPuCLgnRXMZCp-ADbwO8IqLVLOdS5gbl0zYCufzgRkEaxsb00Ob2pDBMx-XuNza4QTW6zGNr6kuZzG3vKBgURnYcXyxy0NF4ku1uNpFo_-eDvWBbVkiA22vzam-44"/>
                <img className="w-12 h-12 rounded-full border-2 border-surface-container-high object-cover" alt="Support agent 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA-HkOiHNlRMcOMKyGLLfkFb9OgB10G_dSMYpdc63goAhYC7ct7cyIj1eNejItkhYKoj2HJclCIDuqPXMjEH0eMXcYySnncfY_zAGZJQISuWf2N5_OGu5X_Qx549Et0-W3V9KJ4RJrp_POkiyoCjEuTnIuoV-CvlEesgtGyZh4XDHEj70Zv02B8gFrjJC4aYHa6yZmh0-DSkLbZ15Ln-VoouU-nPDIL7yfFGZLtXjOgOfsOSTPAbj0jB6bh98fRfYaL6jOK-3fEDwm"/>
                <div className="w-12 h-12 rounded-full border-2 border-surface-container-high bg-primary-container flex items-center justify-center text-on-primary-container text-xs font-bold">+12</div>
              </div>
              <div>
                <h4 className="font-headline font-bold text-xl">Call us directly</h4>
                <p className="text-on-surface-variant text-sm font-light">Connect with our engineering desk instantly</p>
              </div>
            </div>
            <a className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-[#25D366] text-white font-headline font-bold hover:brightness-110 transition-all shadow-[0_10px_20px_rgba(37,211,102,0.2)] active:scale-95" href="#">
              <span className="material-symbols-outlined">&#xe0b7;</span>
              Chat via WhatsApp
            </a>
          </div>
        </div>
      </FadeInSection>
    </main>
  );
}
