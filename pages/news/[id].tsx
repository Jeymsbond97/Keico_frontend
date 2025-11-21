"use client";

import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { news } from "@/data/news";
import PageBanner from "@/components/Layout/PageBanner";

export default function NewsDetail() {
  const router = useRouter();
  const { id } = router.query;

  const newsItem = news.find((n) => n.id === id);

  if (!newsItem) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">News not found</h1>
          {/* <Link href="/news" className="text-purple-600 hover:underline">
            Back to News
          </Link> */}
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="news-detail-page">
      <PageBanner title={newsItem.title} subtitle={newsItem.category} />

      {/* News Header */}
      <article className="news-detail-article">
        <div className="news-detail-container">
          {/* Header Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="news-detail-image"
          >
            <Image
              src={newsItem.image}
              alt={newsItem.title}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="news-detail-content"
          >
            {/* Meta Info */}
            <div className="news-detail-meta">
              <div className="news-detail-date">
                <Calendar size={16} />
                <span>{formatDate(newsItem.date)}</span>
              </div>
              <span className="news-detail-category">{newsItem.category}</span>
            </div>

            {/* Title */}
            <h1 className="news-detail-title">{newsItem.title}</h1>

            {/* Description */}
            <p className="news-detail-description">{newsItem.description}</p>

            {/* Content */}
            <div className="news-detail-body">{newsItem.content}</div>
          </motion.div>
        </div>
      </article>
    </div>
  );
}
