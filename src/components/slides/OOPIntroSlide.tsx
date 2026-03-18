import { motion } from "framer-motion";
import { Lock, GitBranch, Shapes, Eye } from "lucide-react";

const pillars = [
  { 
    icon: Lock, 
    title: "Encapsulation", 
    desc: "Bundling data and methods that operate on the data within a single unit",
    color: "primary"
  },
  { 
    icon: GitBranch, 
    title: "Inheritance", 
    desc: "Mechanism where one class acquires properties of another class",
    color: "secondary"
  },
  { 
    icon: Shapes, 
    title: "Polymorphism", 
    desc: "Ability of objects to take multiple forms through method overloading/overriding",
    color: "accent"
  },
  { 
    icon: Eye, 
    title: "Abstraction", 
    desc: "Hiding complex implementation details and showing only essential features",
    color: "destructive"
  },
];

const OOPIntroSlide = () => {
  return (
    <div className="flex flex-col h-full px-8 py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <span className="text-sm font-medium text-primary uppercase tracking-wider">Part 2</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">Object-Oriented Programming</h2>
        <p className="text-xl text-muted-foreground mt-4">The Four Pillars of OOP</p>
      </motion.div>

      <div className="flex-1 grid md:grid-cols-2 gap-6">
        {pillars.map((pillar, i) => {
          const Icon = pillar.icon;
          const colorClasses = {
            primary: "bg-primary/20 text-primary",
            secondary: "bg-secondary/20 text-secondary",
            accent: "bg-accent/20 text-accent",
            destructive: "bg-destructive/20 text-destructive",
          };
          
          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-glow transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${colorClasses[pillar.color as keyof typeof colorClasses]}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{pillar.title}</h3>
                  <p className="text-muted-foreground">{pillar.desc}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default OOPIntroSlide;
