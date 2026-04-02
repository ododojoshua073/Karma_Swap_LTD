import { motion } from "framer-motion";
import { Rocket, TrendingUp, Users, Globe } from "lucide-react";

const milestones = [
  { icon: Rocket, phase: "Phase 1", title: "MVP Launch in Lagos 2026", desc: "Launch core swap & gifting features. First 10,000 users." },
  { icon: TrendingUp, phase: "Phase 2", title: "National Expansion & Pre-Seed", desc: "Expand to major Nigerian cities. Secure pre-seed funding." },
  { icon: Users, phase: "Phase 3", title: "2M+ Users & Seed Funding", desc: "Scale user base, introduce karma marketplace, raise seed round." },
  { icon: Globe, phase: "Long-term", title: "West Africa & Profitability by 2029", desc: "Dominate West African market. Achieve profitability." },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const AboutSection = () => (
  <section id="about" className="py-20 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">About Karma Swap</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Karma Swap was founded in 2026 by four young Nigerians who saw an opportunity to fight waste
          and inflation through sustainable trades. Bootstrapped from Ibadan with zero external funding,
          we're building a platform where communities trade items using karma points — no cash needed.
        </p>
        <p className="text-primary font-semibold text-lg">
          "Our Vision: To create a world where nothing goes to waste and every item has value within a global community."
        </p>
      </motion.div>

      <h3 className="text-2xl font-bold text-foreground text-center mb-10">Our 3.5-Year Vision</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {milestones.map((m, i) => (
          <motion.div
            key={m.phase}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
              <m.icon className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">{m.phase}</span>
            <h4 className="font-bold text-foreground mt-1 mb-2">{m.title}</h4>
            <p className="text-sm text-muted-foreground">{m.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="/media-kit"
          className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
        >
          View Media Kit & Downloads →
        </a>
      </div>
    </div>
  </section>
);

export default AboutSection;
