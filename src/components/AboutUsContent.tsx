'use client';

import FadeInSection from "@/components/FadeInSection";

export default function AboutUsContent() {
  return (
    <main className="pt-16 technical-grid min-h-screen">
      {/* Hero Section */}
      <FadeInSection>
        <section className="relative min-h-[795px] flex flex-col md:flex-row items-center border-b border-outline-variant/10 overflow-hidden">
          <div className="w-full md:w-1/2 h-[442px] md:h-[795px] relative">
            <img 
              alt="Medical technology visual" 
              className="w-full h-full object-cover grayscale brightness-50 contrast-125" 
              data-alt="Ultra-modern 3D medical sensor equipment in a sterile environment with cyan neon accents and high-precision mechanical components" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQiUgkwllaMT0YDebcqQ2aBB659VI5oIQkL_xgoH4qxuG3ich9OZkXPuBDT1UJpvDhq_Za_ISCVHUYSloVtXYb756L8EsOtQ8I8Gi1A1KUEvNNiUMIYooovuTisM3ELV49PuX2FDn47XVMMaTOfd9JzPJOzjRV3btuhq9SVLAF-3_o-I3wHik5KmnIcsX4LPYT8yC1ktmd7YXgf5ox0D-KUZGz90PPGQevX9rXBcIeroxG3tMdg9LKnh3gcc3IDdnO2LTUzrbOpiJW"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface"></div>
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center gap-6">
            <span className="label-sm uppercase tracking-[0.2em] text-primary font-medium">Est. 2009 — Clinical Excellence</span>
            <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter">
              THE ARCHITECTURE <br/> OF <span className="text-primary">PRECISION</span>.
            </h1>
            <p className="text-on-surface-variant font-light text-lg max-w-lg leading-relaxed">
              SKYON Innovations operates at the intersection of surgical robotics and quantum sensing. We don&apos;t just build tools; we engineer the future of human longevity through sterile innovation and uncompromising reliability.
            </p>
            <div className="flex gap-4 mt-4">
              <div className="w-12 h-[1px] bg-primary self-center"></div>
              <span className="text-[10px] uppercase tracking-widest text-outline">Protocol v.4.02 // Operational</span>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Values Section */}
      <FadeInSection>
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tighter uppercase text-primary">Core Directives</h2>
            <div className="h-px w-24 bg-primary mt-2"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/10 border border-outline-variant/10">
            {/* Value 1 */}
            <div className="bg-surface p-12 group hover:bg-surface-bright transition-all duration-500">
              <span className="material-symbols-outlined text-primary mb-6 text-4xl block opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-transform" data-icon="biotech">&#xea3a;</span>
              <h3 className="text-xl font-bold mb-4 tracking-tight uppercase">Innovation</h3>
              <p className="text-on-surface-variant font-light text-sm leading-relaxed">Pioneering neural-link diagnostics and real-time cellular imaging protocols to redefine clinical limits.</p>
            </div>
            {/* Value 2 */}
            <div className="bg-surface p-12 group hover:bg-surface-bright transition-all duration-500">
              <span className="material-symbols-outlined text-primary mb-6 text-4xl block opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-transform" data-icon="verified_user">&#xe8e8;</span>
              <h3 className="text-xl font-bold mb-4 tracking-tight uppercase">Safety</h3>
              <p className="text-on-surface-variant font-light text-sm leading-relaxed">Redundant algorithmic verification systems ensuring zero-failure performance in critical environments.</p>
            </div>
            {/* Value 3 */}
            <div className="bg-surface p-12 group hover:bg-surface-bright transition-all duration-500">
              <span className="material-symbols-outlined text-primary mb-6 text-4xl block opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-transform" data-icon="precision_manufacturing">&#xf049;</span>
              <h3 className="text-xl font-bold mb-4 tracking-tight uppercase">Reliability</h3>
              <p className="text-on-surface-variant font-light text-sm leading-relaxed">Engineered for 99.999% uptime in the most demanding global medical facilities and research labs.</p>
            </div>
            {/* Value 4 */}
            <div className="bg-surface p-12 group hover:bg-surface-bright transition-all duration-500">
              <span className="material-symbols-outlined text-primary mb-6 text-4xl block opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-transform" data-icon="public">&#xe80b;</span>
              <h3 className="text-xl font-bold mb-4 tracking-tight uppercase">Global Standards</h3>
              <p className="text-on-surface-variant font-light text-sm leading-relaxed">Adhering to and exceeding ISO-9000 clinical protocols across all six continents of operation.</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Milestones Strip */}
      <FadeInSection>
        <section className="bg-surface-container-low py-20 border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left">
              <span className="text-4xl md:text-6xl font-black text-primary font-headline tracking-tighter">2009</span>
              <p className="text-[10px] uppercase tracking-[0.2em] text-outline mt-2">Foundation Origin</p>
            </div>
            <div className="w-px h-12 bg-outline-variant/20 hidden md:block"></div>
            <div className="text-center md:text-left">
              <span className="text-4xl md:text-6xl font-black text-primary font-headline tracking-tighter">500+</span>
              <p className="text-[10px] uppercase tracking-[0.2em] text-outline mt-2">Enterprise Clients</p>
            </div>
            <div className="w-px h-12 bg-outline-variant/20 hidden md:block"></div>
            <div className="text-center md:text-left">
              <span className="text-4xl md:text-6xl font-black text-primary font-headline tracking-tighter">142</span>
              <p className="text-[10px] uppercase tracking-[0.2em] text-outline mt-2">Patents Etched</p>
            </div>
            <div className="w-px h-12 bg-outline-variant/20 hidden md:block"></div>
            <div className="text-center md:text-left">
              <span className="text-4xl md:text-6xl font-black text-primary font-headline tracking-tighter">24/7</span>
              <p className="text-[10px] uppercase tracking-[0.2em] text-outline mt-2">System Monitoring</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Engineering Philosophy */}
      <FadeInSection>
        <section className="py-32 px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="w-full md:w-1/3 sticky top-32">
              <h2 className="text-5xl font-bold tracking-tighter leading-none uppercase mb-8">Engineering <br/><span className="text-primary-dim">Philosophy</span></h2>
              <p className="text-on-surface-variant font-light leading-relaxed mb-6">Our approach is defined by &quot;The Precision Laboratory&quot; mandate. We eliminate visual noise to focus on the microscopic data that matters.</p>
              <div className="p-6 bg-surface-container-high rounded-lg border border-outline-variant/5">
                <span className="text-[10px] text-primary uppercase tracking-widest block mb-2">Live Telemetry</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-xs font-mono text-on-surface-variant">R&amp;D CLUSTER ALPHA ACTIVE</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-6">
              <div className="glass-panel p-10 border border-outline-variant/10 ambient-glow-primary rounded-xl">
                <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Module 01 // Structural Integrity</h4>
                <p className="text-lg font-light leading-relaxed text-on-surface">Every component of SKYON Innovations systems is designed with aerospace-grade alloys and chemically resistant polymers, ensuring longevity in sterile, high-radiation zones.</p>
              </div>
              <div className="glass-panel p-10 border border-outline-variant/10 ambient-glow-primary rounded-xl">
                <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Module 02 // Neural Latency</h4>
                <p className="text-lg font-light leading-relaxed text-on-surface">By minimizing signal decay between operator and instrument, our hardware achieves near-zero latency, allowing surgeons to perform micro-vascular adjustments with 2-micron precision.</p>
              </div>
              <div className="glass-panel p-10 border border-outline-variant/10 ambient-glow-primary rounded-xl">
                <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Module 03 // Bio-Ethical Alignment</h4>
                <p className="text-lg font-light leading-relaxed text-on-surface">Data sovereignty is etched into our firmware. Patient privacy is protected by localized encryption kernels that never leave the clinical facility&apos;s perimeter.</p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Global Impact Map Section */}
      <FadeInSection>
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-outline block mb-4">Operational Map</span>
                <h2 className="text-4xl font-bold tracking-tighter uppercase">Global Presence</h2>
              </div>
              <div className="text-right">
                <span className="text-primary font-mono text-sm">6 REGIONAL HUBS // 42 COUNTRIES</span>
              </div>
            </div>
            <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden grayscale border border-outline-variant/20">
              <img 
                alt="Global connectivity map" 
                className="w-full h-full object-cover opacity-40" 
                data-alt="A stylized global map with glowing data points and light connections on a dark background showing international medical logistics network" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6Shk3Xc349_kLWqxY0b6kNiOrhKRqX5enJwgwIO1dYd8HAceXTb4rWbU-NbLznleXBEo-C5l-NCYSCL3fBeWWpUmd9B1DpaLtQKUjtgb8EujcJqoVKtYbSeXbrburZrFIJyX02AkfFkKWMVCvsdZixIIe7pA9v1_2n7uOX43UfrZ2TeKFP2WLCCsBSrD4gC0mfb3zA_kc9XNdFMFJZVFy_3FVDD9T95ghD2qxDTBFxsDaMFKkFiFdMj7yWrtQNoGb-Xl01DTQwDBR"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
              {/* Location Pointers */}
              <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-surface/80 backdrop-blur-md border-l-2 border-primary">
                  <span className="text-[10px] text-outline block uppercase tracking-tighter">North America</span>
                  <span className="font-bold text-sm">SAN FRANCISCO HUB</span>
                </div>
                <div className="p-4 bg-surface/80 backdrop-blur-md border-l-2 border-primary">
                  <span className="text-[10px] text-outline block uppercase tracking-tighter">Europe</span>
                  <span className="font-bold text-sm">BERLIN LOGISTICS</span>
                </div>
                <div className="p-4 bg-surface/80 backdrop-blur-md border-l-2 border-primary">
                  <span className="text-[10px] text-outline block uppercase tracking-tighter">Asia Pacific</span>
                  <span className="font-bold text-sm">SINGAPORE R&amp;D</span>
                </div>
                <div className="p-4 bg-surface/80 backdrop-blur-md border-l-2 border-primary">
                  <span className="text-[10px] text-outline block uppercase tracking-tighter">Middle East</span>
                  <span className="font-bold text-sm">DUBAI CLINICAL</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
    </main>
  );
}
