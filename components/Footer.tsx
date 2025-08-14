"use client";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-800 pt-6 pb-8 max-w-3xl sm:w-3/4 mx-auto px-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Name */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Nikita Choudhary
        </p>

        {/* Social Icons + Cal.com */}
        <div className="flex flex-wrap gap-3 items-center text-white">
          <a
            href="https://www.linkedin.com/in/nikita-choudhary2005/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center"
          >
            <div className="p-3 rounded-lg transition group-hover:bg-gray-600">
              <Linkedin className="w-5 h-5" />
            </div>
          </a>

          <a
            href="https://github.com/nikitachoudhary114"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center"
          >
            <div className="p-3 rounded-lg transition group-hover:bg-gray-600">
              <Github className="w-5 h-5" />
            </div>
          </a>

          <a
            href="mailto:nikitachoudhary364@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center"
          >
            <div className="p-3 rounded-lg transition group-hover:bg-gray-600">
              <Mail className="w-5 h-5" />
            </div>
          </a>

          <a
            href="https://x.com/Nikita25586"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center"
          >
            <div className="p-3 rounded-lg transition group-hover:bg-gray-600">
              <Twitter className="w-5 h-5" />
            </div>
          </a>

          {/* Cal.com Booking */}
          <motion.a
            href="https://cal.com/nikita-choudhary-vq7xha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-black-500 hover:bg-black-600 text-white font-semibold rounded-lg shadow-md transition-transform border border-gray-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Meeting
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
