"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8 text-center"
    >
      {/* FOTO TENGAH */}
      <div className="flex justify-center">
        <div className="relative w-40 h-40 md:w-52 md:h-52 overflow-hidden rounded-xl border-4 border-black/30 shadow-xl">
          <Image
            src="/eq.png"
            alt="Profile photo"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* NAMA */}
      <h2 className="text-3xl font-extrabold text-primary">
        Mohammad Rizqi Ar Royyan
      </h2>

      {/* DESKRIPSI */}
      <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
        Hi, I’m Eqi — a dedicated tech learner and aspiring full-stack developer
        who’s passionate about exploring modern tools, building clean
        interfaces, and understanding how real systems work. With growing
        experience in TypeScript, React, and Next.js, I love turning ideas into
        smooth, functional projects while constantly pushing myself to learn
        deeper and improve my craft every day.
      </p>

      <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
        My journey in tech began with a curiosity for how things work and a drive
        to solve problems through code. Along the way, I’ve built projects,
        explored modern tools, and sharpened my skills in web development. I
        believe in writing clean code, learning continuously, and growing step by
        step as a developer.
      </p>

      <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
        When I’m not coding, I’m usually exploring new tools, learning fresh
        tech, or sharing ideas with other developers. Let’s connect and create
        something great together!
      </p>
    </motion.div>
  );
}
