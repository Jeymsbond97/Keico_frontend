"use client";

import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { products } from "@/data/products";
import PageBanner from "@/components/Layout/PageBanner";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link href="/products" className="text-purple-600 hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <PageBanner title={product.title} subtitle="Product Details" />

      {/* Product Header */}
      <section className="product-detail-header">
        <div className="product-detail-header-container">
          <div className="product-detail-header-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="product-detail-image"
            >
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="product-detail-content"
            >
              <span className="product-detail-category">{product.category}</span>
              <h1 className="product-detail-title">{product.title}</h1>
              <p className="product-detail-description">{product.description}</p>
              <button className="product-detail-button">Request Quote</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      {product.specifications && product.specifications.length > 0 && (
        <section className="product-detail-specs">
          <div className="product-detail-specs-container">
            <h2 className="product-detail-specs-title">Key Specifications</h2>
            <div className="product-detail-specs-grid">
              {product.specifications.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="product-detail-spec-item"
                >
                  <div className="product-detail-spec-icon">
                    <Check size={16} className="text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="product-detail-spec-text">{spec}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="product-detail-cta">
        <div className="product-detail-cta-container">
          <h2 className="product-detail-cta-title">
            Interested in this product?
          </h2>
          <p className="product-detail-cta-text">
            Contact us to learn more or request a quote
          </p>
          <Link href="/contact" className="product-detail-cta-button">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
