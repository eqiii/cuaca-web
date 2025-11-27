"use client";
import { motion } from 'motion/react';
import { User } from 'lucide-react';
import Image from 'next/image';

export function AboutHeader() {
  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}

      >
         
        <div className="mb-6 bg-primary/5 text-primary border-primary/20"><h4>About me</h4></div>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
          Mohammad Rizqi Ar Royyan
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Full Stack Developer passionate about creating innovative solutions that bridge the gap between complex technology and user-friendly experiences.
        </p>
        
      </motion.div>
    </div>
  );
}