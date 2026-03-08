"use client";

import React from "react";
import { motion } from "framer-motion";
import DesktopHero from "@/app/components/babyCareProduct/HeroSection";
import Product from "@/app/components/babyCare/Product";
import { useMediaQuery } from "react-responsive";
import MobileHero from "@/app/components/babyCareProductMobile/HeroSection";
import MobileProductList from "@/app/components/babyCareProductMobile/ProductList";
import WhyZuvaraProductsSection from "@/app/components/babyCareProduct/WhyZuvaraProductsSection";
import ProductFaqSection from "@/app/components/babyCareProduct/ProductFaqSection";
import { babyCareListingTheme } from "@/app/components/babyCareProduct/theme";

const BabyCareProductPage = () => {
  const isSmallerDevice = useMediaQuery({ maxWidth: 1000 });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-babyCare/20" // Soft off-white for a premium feel
    >
      {isSmallerDevice ? (
        <>
          <MobileHero />
          <div className="pb-12">
            <MobileProductList />
            <div className="mx-auto mt-12 w-[90%] space-y-8">
              <WhyZuvaraProductsSection theme={babyCareListingTheme} />
              <ProductFaqSection theme={babyCareListingTheme} />
            </div>
          </div>
        </>
      ) : (
        <>
          <DesktopHero theme={babyCareListingTheme} />
          <div className="pb-24">
            <Product />
            <div className="space-y-8">
              <WhyZuvaraProductsSection theme={babyCareListingTheme} />
              <ProductFaqSection theme={babyCareListingTheme} />
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default BabyCareProductPage;
