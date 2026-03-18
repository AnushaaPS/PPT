import { motion } from "framer-motion";

interface SlideProgressProps {
  current: number;
  total: number;
}

const SlideProgress = ({ current, total }: SlideProgressProps) => {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <motion.div
          key={index}
          className={`h-2 rounded-full transition-all duration-300 ${
            index === current 
              ? "w-8 bg-primary" 
              : index < current 
                ? "w-2 bg-primary/50" 
                : "w-2 bg-muted"
          }`}
          initial={{ scale: 0.8 }}
          animate={{ scale: index === current ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
        />
      ))}
    </div>
  );
};

export default SlideProgress;
