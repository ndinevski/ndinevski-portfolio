"use client";

import { motion } from "framer-motion";

import { dabbleTechnologies, technologies } from "@/lib/consts";

export default function TechnologyShowcase() {
  return (
    <div className="w-full mx-auto max-w-4xl  text-white p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-6">What I work with everyday</h2>
      <motion.div
        className="grid grid-cols-5 max-md:grid-cols-3 text-center gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {technologies.map((tech) => (
          <motion.div
            key={tech.name}
            className="flex flex-col items-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            transition={{ duration: 0.5 }}
          >
            <tech.icon className="text-4xl mb-2" />
            <span className="text-sm text-gray-400">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
      <h2 className="mt-14 text-3xl font-bold mb-6">What I have worked with</h2>
      <motion.div
        className="grid grid-cols-5 max-md:grid-cols-3 text-center gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {dabbleTechnologies.map((tech) => (
          <motion.div
            key={tech.name}
            className="flex flex-col items-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            transition={{ duration: 0.5 }}
          >
            <tech.icon className="text-4xl mb-2" />
            <span className="text-sm text-gray-400">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
