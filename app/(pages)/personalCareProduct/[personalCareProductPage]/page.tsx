"use client";

import React, { useState, useEffect } from "react";
import { useParams} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { personalCareProducts } from "@/constants/personalCareProduct";
import type { Product, Variant } from "@/type/personalCareProductType";
import { Star, Check, ArrowLeft, ShieldCheck, Truck, RefreshCw } from "lucide-react";

const ProductDetailPage = () => {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
  const [activeTab, setActiveTab] = useState("reviews");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const productSlug = params.personalCareProductPage;
    const foundProduct = personalCareProducts.find((p) => p.slug === productSlug);

    if (foundProduct) {
      setProduct(foundProduct);
      if (foundProduct.variants?.length > 0) {
        setSelectedVariant(foundProduct.variants[0]);
      }
      setIsLoaded(true);
    }
  }, [params.personalCareProductPage]);

  if (!product) return null;

  return (
    <div className="min-h-screen bg-zinc-50/50">
      {/* --- Navigation / Breadcrumbs --- */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/personalCareProduct" className="flex items-center gap-1 text-zinc-500 hover:text-personalCare transition-colors font-medium">
              <ArrowLeft size={16} />
              <span>Back to Collection</span>
            </Link>
            <span className="text-zinc-300 mx-2">/</span>
            <span className="text-zinc-900 font-semibold truncate max-w-[150px] lg:max-w-none">
              {product.name}
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
             <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-zinc-400">
                <ShieldCheck size={14} className="text-personalCare" />
                Verified Quality
             </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 lg:py-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* --- Left: Image Gallery (Sticky) --- */}
          <div className="w-full lg:w-[55%]">
            <div className="lg:sticky lg:top-24">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative aspect-square bg-white rounded-[2rem] overflow-hidden shadow-sm border border-zinc-100"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedVariant?.id || 'main'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative w-full h-full p-8 lg:p-16"
                  >
                    <Image
                      src={selectedVariant?.image || product.image || "/placeholder.png"}
                      alt={product.name}
                      fill
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 bg-personalCare text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                    {product.category}
                  </span>
                </div>
              </motion.div>

              {/* Quick Perks */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { icon: Truck, label: "Fast Shipping" },
                  { icon: ShieldCheck, label: "Secure Pack" },
                  { icon: RefreshCw, label: "Easy Returns" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-zinc-100 shadow-sm">
                    <item.icon size={20} className="text-personalCare" />
                    <span className="text-[10px] font-bold text-zinc-500 uppercase">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- Right: Content --- */}
          <div className="w-full lg:w-[45%] flex flex-col gap-8">
            <section>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                  ))}
                </div>
                <span className="text-sm font-bold text-zinc-600">{product.rating} Reviews</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight mb-4">
                {product.name}
              </h1>
              
              <p className="text-lg text-zinc-600 leading-relaxed font-medium">
                {product.description}
              </p>
            </section>

            {/* Size/Variant Picker */}
            {product.variants && product.variants.length > 0 && (
              <section className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">
                  Select Size/Format
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-6 py-4 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center min-w-[100px] ${
                        selectedVariant?.id === v.id
                          ? "border-personalCare bg-personalCare/5 ring-4 ring-personalCare/10"
                          : "border-zinc-100 bg-white hover:border-zinc-300"
                      }`}
                    >
                      <span className={`font-bold ${selectedVariant?.id === v.id ? "text-personalCare" : "text-zinc-900"}`}>
                        {v.size}
                      </span>
                      {v.weight && <span className="text-[10px] text-zinc-400 uppercase font-bold">{v.weight} cm</span>}
                    </button>
                  ))}
                </div>
              </section>
            )}

            {/* Highlights Section */}
            <section className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-zinc-900">Product Highlights</h3>
              <div className="grid grid-cols-1 gap-3">
                {product.highlights?.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 p-0.5 bg-green-500 text-white rounded-full">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-zinc-600 text-sm font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Additional Info Tab Switcher */}
            <div className="mt-4 border-t border-zinc-100 pt-8">
              <div className="flex gap-8 mb-6 border-b border-zinc-100">
                {["Reviews", "Details"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    className={`pb-4 text-sm font-bold uppercase tracking-widest relative transition-colors ${
                      activeTab === tab.toLowerCase() ? "text-personalCare" : "text-zinc-400"
                    }`}
                  >
                    {tab}
                    {activeTab === tab.toLowerCase() && (
                      <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-1 bg-personalCare rounded-full" />
                    )}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {activeTab === "reviews" ? (
                  <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    {product.reviewsData?.map((review) => (
                      <div key={review.id} className="p-5 bg-white rounded-2xl border border-zinc-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-personalCare/10 text-personalCare rounded-full flex items-center justify-center font-bold">
                            {review.userInitial}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-zinc-900">{review.userName}</p>
                            <div className="flex text-yellow-500">
                               {[...Array(review.rating)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                            </div>
                          </div>
                        </div>
                        <p className="text-zinc-600 text-sm italic leading-relaxed">"{review.comment}"</p>
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="text-zinc-600 text-sm leading-relaxed"
                  >
                    {product.subDesc1}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailPage;