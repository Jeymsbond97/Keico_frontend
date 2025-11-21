"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import PageBanner from "@/components/Layout/PageBanner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact-page">
      <PageBanner
        title="Get in Touch"
        subtitle="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      />

      {/* Contact Information Section */}
      <section className="contact-section contact-info">
        <div className="contact-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="contact-info-header"
          >
            <h2 className="contact-info-title">Contact Information</h2>
          </motion.div>
          <div className="contact-info-grid">
            <motion.a
              href="https://www.google.com/maps/search/?api=1&query=경기도+파주시+광인사길+103"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="contact-info-card contact-info-card-link"
            >
              <div className="contact-info-icon-wrapper">
                <MapPin className="contact-info-icon" />
              </div>
              <h3 className="contact-info-card-title">Address</h3>
              <p className="contact-info-card-text">
                경기도 파주시 광인사길 103, 201ㆍ203
              </p>
            </motion.a>
            <motion.a
              href="tel:+82267390125"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="contact-info-card contact-info-card-link"
            >
              <div className="contact-info-icon-wrapper">
                <Phone className="contact-info-icon" />
              </div>
              <h3 className="contact-info-card-title">Phone</h3>
              <p className="contact-info-card-text">Tel: 02-6739-0125</p>
              <p className="contact-info-card-text">Fax: 031-950-4621</p>
            </motion.a>
            <motion.a
              href="mailto:info@keicoplus.com"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="contact-info-card contact-info-card-link"
            >
              <div className="contact-info-icon-wrapper">
                <Mail className="contact-info-icon" />
              </div>
              <h3 className="contact-info-card-title">Email</h3>
              <p className="contact-info-card-text">info@keicoplus.com</p>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-section contact-map-section">
        <div className="contact-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="contact-map-container"
          >
            <h2 className="contact-map-title">Our Location</h2>
            <div className="contact-map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.5!2d126.8!3d37.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ4JzAwLjAiTiAxMjbCsDQ4JzAwLjAiRQ!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="contact-map"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section contact-form-section">
        <div className="contact-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="contact-form-container"
          >
            <h2 className="contact-form-title">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-group">
                <label htmlFor="name" className="contact-form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-form-input"
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="email" className="contact-form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact-form-input"
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="phone" className="contact-form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="contact-form-input"
                  placeholder="+82 10-1234-5678"
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="subject" className="contact-form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="contact-form-input"
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="message" className="contact-form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="contact-form-textarea"
                />
              </div>
              <button type="submit" className="contact-form-button">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
