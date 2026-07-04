import React from "react";
import * as Icons from "lucide-react";

interface TechCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  glowColor: string;
  techs: string[];
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Responsive, component-driven, and highly optimized interfaces built using leading frameworks and tools.",
    iconName: "Laptop",
    glowColor: "rgba(6, 182, 212, 0.15)", // Cyan
    techs: ["React", "Next.js", "Angular", "Vue.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "backend",
    title: "Backend & Frameworks",
    description: "Robust, scale-ready backend technologies and languages powering secure system logic and database pipelines.",
    iconName: "Cpu",
    glowColor: "rgba(99, 102, 241, 0.15)", // Indigo
    techs: ["Node.js", "Python", "Java", ".NET", "PHP", "Laravel"],
  },
  {
    id: "mobile",
    title: "Mobile Engineering",
    description: "High-performance native and cross-platform applications built for iOS and Android.",
    iconName: "Smartphone",
    glowColor: "rgba(168, 85, 247, 0.15)", // Purple
    techs: ["React Native", "Flutter", "Expo"],
  },
  {
    id: "databases",
    title: "Databases & Storage",
    description: "Relational and non-relational database management systems tailored for secure and fast queries.",
    iconName: "Database",
    glowColor: "rgba(236, 72, 153, 0.15)", // Pink
    techs: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description: "Modern cloud provider configurations, server deployments, containerization, and build hosting.",
    iconName: "Cloud",
    glowColor: "rgba(20, 184, 166, 0.15)", // Teal
    techs: ["AWS", "Azure", "Google Cloud", "Vercel", "Docker"],
  },
  {
    id: "testing-quality",
    title: "Testing & Quality",
    description: "Automated test runner libraries and active diagnostic tools ensuring error-free user operations.",
    iconName: "Activity",
    glowColor: "rgba(245, 158, 11, 0.15)", // Amber
    techs: ["Jest", "Selenium", "Sentry"],
  },
];

const IconResolver: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const LucideIcon = (Icons as any)[name];
  if (!LucideIcon) return <Icons.Sparkles className={className} />;
  return <LucideIcon className={className} />;
};

const TechCategoryCard: React.FC<{ category: TechCategory }> = ({ category }) => {
  return (
    <div
      style={{ "--glow-color": category.glowColor } as React.CSSProperties}
      className="relative rounded-2xl glass-panel p-8 overflow-hidden group glow-border-hover transition-all duration-500 hover:-translate-y-1 hover:bg-slate-900/50 h-full"
    >
      {/* CSS-driven glow effect on hover */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--glow-color),transparent_70%)] opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

      {/* Decorative colored glow ball */}
      <div
        className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-[40px] opacity-10 group-hover:opacity-20 transition-all duration-500 pointer-events-none"
        style={{ backgroundColor: category.glowColor.split(",").slice(0, 3).join(",") + ", 0.4)" }}
      />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          {/* Card Icon */}
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-cyan group-hover:text-white group-hover:bg-gradient-to-tr group-hover:from-brand-indigo group-hover:to-brand-cyan transition-all duration-300 mb-6">
            <IconResolver name={category.iconName} className="w-6 h-6" />
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
            {category.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-white/50 leading-relaxed mb-6">
            {category.description}
          </p>
        </div>

        {/* Tech Badges List */}
        <div className="space-y-3 border-t border-white/5 pt-6">
          <div className="flex flex-wrap gap-2">
            {category.techs.map((tech) => (
              <div
                key={tech}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 border border-white/5 text-xs text-white/80 font-mono tracking-wide hover:border-brand-cyan/35 hover:text-white transition-all duration-200"
              >
                <Icons.Check className="w-3.5 h-3.5 text-brand-cyan shrink-0 animate-pulse" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Technologies: React.FC = () => {
  return (
    <section id="technologies" className="relative w-full py-24 bg-slate-950 px-6 lg:px-12 overflow-hidden border-t border-white/5">
      {/* Decorative glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-indigo/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
              <p className="text-brand-cyan text-[10px] font-mono font-bold tracking-widest uppercase">
                THE STACK
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
              Technologies We
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-indigo">
                Forge With
              </span>
            </h2>
          </div>
          <p className="text-white/50 text-xs sm:text-sm max-w-sm leading-relaxed md:text-right">
            We operate at the leading edge of modern engineering. Our technologies are selected for maximum performance, security, and developer velocity.
          </p>
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_CATEGORIES.map((category) => (
            <div key={category.id}>
              <TechCategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
