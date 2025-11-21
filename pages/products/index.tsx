"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/Products/ProductCard";
import { products } from "@/data/products";
import PageBanner from "@/components/Layout/PageBanner";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="products-page">
      <PageBanner
        title="Our Products"
        subtitle="Innovative energy solutions designed for the future"
      />

      {/* Products Grid */}
      <section className="products-grid-section">
        <div className="products-grid-container">
          <div className="products-grid">
            {currentProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="products-pagination">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="products-pagination-button products-pagination-prev"
              >
                <ChevronLeft size={20} />
                <span>Previous</span>
              </button>

              <div className="products-pagination-numbers">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`products-pagination-number ${
                        currentPage === page ? "active" : ""
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="products-pagination-button products-pagination-next"
              >
                <span>Next</span>
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
