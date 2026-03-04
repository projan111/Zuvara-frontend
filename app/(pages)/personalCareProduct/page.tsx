"use client";

import React from "react";
import HeroSection from "@/app/components/personalCareProduct/HeroSection";
import ProductList from "@/app/components/personalCareProduct/ProductList";
import { motion } from "framer-motion";

const PersonalCarePage = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen bg-white"
    >
      <HeroSection />
      <div className="max-w-7xl mx-auto pb-20">
        <ProductList />
      </div>
    </motion.main>
  );
};

export default PersonalCarePage;