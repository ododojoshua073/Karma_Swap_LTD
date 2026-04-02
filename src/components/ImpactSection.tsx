import { motion } from "framer-motion";
import { Recycle, Package, Heart, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const impacts = [
  { icon: Recycle, metric: "10,000+", label: "Tons of Waste Diverted (Projected)", desc: "Keeping usable items out of landfills through community trades." },
  { icon: Package, metric: "500K+", label: "Items Traded (Projected)", desc: "Connecting people with what they need, cash-free." },
  { icon: Heart, metric: "100+", label: "Communities Empowered", desc: "Building networks of sharing and generosity across Nigeria." },
  { icon: ShieldCheck, metric: "Zero", label: "Cash Required", desc: "Karma points make access inflation-proof and equitable." },
];

const ImpactSection = () => (
  <section id="impact" className="py-20 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Impact</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Reuse over waste. Inflation-proof access. Generosity through gifting and community drives.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {impacts.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-card border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 rounded-full bg-accent mx-auto flex items-center justify-center mb-4">
              <item.icon className="w-7 h-7 text-primary" />
            </div>
            <p className="text-3xl font-extrabold text-primary mb-1">{item.metric}</p>
            <p className="font-semibold text-foreground text-sm mb-2">{item.label}</p>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Button size="lg" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
          Partner With Us
        </Button>
      </div>
    </div>
  </section>
);

export default ImpactSection;
