import { Mail, Phone } from "lucide-react";
import logo from "@/assets/karma-swap-logo.jpeg";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.13z" />
  </svg>
);

const socials = [
  { icon: FaXTwitter, href: "https://x.com/KarmaSwapNG", label: "X / Twitter" },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/karmaswap.ng?igsh=MWg1ODhrN3poY2V6Yg%3D%3D&utm_source=qr",
    label: "Instagram",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/company/karmaswap",
    label: "LinkedIn",
  },
  {
    icon: TikTokIcon,
    href: "https://www.tiktok.com/@karmaswap_ng?is_from_webapp=1&sender_device=pc",
    label: "TikTok",
  },
];

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-12">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Karma Swap logo"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-bold">Karma Swap Ltd</span>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/70">
          {["Home", "About", "Impact", "Careers", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-primary-foreground transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            className="hover:text-primary-foreground transition-colors"
          >
            Privacy Policy
          </a>
        </nav>

        <div className="flex gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-primary-foreground/70 hover:text-primary transition-colors"
            >
              <s.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/70 mt-6">
        <a
          href="mailto:officialkarmaswap@gmail.com"
          className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
        >
          <Mail className="w-4 h-4" /> officialkarmaswap@gmail.com
        </a>
        <a
          href="tel:+2349131718523"
          className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
        >
          <Phone className="w-4 h-4" /> +234 913 171 8523
        </a>
      </div>

      <div className="text-center text-sm text-primary-foreground/50 mt-8">
        © 2026 Karma Swap Ltd. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
