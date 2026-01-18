"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../common-ui/Button";
import SectionHeading from "../common-ui/SectionHeading";

interface Variant {
  id: number;
  image: string;
  color: string;
}

interface Product {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  inStock: boolean;
  variants: Variant[];
}

const Product = () => {
  const [selectedVariant, setSelectedVariant] = useState<
    Record<number, Variant>
  >({});

  const products = [
    {
      id: 1,
      name: "Organic Baby Shampoo",
      rating: 4.5,
      reviews: 128,
      image: "/diaper/diaper2.png",
      category: "Baby Care",
      inStock: true,
      variants: [
        { id: 1, image: "/diaper/diaper2.png", color: "White" },
        { id: 2, image: "/diaper/diaper.png", color: "Blue" },
        { id: 3, image: "/diaper/diaper2.png", color: "Pink" },
      ],
    },
    {
      id: 2,
      name: "Gentle Face Moisturizer",
      rating: 4.8,
      reviews: 245,
      image: "/diaper/diaper.png",
      category: "Skincare",
      inStock: true,
      variants: [
        { id: 1, image: "/diaper/diaper.png", color: "Cream" },
        { id: 2, image: "/diaper/diaper2.png", color: "Green" },
        { id: 3, image: "/diaper/diaper.png", color: "Gold" },
      ],
    },
    {
      id: 3,
      name: "Premium Body Lotion",
      rating: 4.6,
      reviews: 189,
      image: "/diaper/diaper2.png",
      category: "Personal Care",
      inStock: true,
      variants: [
        { id: 1, image: "/diaper/diaper2.png", color: "Beige" },
        { id: 2, image: "/diaper/diaper.png", color: "Lavender" },
        { id: 3, image: "/diaper/diaper2.png", color: "Rose" },
      ],
    },
    {
      id: 4,
      name: "Hair Restoration Serum",
      rating: 4.7,
      reviews: 312,
      image: "/diaper/diaper.png",
      category: "Hair Care",
      inStock: true,
      variants: [
        { id: 1, image: "/diaper/diaper.png", color: "Clear" },
        { id: 2, image: "/diaper/diaper2.png", color: "Amber" },
        { id: 3, image: "/diaper/diaper.png", color: "Gold" },
      ],
    },
    {
      id: 5,
      name: "Wellness Vitamin Supplement",
      rating: 4.4,
      reviews: 156,
      image: "/diaper/diaper2.png",
      category: "Wellness",
      inStock: true,
      variants: [
        { id: 1, image: "/diaper/diaper2.png", color: "White" },
        { id: 2, image: "/diaper/diaper.png", color: "Orange" },
        { id: 3, image: "/diaper/diaper2.png", color: "Red" },
      ],
    },
    {
      id: 6,
      name: "Organic Lip Balm",
      rating: 4.9,
      reviews: 423,
      image: "/diaper/diaper.png",
      category: "Organic",
      inStock: true,
      variants: [
        { id: 1, image: "/diaper/diaper.png", color: "Natural" },
        { id: 2, image: "/diaper/diaper2.png", color: "Cherry" },
        { id: 3, image: "/diaper/diaper.png", color: "Honey" },
      ],
    },
  ];

  return (
    <section className="py-4 lg:py-8 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col gap-2 justify-between md:items-center mb-4 md:mb-8">
          <SectionHeading
            title="Featured"
            highlight="Products"
            description="Discover our best-selling items"
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-2">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="group h-full flex flex-col bg-white rounded-lg border border-transparent overflow-hidden hover:border-[#8cd700] transition-all duration-400 relative">
                {/* Best Seller Badge */}
                <div className="absolute top-3 left-3 z-10 bg-white px-2 py-1 rounded text-xs font-medium text-[#8cd700] shadow-sm">
                  Best Seller
                </div>

                {/* Product Image Container */}
                <div className="relative bg-zinc-100 aspect-square overflow-hidden h-72 shrink-0">
                  <Image
                    src={selectedVariant[product.id]?.image || product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300"
                  />

                  {/* Stock Status */}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-foreground/70 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>

                {/* Variant Thumbnails - Below Image */}
                <div className="px-3 py-2 bg-zinc-50 border-t border-zinc-100  w-full">
                  <div className="flex gap-4 items-center justify-center overflow-x-auto  w-full">
                    {product.variants && product.variants.length > 0 && (
                      <div className="p-2 flex gap-2 items-center">
                        {product.variants.slice(0, 6).map((variant) => (
                          <button
                            key={variant.id}
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedVariant((prev) => ({
                                ...prev,
                                [product.id]: variant,
                              }));
                            }}
                            className={`shrink-0 w-12 h-12 rounded border-2 overflow-hidden transition-all ${
                              selectedVariant[product.id]?.id === variant.id
                                ? "border-zinc-500 ring-2 ring-[#8cd700]!"
                                : "border-zinc-300 hover:border-zinc-500"
                            }`}
                            title={variant.color}
                          >
                            <Image
                              src={variant.image}
                              alt={variant.color}
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                        {product.variants.length > 6 && (
                          <div className="shrink-0 w-12 h-12 rounded border-2 border-zinc-300 flex items-center justify-center text-xs font-medium text-zinc-600 hover:border-zinc-500 transition-all">
                            +{product.variants.length - 6}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex-1 p-4 flex flex-col">
                  {/* Name */}
                  <h3 className="text-sm lg:text-base font-semibold text-zinc-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-zinc-600 mb-3 line-clamp-2">
                    {product.category} - Premium Quality
                  </p>

                  {/* Link - Minimal Style */}
                  <Link
                    href={`/product/${product.id}`}
                    className="text-xs text-zinc-600 hover:text-zinc-900 font-medium transition-colors"
                  >
                    View details →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex w-full justify-center mt-8">
          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              content="View All Products"
              link="/products"
              icon="healthicons:nappy-diaper"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Product;
