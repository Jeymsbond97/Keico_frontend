"use client";

import React from "react";
import { Zap } from "lucide-react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl",
  };

  const iconSizes = {
    sm: 14,
    md: 18,
    lg: 22,
  };

  return (
    <div
      className={`flex items-center gap-1 ${className}`}
      style={{ fontFamily: "'Stack Sans Notch', sans-serif" }}
    >
      {/* KEICO - all blue */}
      <span className={`${sizeClasses[size]} font-bold text-[#3b82f6]`}>
        KEIC
      </span>

      {/* O with lightning bolt - blue with white lightning */}
      <span
        className={`${sizeClasses[size]} font-bold text-[#3b82f6] relative inline-block`}
      >
        O
        <Zap
          size={iconSizes[size]}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none"
          fill="white"
          strokeWidth={2.5}
        />
      </span>

      {/* PLUS - blue */}
      <span className={`${sizeClasses[size]} font-bold text-[#3b82f6] ml-1`}>
        PLUS
      </span>
    </div>
  );
};

export default Logo;
