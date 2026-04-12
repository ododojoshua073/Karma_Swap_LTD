import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { updateSEO, pageConfigs } from "@/lib/seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
    updateSEO(pageConfigs.notFound);
  }, [location.pathname]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut", 
      },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center overflow-hidden relative p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-2xl mx-auto w-full text-center"
      >
        {/* 404 Number */}
        <div className="mb-8">
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="text-8xl sm:text-9xl font-black bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent"
            >
              404
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-12 h-12 border-2 border-primary/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-10 h-10 bg-primary/10 rounded"
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>

        {/* Heading */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3">
            Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Oops! It looks like you've wandered off the path. The page you're
            looking for doesn't exist in our circular economy platform.
          </p>
        </motion.div>

        {/* Error Path */}
        <motion.div
          variants={itemVariants}
          className="mb-10 p-4 rounded-lg bg-muted/50 border border-border/50 backdrop-blur"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground overflow-auto">
            <span className="truncate">{location.pathname}</span>
            <span className="text-xs">Not found</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            variant="default"
            size="lg"
            asChild
            className="w-full sm:w-auto group"
          >
            <Link to="/" className="inline-flex items-center gap-2">
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            asChild
            className="w-full sm:w-auto group"
          >
            <Link to="/blog" className="inline-flex items-center gap-2">
              <Search className="w-5 h-5" />
              <span>Explore Blog</span>
            </Link>
          </Button>
        </motion.div>

        {/* Suggestion section */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-border/50"
        >
          <p className="text-sm text-muted-foreground mb-4">
            What you might be looking for:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: Home,
                label: "Homepage",
                href: "/",
              },
              {
                icon: Search,
                label: "Blog",
                href: "/blog",
              },
              {
                icon: ArrowLeft,
                label: "Go Back",
                href: "#",
                onClick: () => window.history.back(),
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  to={item.href}
                  onClick={item.onClick}
                  className="flex flex-col items-center gap-2 p-3 rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                >
                  <item.icon className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {item.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Footer text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-6 left-0 right-0 text-center text-xs text-muted-foreground/50"
      >
        Error Code: 404 | Path: {location.pathname}
      </motion.div>
    </div>
  );
};

export default NotFound;
