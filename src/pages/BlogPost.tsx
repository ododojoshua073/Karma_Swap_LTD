import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { updateSEO, pageConfigs } from "@/lib/seo";


const allPosts = [
  {
    slug: "karma-swap-launches-in-lagos",
    category: "Company Update",
    date: "Feb 20, 2026",
    author: "Ododo Joshua",
    title: "Karma Swap Officially Launches in Lagos",
    excerpt:
      "Our MVP is live — connecting communities in Lagos to trade, share, and reduce waste through karma points. Here's what we've built and where we're headed.",
    content: `
      <h2>The Launch</h2>
      <p>After months of development and community testing, we're thrilled to announce that Karma Swap is now officially live in Lagos. Our MVP represents a fundamental shift in how communities can interact with waste and consumption.</p>

      <h2>What We've Built</h2>
      <p>Karma Swap is a cash-free circular economy platform that allows users to trade items based on karma points. Rather than traditional monetary transactions, our community members earn karma points by contributing items, volunteer time, or knowledge to the platform.</p>
      
      <p>The MVP includes:</p>
      <ul>
        <li>An intuitive marketplace interface for browsing and trading items</li>
        <li>Karma point system for tracking contribution value</li>
        <li>User profiles with reputation systems</li>
        <li>Real-time notifications for trades and interactions</li>
        <li>Community forums for discussion and support</li>
      </ul>

      <h2>The Impact</h2>
      <p>In our first month, we've onboarded over 500 community members across Lagos, with more than 200 successful trades completed. The platform has kept over 2 tons of items out of landfills.</p>

      <h2>What's Next</h2>
      <p>We're committed to expanding to other cities in Nigeria and beyond. Our roadmap includes mobile app development, integration with local businesses, and the introduction of specialized karma point types for different community contributions.</p>
    `,
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
    content: `
      <h2>The Current Challenge</h2>
      <p>Nigeria faces mounting pressure from two converging crises: economic inflation that makes it increasingly difficult for citizens to afford basic goods, and environmental degradation from unsustainable consumption patterns.</p>

      <h2>The Circular Economy Solution</h2>
      <p>Circular economy principles offer a proven pathway to address both challenges simultaneously. By shifting from a linear "take-make-dispose" model to a circular one where items are reused, repaired, and redistributed, we can:</p>
      
      <ul>
        <li>Reduce the financial burden on households</li>
        <li>Extend product lifecycles and reduce waste</li>
        <li>Create new economic opportunities</li>
        <li>Build stronger communities</li>
      </ul>

      <h2>Why Now?</h2>
      <p>The convergence of digital technology, changing consumer preferences, and economic necessity makes this the perfect moment for Nigeria to lead in circular economy innovation.</p>

      <h2>The Karma Swap Vision</h2>
      <p>We believe that platforms like Karma Swap can democratize access to goods and services while building a more sustainable future for Nigeria.</p>
    `,
  },
  {
    slug: "meet-the-founders",
    category: "Press",
    date: "Feb 5, 2026",
    author: "Karma Swap Team",
    title: "Meet the Four Young Founders Behind Karma Swap",
    excerpt:
      "A look at the bootstrapped team from Ibadan building one of Nigeria's most ambitious sustainability platforms — no rich families, just passion.",
    content: `
      <h2>From Ibadan to Lagos</h2>
      <p>The Karma Swap founding team began as friends discussing environmental challenges over coffee in Ibadan. What started as casual conversations evolved into a mission to create tangible change in how Nigerians consume and share resources.</p>

      <h2>Our Founder Journey</h2>
      <p>Our team members come from diverse backgrounds in technology, environmental science, and community development. What unites us is a shared commitment to solving real-world problems using technology.</p>

      <h2>The Bootstrapping Story</h2>
      <p>Unlike many startups, Karma Swap was built entirely through organic growth and personal investment. No venture capital, no angel investors with strings attached — just four young Nigerians with a vision and determination to prove that building sustainable businesses requires neither privilege nor external pressure.</p>

      <h2>The Community First Approach</h2>
      <p>Every decision we make is guided by our commitment to our community members. We listen, we iterate, and we continuously improve based on real feedback from users.</p>
    `,
  },
  {
    slug: "karma-points-explained",
    category: "Product",
    date: "Jan 28, 2026",
    author: "Shokefun Daniel",
    title: "How Karma Points Work: A Simple Guide",
    excerpt:
      "Karma points are the heart of our platform. Learn how earning, spending, and gifting points creates a cash-free economy that benefits everyone.",
    content: `
      <h2>Understanding Karma Points</h2>
      <p>Karma points are the currency of the Karma Swap ecosystem. They represent value contributed to the community and can be used to acquire goods and services from other members.</p>

      <h2>Earning Karma Points</h2>
      <p>There are multiple ways to earn karma points:</p>
      
      <ul>
        <li><strong>Sharing Items:</strong> List items you no longer need — earn points based on item value</li>
        <li><strong>Volunteering:</strong> Contribute time to community activities</li>
        <li><strong>Knowledge Sharing:</strong> Teach workshops or mentor community members</li>
        <li><strong>Referrals:</strong> Invite friends to join the platform</li>
      </ul>

      <h2>Spending Karma Points</h2>
      <p>Once earned, points can be used to acquire items from other community members or access services. The exchange rate is transparent and fair.</p>

      <h2>The Multiplier Effect</h2>
      <p>The beauty of our system is that it creates a virtuous cycle. As you contribute more, you earn more. As you earn more, you can acquire more, which means you might have items to share again.</p>

      <h2>Building Trust Through Points</h2>
      <p>Karma points also serve as a reputation indicator. Members with higher karma accumulation are trusted contributors to the community.</p>
    `,
  },
  {
    slug: "waste-crisis-west-africa",
    category: "Sustainability",
    date: "Jan 15, 2026",
    author: "Ikheloa Nathan",
    title: "The Waste Crisis in West Africa — And How We Can Help",
    excerpt:
      "Over 30 million tons of waste are generated annually in Nigeria alone. Community-driven reuse platforms like Karma Swap are part of the solution.",
    content: `
      <h2>The Scale of the Problem</h2>
      <p>West Africa generates over 150 million tons of waste annually. In Nigeria alone, that number exceeds 30 million tons per year. Much of this waste ends up in landfills or polluting waterways, devastating ecosystems and public health.</p>

      <h2>Environmental Impact</h2>
      <p>The waste crisis has cascading effects:</p>
      
      <ul>
        <li>Soil contamination from landfills</li>
        <li>Water pollution from improper disposal</li>
        <li>Air pollution from waste burning</li>
        <li>Loss of biodiversity in affected areas</li>
      </ul>

      <h2>The Reuse Revolution</h2>
      <p>Community-driven reuse platforms offer a powerful alternative. By extending the lifespan of products through sharing and trading, we can dramatically reduce the volume of waste generated.</p>

      <h2>Karma Swap's Role</h2>
      <p>We're committed to keeping items out of landfills. Every item traded on our platform is an item not destined for disposal. Our goal is to divert millions of tons of waste from landfills across West Africa.</p>

      <h2>Join the Movement</h2>
      <p>Every action counts. By participating in the circular economy, you're not just saving money — you're helping to heal our planet.</p>
    `,
  },
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = allPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      updateSEO({
        ...pageConfigs.blogPost(
          post.slug,
          post.title,
          post.excerpt,
          post.author,
          post.date,
        ),
        ogImage:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/oK78G2hvCpgDSBlGeK39Ejzi5xP2/social-images/social-1773917228434-KarmaSwap_logo.jpg.webp",
        twitterImage:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/oK78G2hvCpgDSBlGeK39Ejzi5xP2/social-images/social-1773917228434-KarmaSwap_logo.jpg.webp",
      });
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-24">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Article Not Found
            </h1>
            <p className="text-muted-foreground mb-6">
              Sorry, we couldn't find the article you're looking for.
            </p>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container max-w-3xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button variant="ghost" size="sm" asChild>
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
              </Link>
            </Button>
          </motion.div>

          {/* Article Header */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-12"
          >
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge>{post.category}</Badge>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <User className="w-4 h-4" />
                {post.author}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Share Buttons */}
            <div className="flex items-center gap-3 pb-6 border-b border-border/50">
              <span className="text-sm text-muted-foreground">Share:</span>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: post.title,
                      text: post.excerpt,
                      url: window.location.href,
                    });
                  }
                }}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-sm font-medium"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </motion.article>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="prose prose-invert max-w-none mb-12"
          >
            <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="prose dark:prose-invert max-w-none text-muted-foreground"
                style={
                  {
                    "--tw-prose-body": "var(--muted-foreground)",
                    "--tw-prose-headings": "var(--foreground)",
                  } as React.CSSProperties
                }
              ></div>
            </div>
          </motion.div>

          {/* Author Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-card border rounded-xl p-6 mb-12"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{post.author}</h3>
                <p className="text-sm text-muted-foreground">
                  Author at Karma Swap
                </p>
              </div>
            </div>
          </motion.div>

          {/* Related Articles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {allPosts
                .filter((p) => p.slug !== slug && p.category === post.category)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    to={`/blog/${relatedPost.slug}`}
                    className="group bg-card border rounded-lg p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                  >
                    <Badge variant="secondary" className="mb-3">
                      {relatedPost.category}
                    </Badge>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
