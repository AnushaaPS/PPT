import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import SlideProgress from "@/components/SlideProgress";
import ConferenceTitleSlide from "@/components/slides/ConferenceTitleSlide";
import OutlineSlide from "@/components/slides/OutlineSlide";
import IntroductionSlide from "@/components/slides/IntroductionSlide";
import ProblemStatementSlide from "@/components/slides/ProblemStatementSlide";
import LiteratureReviewSlide from "@/components/slides/LiteratureReviewSlide";
import MethodologySlide from "@/components/slides/MethodologySlide";
import QuestionBankSlide from "@/components/slides/QuestionBankSlide";
import ExamConfigSlide from "@/components/slides/ExamConfigSlide";
import QuestionSelectionSlide from "@/components/slides/QuestionSelectionSlide";
import AIRephrasingSlide from "@/components/slides/AIRephrasingSlide";
import GeneratedPaperSlide from "@/components/slides/GeneratedPaperSlide";
import ResultsSlide from "@/components/slides/ResultsSlide";
import BloomsTaxonomySlide from "@/components/slides/BloomsTaxonomySlide";
import ComplexitySlide from "@/components/slides/ComplexitySlide";
import ConclusionSlide from "@/components/slides/ConclusionSlide";
import ReferencesSlide from "@/components/slides/ReferencesSlide";
import ThankYouSlide from "@/components/slides/ThankYouSlide";

const slides = [
  ConferenceTitleSlide,       // 1
  OutlineSlide,               // 2
  IntroductionSlide,          // 3
  ProblemStatementSlide,      // 4
  LiteratureReviewSlide,      // 5
  MethodologySlide,           // 6
  QuestionBankSlide,          // 7
  ExamConfigSlide,            // 8
  QuestionSelectionSlide,     // 9
  AIRephrasingSlide,          // 10
  GeneratedPaperSlide,        // 11
  ResultsSlide,               // 12
  BloomsTaxonomySlide,        // 13
  ComplexitySlide,            // 14
  ConclusionSlide,            // 15
  ReferencesSlide,            // 16
  ThankYouSlide,              // 17
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    }
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "Home") {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goToSlide(slides.length - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      <header className="flex items-center justify-between px-6 py-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => goToSlide(0)}
            className="text-muted-foreground hover:text-foreground"
          >
            <Home className="w-5 h-5" />
          </Button>
          <span className="text-sm font-medium text-muted-foreground">
            MESMT-2026 — AI Question Paper Generation
          </span>
        </div>
        <SlideProgress current={currentSlide} total={slides.length} />
        <span className="text-sm text-muted-foreground">
          {currentSlide + 1} / {slides.length}
        </span>
      </header>

      <main className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="flex items-center justify-between px-6 py-4 border-t border-border/50">
        <Button
          variant="ghost"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="gap-2 text-muted-foreground hover:text-foreground disabled:opacity-30"
        >
          <ChevronLeft className="w-5 h-5" />
          Previous
        </Button>
        
        <div className="flex gap-1">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? "bg-primary w-4" 
                  : "bg-muted hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="gap-2 text-muted-foreground hover:text-foreground disabled:opacity-30"
        >
          Next
          <ChevronRight className="w-5 h-5" />
        </Button>
      </footer>
    </div>
  );
};

export default Index;
