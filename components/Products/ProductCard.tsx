"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Link - only image is clickable to product detail */}
      <Link href={`/products/${product.id}`}>
        <div className="relative h-64 overflow-hidden cursor-pointer">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>

      {/* Content - not clickable */}
      <div className="px-[2.875rem] pt-[2.875rem] pb-[2rem]">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-5 px-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {product.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-8 px-1 leading-relaxed">
          {product.description}
        </p>
        {/* Learn More Link - goes to product page */}
        <Link href={`/products/${product.id}`}>
          <button className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold hover:gap-3 transition-all px-5 py-2.5 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 ml-1 cursor-pointer">
            <span className="text-sm">Learn More</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
