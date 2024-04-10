"use client";

import { motion } from "framer-motion";
import { LampContainer } from "./lamp-comtainer";

export function LampComponent() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-20 bg-gradient-to-br from-neutral-300 to-neutral-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Plans That
        <br /> Fit You Best
      </motion.h1>
    </LampContainer>
  );
}
