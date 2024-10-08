import React from "react";
import Image from "next/image";
import { technologies } from "@/app/lib/constants";

const TechStack = () => (
  <section id="techstack" className="w-full py-20 bg-[#050112] text-white">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-gradient">My Tech Stack</h2>
      <div className="flex items-center flex-wrap justify-center gap-10">
        {technologies.map(({ name, icon }, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <div className="relative inline-flex items-center justify-center p-[2px] rounded-full overflow-hidden">
              {/* Glowing border */}
              <span className="absolute inset-0 rounded-full animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#050112_0%,#3b82f6_50%,#1e3a8a_100%)]" />

              {/* Image/icon */}
              <div className="relative h-20 w-20 rounded-full bg-black-100 flex items-center justify-center z-10">
                <Image src={icon} alt={name} width={60} height={60} />
              </div>
            </div>
            <p className="text-[10px]">{name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
