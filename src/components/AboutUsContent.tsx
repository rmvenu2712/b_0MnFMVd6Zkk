'use client';

import FadeInSection from "@/components/FadeInSection";

export default function AboutUsContent() {
  return (
    <main className="pt-24 pb-32 technical-grid min-h-screen">
      {/* Hero Section: Asymmetric Editorial */}
      <FadeInSection>
        <section className="relative px-6 md:px-12 py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 z-10">
              <span className="inline-block px-4 py-1 rounded-full bg-tertiary-container/10 text-tertiary text-xs font-bold tracking-[0.2em] uppercase mb-6">
                Established 2009
              </span>
              <h2 className="text-5xl md:text-8xl font-extrabold font-headline leading-tight tracking-tighter text-on-surface mb-8">
                The Future of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
                  Precision Care
                </span>
              </h2>
              <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
                SKYON Innovations represents the zenith of cleanroom &amp; OT engineering. We integrate cutting-edge design with precision manufacturing to redefine controlled environments for healthcare and pharma.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="/products" className="glow-shadow px-8 py-4 rounded-lg bg-gradient-to-tr from-primary to-primary-container text-on-primary-container font-bold uppercase tracking-widest text-sm transition-all active:scale-95 inline-block hover:shadow-[0_0_25px_rgba(165,222,255,0.4)]">
                  Our Products
                </a>
                <a href="/why-choose" className="px-8 py-4 rounded-lg border border-outline-variant/30 text-on-surface font-bold uppercase tracking-widest text-sm hover:bg-surface-container-high transition-all active:scale-95 inline-block">
                  Why Choose Us
                </a>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-700 bg-surface-container-low p-2">
                <img
                  alt="Cleanroom facility"
                  className="rounded-xl w-full aspect-[4/5] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-srPOv1rc-ba4nd3-iOfMCA-zs1cg5QO5CvlnkIPH6ldzq8rHgfKMyvnY8Vzmj-j358M405myTL-FoL8b2zY5hFDj3D2oXabiIIbJnXwpt9Gc2eSMuq3waJEO6amlwaS_THy-5Jaz_k-PTmn_9EocRmRMfUT63fuO2xOod8hscHWJEGRuJ0JuClKaQ-l6Xz9A781vxlUzygf-aopC8R8jt7wNOgazZ6oswEMYgpC4bnJm2hRXWq4DEzsLtI0_LyXyTGH_jszd4cZX"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-xl border border-primary/10 shadow-2xl max-w-[200px] z-20">
                <p className="text-tertiary font-bold text-3xl mb-1">99.9%</p>
                <p className="text-xs text-on-surface-variant leading-tight uppercase font-label">
                  Precision Diagnostic Accuracy Standard
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Milestones: Tonal Transitions */}
      <FadeInSection>
        <section className="bg-surface-container-low py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-2">
                <p className="text-5xl font-extrabold font-headline text-primary tracking-tighter">500+</p>
                <p className="text-sm uppercase tracking-widest text-on-surface-variant font-label font-medium">Projects Delivered</p>
                <div className="h-1 w-12 bg-primary/20"></div>
              </div>
              <div className="space-y-2">
                <p className="text-5xl font-extrabold font-headline text-primary tracking-tighter">15+</p>
                <p className="text-sm uppercase tracking-widest text-on-surface-variant font-label font-medium">Years Experience</p>
                <div className="h-1 w-12 bg-primary/20"></div>
              </div>
              <div className="space-y-2">
                <p className="text-5xl font-extrabold font-headline text-primary tracking-tighter">42+</p>
                <p className="text-sm uppercase tracking-widest text-on-surface-variant font-label font-medium">Product Range</p>
                <div className="h-1 w-12 bg-primary/20"></div>
              </div>
              <div className="space-y-2">
                <p className="text-5xl font-extrabold font-headline text-primary tracking-tighter">24/7</p>
                <p className="text-sm uppercase tracking-widest text-on-surface-variant font-label font-medium">AMC Support</p>
                <div className="h-1 w-12 bg-primary/20"></div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Clinical Core Directives: Bento Grid */}
      <FadeInSection>
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="mb-16">
            <h3 className="text-xs font-bold text-tertiary uppercase tracking-[0.4em] mb-4">Foundation</h3>
            <h2 className="text-4xl font-extrabold font-headline tracking-tight">Core Directives</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Card */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-xl bg-surface-container-highest p-10 flex flex-col justify-between min-h-[400px]">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[160px]">&#xea3a;</span>
              </div>
              <div className="relative z-10">
                <span className="material-symbols-outlined text-primary text-4xl mb-6 block">&#xf049;</span>
                <h4 className="text-3xl font-bold font-headline mb-4">Engineered Excellence</h4>
                <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
                  We don&apos;t just build cleanrooms; we architect controlled environments. Our systems deliver uncompromising sterility through precision engineering and turnkey execution.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4 text-primary font-bold uppercase text-xs tracking-widest cursor-pointer hover:gap-6 transition-all">
                Explore Methodology
                <span className="material-symbols-outlined">&#xe5c8;</span>
              </div>
            </div>

            {/* Vertical Card */}
            <div className="rounded-xl bg-surface-container-high p-8 flex flex-col border border-outline-variant/10">
              <span className="material-symbols-outlined text-tertiary text-4xl mb-6">&#xea4b;</span>
              <h4 className="text-2xl font-bold font-headline mb-4">Quality Verification</h4>
              <p className="text-on-surface-variant leading-relaxed mb-auto">
                Every installation is validated through NABL-accredited IQ/OQ/PQ protocols, ensuring 100% compliance with ISO 14644 and GMP standards.
              </p>
              <div className="mt-8 p-4 rounded-lg bg-surface-dim/50 border border-outline-variant/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">Verification Status</span>
                  <span className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_#50d190]"></span>
                </div>
                <p className="font-mono text-xs text-tertiary">SKY-QC-ACTIVE</p>
              </div>
            </div>

            {/* Glassmorphism Metric Card */}
            <div className="rounded-xl bg-gradient-to-br from-surface-container-high to-surface-container-low p-8 border border-outline-variant/10 group">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6">&#xe6dd;</span>
              <h4 className="text-2xl font-bold font-headline mb-4">Smart Design</h4>
              <p className="text-on-surface-variant leading-relaxed">
                3D visualization and virtual prototyping before construction begins. Our design team delivers layout drafting compliant with GMP, ISO, and NABH standards.
              </p>
            </div>

            {/* Small Focus Card with Image */}
            <div className="md:col-span-2 rounded-xl bg-surface-container-high p-8 grid md:grid-cols-2 gap-8 items-center border border-outline-variant/10">
              <div className="aspect-video rounded-lg overflow-hidden bg-surface-dim">
                <img
                  alt="Cleanroom visualization"
                  className="w-full h-full object-cover mix-blend-lighten"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuABPsoXhI0sNEakNw04YyS6DKzUMuVXPpu8_EaObmsspb3sGIA0Fr6up8jX7timpFsRad7ZcgmVGT_-qmDdFs-9a2zu3emb2IhkHeTNC1pRS-Kwwu7SgFFfDY6FPiTOOVL3LtDdoF4_vfkK1TDv1HX2V8ZVUmYeT2s2OBM-0HDD5Nx5y_9bVrKZbuYIopxFyKx23zBYUwtTgjUSgOznCE2PRIybqCa2Dpa6mIZ9jKe897JejWaATpDkKaJzWWfAc0Dbx1SIfZDXbcCT"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold font-headline mb-3">Seamless Integration</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  SKYON systems integrate with existing hospital infrastructure — from HVAC tie-ins to BMS connectivity — upgrading facilities with minimal disruption.
                </p>
                <a href="/products" className="text-primary font-bold text-xs uppercase tracking-tighter hover:underline underline-offset-4 transition-all">
                  View Products
                </a>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* System Vitality / Data Pulse Section */}
      <FadeInSection>
        <section className="py-24 bg-surface-dim relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold font-headline tracking-tight mb-6">Operational Excellence</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                Experience our commitment to quality through every project phase. From design validation to ongoing AMC, our systems maintain certified performance round the clock.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">&#xe8e8;</span>
                  </div>
                  <p className="font-bold text-sm tracking-wide">ISO 14644 &amp; GMP Compliant</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-tertiary">&#xea0b;</span>
                  </div>
                  <p className="font-bold text-sm tracking-wide">NABL Accredited Validation</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">&#xe869;</span>
                  </div>
                  <p className="font-bold text-sm tracking-wide">24/7 AMC &amp; Support Services</p>
                </div>
              </div>
            </div>

            {/* Data Pulse Component */}
            <div className="glass-panel bg-surface-container-low/40 rounded-2xl border border-outline-variant/15 p-8 relative">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-1">Project Success Rate</p>
                  <h5 className="text-2xl font-black font-headline">99.8%</h5>
                </div>
                <div className="px-3 py-1 rounded bg-tertiary/10 text-tertiary text-[10px] font-bold tracking-tighter uppercase">Operational</div>
              </div>

              {/* Sparkline Simulation */}
              <div className="h-48 w-full flex items-end gap-1 overflow-hidden">
                <div className="flex-1 bg-tertiary/20 h-[30%] rounded-t-sm"></div>
                <div className="flex-1 bg-tertiary/40 h-[45%] rounded-t-sm"></div>
                <div className="flex-1 bg-tertiary/60 h-[60%] rounded-t-sm"></div>
                <div className="flex-1 bg-tertiary/30 h-[40%] rounded-t-sm"></div>
                <div className="flex-1 bg-tertiary/50 h-[75%] rounded-t-sm"></div>
                <div className="flex-1 bg-tertiary/80 h-[90%] rounded-t-sm"></div>
                <div className="flex-1 bg-tertiary/40 h-[65%] rounded-t-sm"></div>
                <div className="flex-1 bg-tertiary/70 h-[85%] rounded-t-sm"></div>
                <div className="flex-1 bg-tertiary/50 h-[70%] rounded-t-sm"></div>
                <div className="flex-1 bg-tertiary/90 h-[100%] rounded-t-sm"></div>
                <div className="flex-1 bg-tertiary h-[95%] rounded-t-sm"></div>
              </div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
            </div>
          </div>
        </section>
      </FadeInSection>
    </main>
  );
}
