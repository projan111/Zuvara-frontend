"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalCareProducts } from "@/constants/personalCareProduct";
import type { Product as ProductType } from "@/type/personalCareProductType";

const ProductList = () => {
  const getDescription = (product: ProductType) =>
    product.description ??
    "Premium product designed for everyday comfort and reliable care.";

  return (
    <section className="bg-white lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-4 lg:space-y-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-personalCare">
            Essential Sanitary Solutions
          </h2>
        </div>

        <div className="mt-8 pb-10 flex flex-wrap justify-center gap-5">
          {personalCareProducts.map((product, index) => (
            <Link
              key={product.id}
              href={`/personalCareProduct/${product.slug}`}
              className="group block w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(25%-0.9375rem)]"
            >
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                viewport={{ once: true }}
                className="h-full rounded-2xl border border-zinc-200 bg-white p-3 flex flex-col"
              >
                <div className="relative h-44 rounded-2xl bg-personalCare/10 overflow-hidden">
                  <span className="absolute top-3 left-3 z-10 text-[10px] uppercase tracking-wider font-semibold text-zinc-500">
                    {product.category}
                  </span>
                  <Image
                    src={product.image || product.variants?.[0]?.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 90vw"
                  />
                </div>

                <h3 className="mt-4 text-sm font-semibold text-zinc-900 group-hover:text-personalCare line-clamp-1">
                  <span className="group-hover:underline underline-personalCare decoration-personalCare">
                    {product.name}
                  </span>
                </h3>
                <p className="mt-1 text-xs text-zinc-500 leading-relaxed line-clamp-2 min-h-9">
                  {getDescription(product)}
                </p>
                <div className="mt-auto pt-4 flex justify-end">
                  <span className="inline-flex items-center rounded-full border border-personalCare px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors group-hover:bg-personalCare group-hover:text-white group-hover:border-personalCare">
                    Learn more
                  </span>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
