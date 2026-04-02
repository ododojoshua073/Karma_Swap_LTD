import { motion } from "framer-motion";
import { Download, FileText, Image, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logoIcon from "@/assets/logo-icon.jpeg";
import logoWhiteBg from "@/assets/logo-white-bg.jpeg";
import logoGradient from "@/assets/logo-gradient.jpeg";

const logos = [
  { src: logoIcon, label: "Icon (Green BG)" },
  { src: logoWhiteBg, label: "Full Logo (Light)" },
  { src: logoGradient, label: "Full Logo (Dark)" },
];

const logoFiles = [
  "/logos/Karma_Swap_logo_(ICON).jpeg",
  "/logos/Karma_Swap_logo_(white bgt).jpeg",
  "/logos/Karma_Swap_logo_(PNG).png",
  "/logos/Karma_Swap_logo_(side_layout).jpeg",
];

const downloadAllLogos = () => {
  logoFiles.forEach((file) => {
    const a = document.createElement("a");
    a.href = file;
    a.download = file.split("/").pop() || "";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
};

const assets = [
  {
    icon: Image,
    title: "Logo Pack",
    description:
      "Primary logo, monochrome, and icon versions in PNG & JPEG formats.",
    action: downloadAllLogos,
    label: "Download Logos",
  },
  {
    icon: FileText,
    title: "Press Kit PDF",
    description:
      "Company overview, founder bios, key metrics, and brand guidelines.",
    file: "/docs/Karma Swap Revolutionizing Nigerias Circular Economy.pdf",
    label: "Download Press Kit (.pdf)",
  },
  {
    icon: Package,
    title: "Investor One-Pager",
    description:
      "Concise deck covering vision, traction, market opportunity, and ask.",
    file: "/docs/one_pager_investor_deck.pdf",
    label: "Download One-Pager (.pdf)",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

const MediaKit = () => (
  <div className="min-h-screen bg-background">
    {/* Top bar */}
    <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b">
      <div className="container flex items-center h-16 gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    </header>

    <main className="container py-16 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Media Kit
        </h1>
        <p className="text-muted-foreground mb-12 max-w-xl">
          Everything journalists, partners, and investors need — logos, press
          materials, and our investor one-pager. All assets are free to use with
          proper attribution.
        </p>
      </motion.div>

      {/* Company snapshot */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mb-14"
      >
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Company Overview
        </h2>
        <div className="bg-card border rounded-lg p-6 space-y-3 text-sm text-muted-foreground leading-relaxed">
          <p>
            <span className="font-semibold text-foreground">Name:</span> Karma
            Swap Ltd
          </p>
          <p>
            <span className="font-semibold text-foreground">Founded:</span>{" "}
            2026, Ibadan, Nigeria
          </p>
          <p>
            <span className="font-semibold text-foreground">Industry:</span>{" "}
            Circular Economy / Sustainability Tech
          </p>
          <p>
            <span className="font-semibold text-foreground">Mission:</span>{" "}
            Fight waste and inflation through community-powered, cash-free
            trades using karma points.
          </p>
          <p>
            <span className="font-semibold text-foreground">Founders:</span>{" "}
            Ododo Joshua (CEO), Ikheloa Nathan (CGO/COO), Iroye Peace Timileyin
            (CPO), Shokefun Daniel (CTO)
          </p>
          <p>
            <span className="font-semibold text-foreground">Status:</span>{" "}
            Bootstrapped, CAC-Registered, Pre-Revenue
          </p>
        </div>
      </motion.section>

      {/* Downloadable assets */}
      <h2 className="text-xl font-semibold text-foreground mb-6">
        Downloadable Assets
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {assets.map((a, i) => (
          <motion.div
            key={a.title}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-2">
                  <a.icon className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-base">{a.title}</CardTitle>
                <CardDescription className="text-xs">
                  {a.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                {"action" in a ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full gap-2"
                    onClick={a.action as () => void}
                  >
                    <Download className="w-4 h-4" /> {a.label}
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full gap-2"
                    asChild
                  >
                    <a href={(a as any).file} download>
                      <Download className="w-4 h-4" /> {a.label}
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Brand guidelines */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Brand Colours
        </h2>
        <div className="flex flex-wrap gap-4">
          {[
            { name: "Forest Green", hex: "#228B22", cls: "bg-primary" },
            { name: "Light Green", hex: "#90EE90", cls: "bg-accent" },
            { name: "Off-White", hex: "#F8F9FA", cls: "bg-background border" },
            { name: "Dark Text", hex: "#1A1A1A", cls: "bg-foreground" },
          ].map((c) => (
            <div key={c.name} className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-md ${c.cls}`} />
              <div>
                <p className="text-sm font-medium text-foreground">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </main>
  </div>
);

export default MediaKit;
