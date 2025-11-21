"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import NewsCard from "@/components/News/NewsCard";
import { news } from "@/data/news";
import PageBanner from "@/components/Layout/PageBanner";
import { Search, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"new" | "old">("new");
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 6;

  // Filter and sort news
  const filteredAndSortedNews = useMemo(() => {
    let filtered = news;

    // Search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort by date
    const sorted = [...filtered].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "new" ? dateB - dateA : dateA - dateB;
    });

    return sorted;
  }, [searchQuery, sortOrder]);

  const totalPages = Math.ceil(filteredAndSortedNews.length / newsPerPage);
  const startIndex = (currentPage - 1) * newsPerPage;
  const endIndex = startIndex + newsPerPage;
  const currentNews = filteredAndSortedNews.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Sample certificates data (you can replace with actual certificate images)
  const certificates = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      title: "ISO 9001 Certification",
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      title: "ISO 14001 Certification",
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop",
      title: "Energy Efficiency Award",
    },
    {
      id: "4",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop",
      title: "Green Technology Certification",
    },
    {
      id: "5",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      title: "Innovation Excellence Award",
    },
  ];

  return (
    <div className="news-page">
      <PageBanner
        title="News & Updates"
        subtitle="Stay informed about our latest developments and achievements"
      />

      {/* Search and Filter Section */}
      <section className="news-search-filter">
        <div className="news-search-filter-container">
          <div className="news-search-wrapper">
            <Search className="news-search-icon" size={20} />
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="news-search-input"
            />
          </div>

          <div className="news-filter-wrapper">
            <button
              onClick={() => {
                setSortOrder("new");
                setCurrentPage(1);
              }}
              className={`news-filter-sort-button ${
                sortOrder === "new" ? "active" : ""
              }`}
            >
              New
            </button>
            <button
              onClick={() => {
                setSortOrder("old");
                setCurrentPage(1);
              }}
              className={`news-filter-sort-button ${
                sortOrder === "old" ? "active" : ""
              }`}
            >
              Old
            </button>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="news-grid-section">
        <div className="news-grid-container">
          {currentNews.length > 0 ? (
            <>
              <div className="news-grid">
                {currentNews.map((item, index) => (
                  <NewsCard key={item.id} news={item} index={index} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="news-pagination">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="news-pagination-button news-pagination-prev"
                  >
                    <ArrowLeft size={18} />
                    <span>Prev</span>
                  </button>

                  <div className="news-pagination-info">
                    Page {currentPage} of {totalPages}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="news-pagination-button news-pagination-next"
                  >
                    <span>Next</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="news-empty">
              <p className="news-empty-text">No news found.</p>
            </div>
          )}
        </div>
      </section>

      {/* Certificates Section */}
      <section className="news-certificates">
        <div className="news-certificates-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="news-certificates-header"
          >
            <h2 className="news-certificates-title">Company Certificates</h2>
          </motion.div>

          <div className="news-certificates-slider-wrapper">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={40}
              slidesPerView={1}
              navigation={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              className="news-certificates-swiper"
            >
              {certificates.map((certificate) => (
                <SwiperSlide key={certificate.id}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="news-certificate-card"
                  >
                    <div className="news-certificate-image">
                      <Image
                        src={certificate.image}
                        alt={certificate.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="news-certificate-title">
                      {certificate.title}
                    </h3>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}

