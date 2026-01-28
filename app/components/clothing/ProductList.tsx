"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../common-ui/ProductCard";
import { clothingProducts } from "@/constants/babyClothes";
import { strollerRockerProducts } from "@/constants/strollerRockerProduct";
import type { Product as ClothingProduct } from "@/type/babyClothesType";
import type { Product as StrollerProduct } from "@/type/strollerRockerProductType";

const ProductList = () => {
  const [activeTab, setActiveTab] = useState<"clothing" | "stroller">(
    "clothing",
  );

  const products =
    activeTab === "clothing"
      ? (clothingProducts as unknown as ClothingProduct[])
      : (strollerRockerProducts as unknown as StrollerProduct[]);

  return (
    <section className="container lg:min-h-screen mx-auto py-8 px-4 sm:px-6 lg:px-6 max-w-7xl">
      {/* Tabs */}
      <div className="flex gap-4 mb-8 pt-4 justify-center">
        <button
          onClick={() => setActiveTab("clothing")}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            activeTab === "clothing"
              ? "bg-foreground text-white shadow-lg"
              : "bg-zinc-100 text-foreground hover:bg-zinc-200"
          }`}
        >
          Clothings
        </button>
        <button
          onClick={() => setActiveTab("stroller")}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            activeTab === "stroller"
              ? "bg-foreground text-white shadow-lg"
              : "bg-zinc-100 text-foreground hover:bg-zinc-200"
          }`}
        >
          Strollers & Rockers
        </button>
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-2"
      >
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product as any}
            index={index}
            activeTab={activeTab === "clothing" ? "clothing" : "stroller"}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default ProductList;
