import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Sustainable community" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-4">
            Karma Swap Ltd
          </h1>
          <p className="text-lg sm:text-xl font-medium text-primary-foreground/90 mb-4">
            Creating a world where nothing goes to waste and every item has value within a global community
          </p>
          <p className="text-primary-foreground/75 mb-8 leading-relaxed">
            Founded in 2026 in Nigeria, Karma Swap is building a cash-free circular economy platform
            that empowers communities to reuse, share, and reduce waste through karma points-based trades.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <Button size="lg" onClick={() => scrollTo("#about")}>
              Learn More
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-green-800 font-extrabold hover:text-green-950 hover:bg-primary-foreground/10" onClick={() => scrollTo("#contact")}>
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-green-800 font-extrabold hover:text-green-950 hover:bg-primary-foreground/10" onClick={() => scrollTo("#about")}>
              View Our 3.5-Year Vision
            </Button>
          </div>

          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="px-3 py-1 text-xs font-semibold">
              Bootstrapped & CAC-Registered
            </Badge>
            <Badge variant="secondary" className="px-3 py-1 text-xs font-semibold">
              Youth-Led Innovation
            </Badge>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
