'use client';

import FadeInSection from './FadeInSection';
import { ZoomIn } from 'lucide-react';

export default function GallerySection() {
  const images = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQI1tXzrhkSo1Ea7Vqqng6lAA7xUiZj5mW96PsBkpM9rOdhoF6AwR3991_V_2U3P7l6to5lw42R4oZYHgs83fDgmH1fcTGcZPY0sASkdsOIHmrHWzcI6U17Fzva-qidy-eabVxKgDeK-_3_g-TLrQFIRf8afU5aQzPPiumFwddmWr5FhlmpwxdYSRGpKLfyTC1vEwZ-mesmT3Z26-DRtfRMR4YKun9U_hFBc5LseeKB0XyzOYjt3pedjm4_TabxBt-LsjHCjQPy9BM",
      alt: "Interior of a ultra-modern hospital suite featuring SKYON Innovations medical beds and sleek furniture"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4khPlzxhWIlmq4bMmHfZGAKwGuFgp59cn1H5Wqd6cNGSIDCTV95p1QmojIrdUUM1xIv08BLb3FZhe6TsqavTNdN2et6cPpca3y0q0rt_y6Ikav09HUt--dsgGYGNLa8EqzHI9_nMOobw9txUG7pZDmNnJU3MsD41Y_Rx6LienFNs81Us-zSWGpHjsgeuV8AJo1hOyR9eUCgY-ERdOHtez5pCZ1V7yg4qC6haQAPUiMm0aLwsPri__H55xq0Lni34SBp10kYN3DqlQ",
      alt: "Close-up detail of hospital bed wheels and braking system showcasing mechanical precision"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSoC-RwUKkWaqeRjmRWS23y3ol-g1Ri3kP1QhRVd6sDNJRRlyYtThVuqCRhi2cl2CwCp5XUioBsq-OCf2U-kKcDDOfFiFffUSIbldWLhgmpmTZAw75O9j0NsJBXsV9LM692aWM3gC2Sz-kRcl0XN-v8VehPgBPdNe2tDOQeXdL7WaKTz6WOhjwQdevjCUAhaOIPUeNSnk9XbAuPFGkx9g9Fa6Ed8d0q-ReM-AEXnGmtfCQoPADGPMqBFNsobi1WIxb6dSQPhpSFnUg",
      alt: "Professional medical engineer working on a digital blueprint of a medical bed system"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQCAQDgBCiwbm5elDfjbSMsDd_5GRjWe_2UFIqn8IJrjv528rc2npJplZ5E2zUfEU8K3vQF76hBuixrgexBrAw9ffUAXVpOhY7gwCl3rzxeZp1_l74gQdgr6BotbzRgIIG2WMQ9VWWMrzoZkbL1TdAVi9g_zSwfWb2JhazH-HVChIL3oFvYByncd9GhxzX3TtegBCj6_JHPPm52Vwt9pNK30PjFPZDQ4wWOCa1zF1kYJMM0gcdeJZOt6qOcChBYR08vUq2uEFVeYZk",
      alt: "Surgeons in an operating room with advanced SKYON Innovations medical equipment around the patient area"
    }
  ];

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <FadeInSection direction="up" delay={100}>
          <div className="mb-12">
            <h2 className="text-4xl font-headline font-bold text-white">Innovation Gallery</h2>
          </div>
        </FadeInSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <FadeInSection key={idx} direction="up" delay={200 + idx * 100}>
              <div className="aspect-square overflow-hidden rounded-xl group relative border border-outline-variant/10 cursor-pointer">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                  alt={img.alt} 
                  src={img.src} 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <ZoomIn className="text-white w-10 h-10 drop-shadow-md" />
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
