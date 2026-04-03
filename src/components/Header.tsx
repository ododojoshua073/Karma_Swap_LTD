import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/karma-swap-logo.jpeg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", href: "#home", scrollable: true },
  { label: "About Us", href: "#about", scrollable: true },
  { label: "Sustainability Impact", href: "#impact", scrollable: true },
  { label: "Contact", href: "#contact", scrollable: true },
  { label: "Blog", href: "/blog", scrollable: false },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => scrollTo("#home")}
          className="flex items-center gap-2"
        >
          <img
            src={logo}
            alt="Karma Swap logo"
            className="w-9 h-9 rounded-full object-cover"
          />
          <span className="font-bold text-lg text-foreground">Karma Swap</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) =>
            item.scrollable ? (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ),
          )}
          <Button size="sm" onClick={() => scrollTo("#careers")}>
            Join Us
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-b">
          <nav className="container flex flex-col gap-3 py-4">
            {navItems.map((item) =>
              item.scrollable ? (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
            <Button
              size="sm"
              className="w-fit"
              onClick={() => scrollTo("#careers")}
            >
              Join Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
