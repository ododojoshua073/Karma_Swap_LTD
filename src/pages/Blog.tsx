import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, ArrowRight, User, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { updateSEO, pageConfigs } from "@/lib/seo";

const posts = [
  {
    slug: "karma-swap-launches-in-lagos",
    category: "Company Update",
    date: "Feb 20, 2026",
    author: "Ododo Joshua",
    title: "Karma Swap Officially Launches in Lagos",
    excerpt:
      "Our MVP is live — connecting communities in Lagos to trade, share, and reduce waste through karma points. Here's what we've built and where we're headed.",
    featured: true,
  },
  {
    slug: "circular-economy-nigeria",
    category: "Sustainability",
    date: "Feb 14, 2026",
    author: "Jimi-George Pelumi",
    title: "Why Nigeria Needs a Circular Economy Now",
    excerpt:
      "With rising inflation and growing waste, a karma-based trade system offers an equitable, planet-friendly alternative for millions of Nigerians.",
  },
  {
    slug: "meet-the-founders",
    category: "Press",
    date: "Feb 5, 2026",
    author: "Karma Swap Team",
    title: "Meet the Four Young Founders Behind Karma Swap",
    excerpt:
      "A look at the bootstrapped team from Ibadan building one of Nigeria's most ambitious sustainability platforms — no rich families, just passion.",
  },
  {
    slug: "karma-points-explained",
    category: "Product",
    date: "Jan 28, 2026",
    author: "Shokefun Daniel",
    title: "How Karma Points Work: A Simple Guide",
    excerpt:
      "Karma points are the heart of our platform. Learn how earning, spending, and gifting points creates a cash-free economy that benefits everyone.",
  },
  {
    slug: "waste-crisis-west-africa",
    category: "Sustainability",
    date: "Jan 15, 2026",
    author: "Ikheloa Nathan",
    title: "The Waste Crisis in West Africa — And How We Can Help",
    excerpt:
      "Over 30 million tons of waste are generated annually in Nigeria alone. Community-driven reuse platforms like Karma Swap are part of the solution.",
  },
];

const categories = ["All", ...new Set(posts.map((p) => p.category))];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    updateSEO(pageConfigs.blog);
  }, []);

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  const featuredPost = posts.find((p) => p.featured);
  const otherPosts = filteredPosts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mb-16 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

          <div className="container relative z-10 max-w-4xl py-12 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-8"
            >
              <Button variant="ghost" size="sm" asChild className="mb-6">
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-1" /> Back to Home
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  Latest Updates
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text">
                Blog & News
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Company updates, sustainability insights, and press coverage
                from the Karma Swap team.
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Article */}
        {featuredPost &&
          (selectedCategory === "All" ||
            featuredPost.category === selectedCategory) && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="container max-w-4xl mb-20"
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="group relative bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-1/2 -right-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
                </div>

                <div className="relative p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                    <Badge variant="secondary">{featuredPost.category}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {featuredPost.date}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {featuredPost.title}
                  </h2>

                  <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </span>

                    <Link
                      to={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 group/link"
                    >
                      Read article
                      <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.section>
          )}

        {/* Articles Grid */}
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {otherPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group relative h-full bg-card border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 -right-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
                </div>

                <div className="relative p-6 flex flex-col h-full">
                  {/* Category & Date */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground mb-6 flex-1 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <User className="w-3 h-3" />
                      <span className="line-clamp-1">{post.author}</span>
                    </span>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/icon"
                    >
                      <ArrowRight className="w-4 h-4 group-hover/icon:translate-x-0.5 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* No results message */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground text-lg">
                No articles found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
