"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../common-ui/Button";
import { useMediaQuery } from "react-responsive";
import { personalCareProducts } from "@/constants/personalCareProduct";

const ProductSection = () => {
  const isSmallerDevice = useMediaQuery({ maxWidth: 1000 });

  return (
    <main className="relative w-full flex flex-col justify-between">
      <section className="container mx-auto px-4 sm:px-6 lg:px-6 max-w-7xl flex flex-col justify-between py-12 lg:py-0 gap-12 lg:gap-12 relative z-10">
        {personalCareProducts.slice(0, 2).map((product) => (
          <div
            className={`flex items-center h-screen ${product.id === 2 && "lg:flex-row-reverse"}`}
          >
            {/* Left Content: Text & CTA */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-20 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block px-4 py-1.5 rounded-full bg-white border border-pink-100 shadow-sm"
              >
                <span className="text-sm font-semibold text-personalCare uppercase tracking-wider">
                  100% Cotton Feel
                </span>
              </motion.div>

              <p className="text-4xl md:text-5xl lg:text-7xl font-black text-zinc-900 leading-tight">
                {product.name}
              </p>
              <p className="text-lg lg:text-xl text-zinc-600 font-medium max-w-lg leading-relaxed">
                {product.description}
              </p>
              <div className="grid grid-cols-3 gap-2 items-center">
                {product.features?.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/70 backdrop-blur-md border border-personalCare/20 p-4 rounded-2xl shadow-lg hover:shadow-personalCare/20 transition-all duration-500 hover:-translate-y-1 text-center"
                  >
                    <p className="text-sm font-semibold text-gray-800">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
              <Button
                content="View Product"
                link={`/personalCareProduct/${product.slug}`}
                for="personalCare"
              />
              {/* <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-zinc-900 leading-tight"
          >
            Ultimate Comfort <br />
            <span className="text-personalCare">Zero Leakage.</span>
          </motion.h1> */}

              {/* <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg lg:text-xl text-zinc-600 font-medium max-w-lg leading-relaxed"
              >
                Experience our ultra-thin sanitary pads and period panties
                designed for maximum absorption and breathable softness.
              </motion.p> */}
            </div>

            {/* Right Content: Product Composition */}
            <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end items-center h-[50vh] lg:h-auto">
              <div
                className={`relative w-full h-full flex items-center ${product.id === 1 ? "lg:justify-center" : "lg:justify-start"}`}
              >
                {/* Decorative Circle Behind */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute w-[80%] aspect-square rounded-full border border-personalCare/30 bg-white/60 backdrop-blur-sm -z-10"
                />

                {/* Main Product: Period Panties */}
                <motion.div
                  // initial={{ opacity: 0, x: 50, rotate: 5 }}
                  // animate={{ opacity: 1, x: 0, rotate: 0 }}
                  // transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                  className="relative z-10 w-[70%] max-w-sm"
                >
                  <Image
                    src={product.productImage}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="w-full h-auto drop-shadow-2xl object-contain translate-x-12 lg:translate-x-0"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default ProductSection;
