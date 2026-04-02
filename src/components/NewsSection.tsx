import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const articles = [
  {
    slug: "karma-swap-launches-in-lagos",
    category: "Company Update",
    date: "Feb 20, 2026",
    title: "Karma Swap Officially Launches in Lagos",
    excerpt: "Our MVP is live — connecting communities in Lagos to trade, share, and reduce waste through karma points.",
    featured: true,
  },
  {
    slug: "circular-economy-nigeria",
    category: "Sustainability",
    date: "Feb 14, 2026",
    title: "Why Nigeria Needs a Circular Economy Now",
    excerpt: "With rising inflation and growing waste, a karma-based trade system offers an equitable, planet-friendly alternative.",
  },
  {
    slug: "meet-the-founders",
    category: "Press",
    date: "Feb 5, 2026",
    title: "Meet the Four Young Founders Behind Karma Swap",
    excerpt: "A look at the bootstrapped team from Ibadan building one of Nigeria's most ambitious sustainability platforms.",
  },
];

const NewsSection = () => (
  <section id="news" className="py-20 bg-muted/50">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">News & Updates</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          The latest from Karma Swap — company milestones, sustainability insights, and press coverage.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {articles.map((article, i) => (
          <motion.article
            key={article.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
          >
            {/* Color bar */}
            <div className="h-1.5 bg-primary" />

            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Badge variant="secondary" className="text-xs">{article.category}</Badge>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {article.date}
                </span>
              </div>

              <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground flex-1">{article.excerpt}</p>

              <Link
                to={`/blog/${article.slug}`}
                className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-4 hover:underline"
              >
                Read more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" size="lg" asChild>
          <Link to="/blog">View All Posts <ArrowRight className="w-4 h-4 ml-1" /></Link>
        </Button>
      </div>
    </div>
  </section>
);

export default NewsSection;
