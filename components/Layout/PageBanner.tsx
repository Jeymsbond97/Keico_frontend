"use client";

import React from "react";
import { motion } from "framer-motion";

interface PageBannerProps {
  title: string;
  subtitle?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle }) => {
  return (
    <section className="page-banner">
      <div className="page-banner-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="page-banner-content"
        >
          <h1 className="page-banner-title">{title}</h1>
          {subtitle && <p className="page-banner-subtitle">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
};

export default PageBanner;
