import { motion } from "framer-motion";
import { Calendar, ArrowLeft, ArrowRight, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const posts = [
  {
    slug: "karma-swap-launches-in-lagos",
    category: "Company Update",
    date: "Feb 20, 2026",
    author: "Ododo Joshua",
    title: "Karma Swap Officially Launches in Lagos",
    excerpt: "Our MVP is live — connecting communities in Lagos to trade, share, and reduce waste through karma points. Here's what we've built and where we're headed.",
  },
  {
    slug: "circular-economy-nigeria",
    category: "Sustainability",
    date: "Feb 14, 2026",
    author: "Jimi-George Pelumi",
    title: "Why Nigeria Needs a Circular Economy Now",
    excerpt: "With rising inflation and growing waste, a karma-based trade system offers an equitable, planet-friendly alternative for millions of Nigerians.",
  },
  {
    slug: "meet-the-founders",
    category: "Press",
    date: "Feb 5, 2026",
    author: "Karma Swap Team",
    title: "Meet the Four Young Founders Behind Karma Swap",
    excerpt: "A look at the bootstrapped team from Ibadan building one of Nigeria's most ambitious sustainability platforms — no rich families, just passion.",
  },
  {
    slug: "karma-points-explained",
    category: "Product",
    date: "Jan 28, 2026",
    author: "Shokefun Daniel",
    title: "How Karma Points Work: A Simple Guide",
    excerpt: "Karma points are the heart of our platform. Learn how earning, spending, and gifting points creates a cash-free economy that benefits everyone.",
  },
  {
    slug: "waste-crisis-west-africa",
    category: "Sustainability",
    date: "Jan 15, 2026",
    author: "Ikheloa Nathan",
    title: "The Waste Crisis in West Africa — And How We Can Help",
    excerpt: "Over 30 million tons of waste are generated annually in Nigeria alone. Community-driven reuse platforms like Karma Swap are part of the solution.",
  },
];

const Blog = () => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-24 pb-20">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link to="/"><ArrowLeft className="w-4 h-4 mr-1" /> Back to Home</Link>
          </Button>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Blog & News</h1>
          <p className="text-muted-foreground">
            Company updates, sustainability insights, and press coverage from the Karma Swap team.
          </p>
        </motion.div>

        <div className="space-y-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" /> {post.date}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <User className="w-3 h-3" /> {post.author}
                </span>
              </div>

              <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>

              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                Read full article <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Blog;
