'use client';

import FadeInSection from "@/components/FadeInSection";

export default function WhyChooseContent() {
  return (
    <main className="pt-24 technical-grid min-h-screen pb-10">
      {/* Hero Section */}
      <FadeInSection direction="up">
        <section className="px-8 py-20 max-w-7xl mx-auto text-center md:text-left relative">
          <div className="inline-block px-3 py-1 bg-surface-container-high border border-outline-variant/15 rounded-full mb-6">
            <span className="text-primary font-label text-xs font-bold uppercase tracking-widest">Precision Standards</span>
          </div>
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-background leading-tight mb-6 max-w-4xl">
            Engineered for <span className="text-primary">Clinical Excellence</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl font-light max-w-2xl mb-12">
            SKYON Innovations combines rigorous ISO-certified manufacturing with a deep understanding of medical infrastructure to deliver equipment that never compromises on patient safety.
          </p>
          <div className="absolute right-0 top-20 hidden lg:block opacity-40 mix-blend-screen overflow-hidden rounded-full w-96 h-96">
            <img 
              alt="Medical precision" 
              className="w-full h-full object-cover rounded-full" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDntvCIpzmazvVKyBloKSynRPiS5-itRu4FD4p2uPnfdrEtdLC0MJBp-LPvt9gomRsMox1cHPOnO9vy6m2mGWaSgign96Hw7HJyiNs3RpntXS93U2jIZ1aOhIcoJ3IRe0dwnxfKrvVZypyw6G0kXTLTFRT7G3M-o-klnV935j2fTzusiDhpUHH8bo3ydeYj8oeDGAFobGypZzNez4S9bK2X7vkI7BA1EOQND68M5AnFgCC3rBu-90T6p7IrnoXsMsFbCk0obvQe2efH"
            />
          </div>
        </section>
      </FadeInSection>

      {/* 6-Point Icon Grid */}
      <FadeInSection>
        <section className="px-8 py-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 outline-variant/10 border border-outline-variant/10 rounded-xl overflow-hidden">
            {/* Card 1 */}
            <div className="p-10 bg-surface-container-low border-b border-r border-outline-variant/15 hover:bg-surface-bright transition-all duration-300 group">
              <span className="material-symbols-outlined text-primary-dim text-4xl mb-6 block group-hover:scale-110 transition-transform">&#xe8e8;</span>
              <h3 className="font-headline text-xl font-bold mb-4 text-on-background">ISO Certification</h3>
              <p className="text-on-surface-variant font-light leading-relaxed">Adhering to the highest global standards for medical device quality management and safety protocols.</p>
            </div>
            {/* Card 2 */}
            <div className="p-10 bg-surface-container border-b border-r border-outline-variant/15 hover:bg-surface-bright transition-all duration-300 group">
              <span className="material-symbols-outlined text-primary-dim text-4xl mb-6 block group-hover:scale-110 transition-transform">&#xea3e;</span>
              <h3 className="font-headline text-xl font-bold mb-4 text-on-background">15+ Years Experience</h3>
              <p className="text-on-surface-variant font-light leading-relaxed">A decade and a half of expertise in precision medical engineering across diverse clinical environments.</p>
            </div>
            {/* Card 3 */}
            <div className="p-10 bg-surface-container-low border-b border-outline-variant/15 hover:bg-surface-bright transition-all duration-300 group lg:border-r-0">
              <span className="material-symbols-outlined text-primary-dim text-4xl mb-6 block group-hover:scale-110 transition-transform">&#xe558;</span>
              <h3 className="font-headline text-xl font-bold mb-4 text-on-background">Pan-India Delivery</h3>
              <p className="text-on-surface-variant font-light leading-relaxed">Robust logistics network ensuring safe, temperature-controlled delivery to any facility across the nation.</p>
            </div>
            {/* Card 4 */}
            <div className="p-10 bg-surface-container border-r border-outline-variant/15 hover:bg-surface-bright transition-all duration-300 group md:border-b-0">
              <span className="material-symbols-outlined text-primary-dim text-4xl mb-6 block group-hover:scale-110 transition-transform">&#xf049;</span>
              <h3 className="font-headline text-xl font-bold mb-4 text-on-background">Custom OEM</h3>
              <p className="text-on-surface-variant font-light leading-relaxed">Tailored hardware solutions designed specifically to meet your facility&apos;s unique architectural and clinical needs.</p>
            </div>
            {/* Card 5 */}
            <div className="p-10 bg-surface-container-low border-r border-outline-variant/15 hover:bg-surface-bright transition-all duration-300 group md:border-b-0">
              <span className="material-symbols-outlined text-primary-dim text-4xl mb-6 block group-hover:scale-110 transition-transform">&#xea3d;</span>
              <h3 className="font-headline text-xl font-bold mb-4 text-on-background">After-Sales Support</h3>
              <p className="text-on-surface-variant font-light leading-relaxed">24/7 technical monitoring and on-site maintenance by certified engineers for zero downtime.</p>
            </div>
            {/* Card 6 */}
            <div className="p-10 bg-surface-container hover:bg-surface-bright transition-all duration-300 group">
              <span className="material-symbols-outlined text-primary-dim text-4xl mb-6 block group-hover:scale-110 transition-transform">&#xefd3;</span>
              <h3 className="font-headline text-xl font-bold mb-4 text-on-background">Competitive Pricing</h3>
              <p className="text-on-surface-variant font-light leading-relaxed">Direct-from-manufacturer rates providing elite engineering at a fraction of standard international costs.</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Comparison Table Section */}
      <FadeInSection>
        <section className="px-8 py-24 bg-surface-container-low">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl font-bold text-on-background mb-4">Precision Benchmarking</h2>
              <p className="text-on-surface-variant font-light">Why SKYON Innovations stands alone in medical engineering.</p>
            </div>
            <div className="overflow-hidden glass-panel border border-outline-variant/10 rounded-xl glow-shadow">
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[600px]">
                  <thead>
                    <tr className="bg-surface-container-high/50 border-b border-outline-variant/15">
                      <th className="p-6 font-headline font-bold text-on-background tracking-wide">Feature</th>
                      <th className="p-6 font-headline font-bold text-primary tracking-wide">SKYON</th>
                      <th className="p-6 font-headline font-bold text-outline tracking-wide">Generic Supplier</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-light">
                    <tr className="border-b border-outline-variant/5">
                      <td className="p-6 text-on-surface/80">Calibration Variance</td>
                      <td className="p-6 text-primary font-medium">&lt; 0.001% Tolerance</td>
                      <td className="p-6 text-on-surface-variant">Standard +/- 5%</td>
                    </tr>
                    <tr className="border-b border-outline-variant/5">
                      <td className="p-6 text-on-surface/80">Response Protocol</td>
                      <td className="p-6 text-primary font-medium">Under 4 Hours On-site</td>
                      <td className="p-6 text-on-surface-variant">2-3 Business Days</td>
                    </tr>
                    <tr className="border-b border-outline-variant/5">
                      <td className="p-6 text-on-surface/80">Compliance Logs</td>
                      <td className="p-6 text-primary font-medium">Real-time Digital Auth</td>
                      <td className="p-6 text-on-surface-variant">Manual Documentation</td>
                    </tr>
                    <tr>
                      <td className="p-6 text-on-surface/80">Warranty Coverage</td>
                      <td className="p-6 text-primary font-medium">5-Year Full Replacement</td>
                      <td className="p-6 text-on-surface-variant">1-Year Limited</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Testimonials */}
      <FadeInSection>
        <section className="px-8 py-24 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-headline text-4xl font-bold text-on-background">Clinical Testimonials</h2>
              <p className="text-on-surface-variant font-light mt-2">Trusted by the world&apos;s leading medical practitioners.</p>
            </div>
            <div className="flex gap-4">
              <div className="h-[1px] w-32 bg-primary/30 mb-2"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-surface-container p-8 rounded-xl border-t-2 border-primary-container relative group">
              <span className="material-symbols-outlined absolute -top-4 right-8 text-6xl text-primary/10 group-hover:text-primary/20 transition-colors">&#xe244;</span>
              <p className="text-on-surface-variant italic mb-8 relative z-10 leading-relaxed">
                &quot;The precision of their MRI shielding units exceeded our expectations. The installation was seamless and the performance remains flawless after 2 years.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant/20">
                  <img 
                    alt="Dr. Ananya Sharma" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuABAtsm26KGDBlEyzpPLvbYg2AJDvZBVxMzv_GCyCK6zqqGBVxrdsm61FuEPol4yjdc_TCjVWpiWhxUMLdOU7C8d72fIBIaDK-Z6OmgPbo5hIbKPm56URCv6euS674L6i8XuMjJg-S70SDuaFIJ4fWM19Q0vMWEM-VghSpvl22r2O6jivgyl-VWTuqTR9FYRxlWMN55ZHb_DcI1Iq7O-y3OyeaFdh408jkdbvrAIxqUBtmPmzI_6FHKDI9anfSMvVoRs6g2X8mKiN6l"
                  />
                </div>
                <div>
                  <p className="font-bold text-on-background">Dr. Ananya Sharma</p>
                  <p className="text-xs text-primary font-label uppercase tracking-widest">Head of Radiology, Apollo Metro</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-surface-container p-8 rounded-xl border-t-2 border-primary-container relative group">
              <span className="material-symbols-outlined absolute -top-4 right-8 text-6xl text-primary/10 group-hover:text-primary/20 transition-colors">&#xe244;</span>
              <p className="text-on-surface-variant italic mb-8 relative z-10 leading-relaxed">
                &quot;Switching to SKYON Innovations&apos;s central sterile supply equipment significantly reduced our turnaround time by 30%. Their support team is exceptionally responsive.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant/20">
                  <img 
                    alt="Dr. Rajesh Varma" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC9kfWTEQ8rHCb11vI2oyypDmADJ7XTzcESokRpUwsZIOjIAuOtxflogZC5ifFfOCsxBDHgAbE2AAvtgOmwjFimFuy5lZENXWEsq-zBATSbipQJPlFjLp_HUCZC3K9qGSQAGrRGusKecQqSFcqBHQ2iwcL1P2sffmrij_mWpFLEfiJURkVJry2hPmlEtsE9ceEjmVzIN5bbNC5Iv5xPrwcvEDNyAKsmnfYzUGBToMwxZBWGzZhKDg7QhdKMMYQ4lywXZuXLJpk4XJR"
                  />
                </div>
                <div>
                  <p className="font-bold text-on-background">Dr. Rajesh Varma</p>
                  <p className="text-xs text-primary font-label uppercase tracking-widest">Chief Surgeon, Fortis Health</p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-surface-container p-8 rounded-xl border-t-2 border-primary-container relative group">
              <span className="material-symbols-outlined absolute -top-4 right-8 text-6xl text-primary/10 group-hover:text-primary/20 transition-colors">&#xe244;</span>
              <p className="text-on-surface-variant italic mb-8 relative z-10 leading-relaxed">
                &quot;Their custom OEM work for our specialized pediatric ward was brilliant. They understood the ergonomic needs while maintaining clinical sterile standards.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant/20">
                  <img 
                    alt="Dr. Sarah Kothari" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjDRfwK3781PdnhG30-eQeC4aZTE8GqzuITIVXCCt9qwUVdHMWQlXIcQpoiRCW4GNQ0vTPO9v2yzRLwqeWJWWFjOPGnaHt_E82fMbdc_9yqnN965aPU_ikKYdiqmtryWnwyxIAVIjT7pfiXspVKcuqY6EQlUL6nk4XgK8_HVOYANZNRhKdvIg02kkODpWkRO5aEuct_uVtHqYGRz9_EGI8-eMKN177g1911EicjkvVElG_k_fzunFIsLhZ_AFK1Zt6Rsn83BkpHIJi"
                  />
                </div>
                <div>
                  <p className="font-bold text-on-background">Dr. Sarah Kothari</p>
                  <p className="text-xs text-primary font-label uppercase tracking-widest">Director, Kothari Children&apos;s Hospital</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* CTA Section */}
      <FadeInSection>
        <section className="px-8 py-20 mb-8">
          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 to-surface-container-high opacity-60"></div>
            <div className="relative z-10 p-12 md:p-20 text-center glass-panel border border-primary/10">
              <h2 className="font-headline text-4xl font-bold text-on-background mb-6">Ready to upgrade your infrastructure?</h2>
              <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-10 font-light">
                Speak with a specialized medical engineer today to discuss your project requirements and get a technical quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-on-primary-container px-10 py-4 rounded-lg font-bold hover:brightness-110 active:scale-95 transition-all glow-shadow">
                  Consult An Expert
                </button>
                <button className="border border-primary/30 text-primary px-10 py-4 rounded-lg font-bold hover:bg-primary/5 active:scale-95 transition-all">
                  View Catalog
                </button>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
    </main>
  );
}
