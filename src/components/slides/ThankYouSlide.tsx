import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const ThankYouSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="p-6 rounded-3xl bg-gradient-primary shadow-glow mb-8"
      >
        <MessageCircle className="w-16 h-16 text-primary-foreground" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-5xl md:text-7xl font-bold mb-4"
      >
        <span className="gradient-text">Thank You!</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-xl text-muted-foreground mb-8"
      >
        Questions & Discussion
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="space-y-1 text-sm text-muted-foreground"
      >
        <p>Anushaa P S, Sharmila P, Bhuvaneswari D, Jeyalakshmi K S, Alwyn Rajiv S, Pushpalatha G C</p>
        <p className="text-xs">anushaa110405@gmail.com | sharmilapakkiyarajan.1902@gmail.com</p>
      </motion.div>
    </div>
  );
};

export default ThankYouSlide;
