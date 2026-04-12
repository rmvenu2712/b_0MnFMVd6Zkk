'use client';

import FadeInSection from "@/components/FadeInSection";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const products = [
  {
    id: 1,
    name: "Omni-Glide P7",
    category: "Hospital Beds",
    badge: "ICU Ready",
    icon: "\ueb8e",
    description: "Advanced patient articulation system with integrated vitals telemetry and haptic feedback controls.",
    ref: "LM-9901",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1oBA32bpVWUYrcKeU9Su9hpfu1Zdom1JLEhbNfuXWRfma-1jXzbdW2TmoSoHbEYU1tIUo1dkWW9tZivOGlt8gnBbx44iR4e-rGHfImud_UzmESkgzo-gEDJQTskMJy6QCOef5IFXhHcgQ1EyWps0tNRPKr2tIEdYmGP3eZt8OAOBFZE4cNPzIS0kSBK44f6rRmn6nFW4QmaYJYzP6_HFFnyGcPAEKX6FxOi0cmQi_42Du5VOQYZQQt2aK6SlK0PQJ1EEj0Qb-4j0d",
  },
  {
    id: 2,
    name: "QuantumScan HD",
    category: "Imaging Diagnostics",
    badge: "Diagnostics",
    icon: "\uea3a",
    description: "Molecular-level diagnostic imaging with zero-latency data throughput for instant pathology reporting.",
    ref: "LM-4022",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGNbdpL7_OweMHmvsPTKtGhY1nYlxDYfvfbqbMe821zs7g8nTMAJTUtMZaN2vQ_coghmpdZlOFdM7F0IWzT8EO0ds9VkPufaVLhXnX9Px1cq75RacU9a3PkGMASYI2OM01psHqpB9JwK7r5gZiFTGgJ1tm2kljd6U2RUgMsjQgIy4WY4tMS4GxhIqUfM6jPhNf9SdiboUr1VFOfT9qWspEMHNIfJFKdKDjrCjsZTFGDtZWZ3cGZVhRvcBJavIi_NetVIO7nOHYd7hD",
  },
  {
    id: 3,
    name: "AeroFlow V8",
    category: "Life Support",
    badge: "Critical Care",
    icon: "\uefd8",
    description: "Smart-ventilation unit with AI-assisted patient compliance and ultra-quiet turbine technology.",
    ref: "LM-1108",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa1ijZ_QeRAa4AAd0x_tKDqoaTGNyU5LxibESbFI0Sz7WR5Q7gr8JdUJ8lEEbLfuL8u5DpTzhst48B4KK92Dq0naSA00SWlxG40l4o-RQ5nLXUPzxONbx6LjHZsJoR-VNf6HIZLb_3LS5eBFRbV5SltqUtLAC_zQGSceDNIXu01dv970KgYWfgyyX36AMseB3z6053S50lE7d7caQiYLoepo2repvlK7jBDm6bgPPEzVoT2vromRkI1E2cxZ_V7qn-xXHRVoxQMw8W",
  },
  {
    id: 4,
    name: "Titanium S-Kit",
    category: "Surgical Tools",
    badge: "Precision",
    icon: "\ue14e",
    description: "Hand-forged aerospace grade titanium surgical kit designed for micro-invasive procedures.",
    ref: "LM-0051",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYkCNWLt4tAKS5p0_9TFI7Fc5KjqR2qmSnOhP3FFKvqPK9PVmQ5M3o55ZvsNgM56AZGoJJrlX9jS4Pm2goy4S5JCFn-4sk3kytLLr6q62CLKRfy5021xLdBCbny5qgOiukFTVCZDfB1wSGTIofct1-fm70uOh0hSYEdzMDj1d_YpcUMm4iSpLMzU2mzHHLqeafjVCnMPRenfkj5XvKKsWM1-_JkjzNP4NE9jdj_vqLsruY5toPGCgkUCySOgcp5fQzBaDDBUNjjzaW",
  },
  {
    id: 5,
    name: "BioLab-X Alpha",
    category: "Imaging Diagnostics",
    badge: "Laboratory",
    icon: "\uea4b",
    description: "Automated hematology analyzer featuring cold-start technology and sub-minute processing.",
    ref: "LM-7729",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAy2QGP28YJGSW8-jjfCIM2jpD4BUw-SY8cb3oI8JWEZuBB1Kmy57f_bmT4XkM7H1ZfVyiMfvwjSy4PfbcrHnGeIGkyzgTjY0tgZtwTUyscetLxt7G53IILLJD4r4DVcg2kyLeJHp99tNg7-zCo67OPbFFxDymt-uIjFpWHt2_AkIKGn9RwI7uZo3xBP5sVYDeGVEYssdrGue30Kvwjx4-50kPQFyC02tJcqqKzA3IvUV1VXkq5SzU1dyRUbyT572WoMLsNWMKGNANI",
  },
  {
    id: 6,
    name: "FlowMaster Z1",
    category: "ICU Equipment",
    badge: "Infusion",
    icon: "\ue8fc",
    description: "Intelligent drug delivery system with barcode validation and wireless hospital network integration.",
    ref: "LM-2234",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKQnnEYpoP5JLeCC6Xji5hy17JwNe_NXZPgZVjcXFVjc-YDWDfij3rKrO7Wy3cfPxKA7U9xWFrFQExQyJ3Nk-YI8OF32YZqhGaI8tKP1e5kJ7vRP58udcmLvg8-1u5dMwewXItttTVTROD1mwEAf7nliTR7ED3j7cnMv39nlwRr40GRPUBv0TLEL7ePCNvZhUhd_trwj_bFxBkochFnjGmbNa1ZvinOtfe7ZYzhIezYe8CixMNtk1bp6h8sQyO0973nJio_19bhc6D",
  }
];

