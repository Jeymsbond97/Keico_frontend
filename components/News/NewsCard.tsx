'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { News } from '@/types';

interface NewsCardProps {
  news: News;
  index?: number;
  featured?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, index = 0, featured = false }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        <Link href={`/news/${news.id}`}>
          <div className="md:flex">
            <div className="relative md:w-1/2 h-64 md:h-auto cursor-pointer">
              <Image
                src={news.image}
                alt={news.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 mb-4">
                <Calendar size={14} />
                <span>{formatDate(news.date)}</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-full text-xs">
                  {news.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {news.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 leading-relaxed">
                {news.description}
              </p>
              <div className="flex items-center text-purple-600 dark:text-purple-400 font-semibold group-hover:gap-2 transition-all cursor-pointer">
                <span>Read More</span>
                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
    >
      {/* Image - clickable */}
      <Link href={`/news/${news.id}`}>
        <div className="relative h-56 overflow-hidden flex-shrink-0 cursor-pointer">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>
      
      {/* Content - not clickable */}
      <div className="px-8 pt-8 pb-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-5 px-1">
          <Calendar size={12} />
          <span className="block">{formatDate(news.date)}</span>
          <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-full block">
            {news.category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-5 px-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2 block">
          {news.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-base line-clamp-3 mb-6 px-1 leading-relaxed flex-grow block">
          {news.description}
        </p>
        {/* Read More Link - goes to news detail */}
        <Link href={`/news/${news.id}`} className="mt-auto px-1">
          <button className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold text-sm hover:gap-3 transition-all px-5 py-2.5 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 block w-fit cursor-pointer">
            <span className="block">Read More</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform block" />
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default NewsCard;