const categories = ["All Systems", "Hospital Beds", "ICU Equipment", "Imaging Diagnostics", "Surgical Tools", "Life Support"];

export default function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [activeCategory, setActiveCategory] = useState("All Systems");

  useEffect(() => {
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    } else if (!categoryParam) {
      setActiveCategory("All Systems");
    }
  }, [categoryParam]);

  const filteredProducts = activeCategory === "All Systems" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <main className="pt-24 pb-20 technical-grid min-h-screen relative z-10 w-full overflow-hidden">
      {/* Compact Hero Section */}
      <FadeInSection>
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-l-2 border-primary/30 pl-6 md:pl-10">
            <div className="max-w-xl">
              <span className="text-primary font-label text-[10px] md:text-xs uppercase tracking-[0.3em] mb-2 block">Precision Inventory V2.4</span>
              <h1 className="text-4xl md:text-6xl font-headline font-bold text-white leading-tight mb-4">Surgical Grade Hardware</h1>
              <p className="text-on-surface-variant text-base md:text-lg font-light leading-relaxed max-w-lg">Deploying mission-critical medical infrastructure for the world&apos;s leading healthcare institutions.</p>
            </div>
            <div className="flex gap-3 font-label text-[10px] text-outline uppercase tracking-wider tabular-nums">
              <div className="px-3 py-1.5 bg-surface-container-high rounded-sm border border-outline-variant/20">TOTAL: 1,248</div>
              <div className="px-3 py-1.5 bg-surface-container-high rounded-sm border border-outline-variant/20 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                OPERATIONAL
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Category Filter */}
      <FadeInSection>
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-12">
          <div className="overflow-x-auto no-scrollbar -mx-6 px-6">
            <div className="flex gap-2 p-1.5 bg-surface-container-low rounded-xl w-max md:w-fit border border-outline-variant/10">
              {categories.map((category) => (
                <button 
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-lg text-xs md:text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === category 
                      ? "bg-primary text-on-primary shadow-lg shadow-primary/20" 
                      : "text-on-surface-variant hover:bg-surface-bright hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-[400px]">
        {filteredProducts.map((product) => (
          <FadeInSection key={product.id}>
            <div className="group h-full relative bg-surface-container p-1 rounded-xl transition-all duration-500 hover:bg-surface-bright cyan-glow overflow-hidden flex flex-col">
              <div className="relative h-60 md:h-64 w-full mb-6 overflow-hidden rounded-lg">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100" 
                  alt={product.name} 
                  src={product.image}
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-2.5 py-1 bg-background/80 text-primary text-[9px] font-bold uppercase tracking-wider rounded-md backdrop-blur-md border border-primary/20">
                    {product.badge}
                  </span>
                </div>
              </div>
              <div className="px-4 pb-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg md:text-xl font-headline font-bold text-white">{product.name}</h3>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-xl" data-icon={product.icon}>
                    {product.icon}
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm font-light leading-relaxed mb-6 h-10 overflow-hidden line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-auto flex justify-between items-center pt-4 border-t border-outline-variant/10">
                  <span className="text-[10px] font-label text-outline uppercase tracking-widest">REF: {product.ref}</span>
                  <a className="flex items-center gap-2 text-primary text-xs font-medium hover:gap-3 transition-all cursor-pointer">
                    View Details <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">&#xe5c8;</span>
                  </a>
                </div>
              </div>
            </div>
          </FadeInSection>
        ))}
      </section>

      {/* Bottom CTA */}
      <FadeInSection>
        <section className="max-w-7xl mx-auto px-6 md:px-8 mt-20 mb-10">
          <div className="relative p-10 md:p-12 rounded-2xl bg-surface-container-high border border-outline-variant/10 overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-headline font-bold text-white mb-4 relative z-10">Scale Your Institution</h2>
            <p className="text-on-surface-variant max-w-lg mx-auto mb-8 relative z-10 text-sm md:text-base">
              Connect with our engineering consulting team for bulk procurement and customized facility implementation plans.
            </p>
            <button className="relative z-10 inline-flex items-center gap-3 bg-primary text-on-primary px-8 py-3.5 rounded-lg font-bold uppercase tracking-widest text-xs shadow-[0_0_30px_rgba(0,227,253,0.3)] hover:brightness-110 transition-all duration-300">
              Request Bulk Quote
              <span className="material-symbols-outlined text-sm" data-icon="request_quote">&#xf2b0;</span>
            </button>
          </div>
        </section>
      </FadeInSection>
    </main>
  );
}
