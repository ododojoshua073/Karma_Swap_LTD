/**
 * SEO Utility for managing meta tags dynamically on different pages
 * Helpful for SPAs that need page-specific meta tags, structured data, and canonical URLs
 */

export interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  keywords?: string;
  author?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleAuthor?: string;
  structuredData?: Record<string, any>;
}

export const updateSEO = (config: SEOConfig) => {
  // Update document title
  document.title = config.title;

  // Helper function to set or create meta tag
  const setMetaTag = (name: string, content: string, property = false) => {
    let tag = document.querySelector(
      property ? `[property="${name}"]` : `[name="${name}"]`
    ) as HTMLMetaElement;

    if (!tag) {
      tag = document.createElement("meta");
      if (property) {
        tag.setAttribute("property", name);
      } else {
        tag.setAttribute("name", name);
      }
      document.head.appendChild(tag);
    }

    tag.content = content;
  };

  // Core SEO meta tags
  setMetaTag("description", config.description);
  if (config.keywords) setMetaTag("keywords", config.keywords);
  if (config.author) setMetaTag("author", config.author);

  // Open Graph tags
  setMetaTag("og:title", config.ogTitle || config.title, true);
  setMetaTag("og:description", config.ogDescription || config.description, true);
  if (config.ogImage) setMetaTag("og:image", config.ogImage, true);
  setMetaTag("og:type", config.ogType || "website", true);
  setMetaTag("og:url", config.canonical || window.location.href, true);

  // Twitter tags
  setMetaTag("twitter:title", config.twitterTitle || config.title);
  setMetaTag(
    "twitter:description",
    config.twitterDescription || config.description
  );
  if (config.twitterImage) setMetaTag("twitter:image", config.twitterImage);

  // Article specific tags
  if (config.articlePublishedTime) {
    setMetaTag("article:published_time", config.articlePublishedTime, true);
  }
  if (config.articleModifiedTime) {
    setMetaTag("article:modified_time", config.articleModifiedTime, true);
  }
  if (config.articleAuthor) {
    setMetaTag("article:author", config.articleAuthor, true);
  }

  // Canonical URL
  if (config.canonical) {
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = config.canonical;
  }

  // Add structured data (JSON-LD)
  if (config.structuredData) {
    let script = document.querySelector(
      'script[type="application/ld+json"][data-seo="true"]'
    ) as HTMLScriptElement;

    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo", "true");
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(config.structuredData);
  }

  // Scroll to top
  window.scrollTo(0, 0);
};

// Predefined SEO configs for common pages
export const pageConfigs = {
  home: {
    title: "Karma Swap Ltd – Nigeria's Circular Economy Startup",
    description:
      "Karma Swap is building a cash-free circular economy platform that empowers Nigerian communities to reuse, share, and reduce waste through karma points-based trades.",
    canonical: "https://www.officialkarmaswap.com/",
    keywords:
      "circular economy, waste reduction, karma points, Nigeria, sustainable trading, community reuse",
    ogType: "website",
  },

  mediaKit: {
    title: "Media Kit - Karma Swap Ltd",
    description:
      "Download Karma Swap's media kit with logos, brand guidelines, and press materials.",
    canonical: "https://www.officialkarmaswap.com/media-kit",
    keywords: "media kit, press kit, brand guidelines, logo downloads",
    ogType: "website",
  },

  blog: {
    title: "Blog & News - Karma Swap Ltd",
    description:
      "Read the latest from Karma Swap — company updates, sustainability insights, and press coverage.",
    canonical: "https://www.officialkarmaswap.com/blog",
    keywords: "blog, news, updates, sustainability, circular economy",
    ogType: "website",
  },

  blogPost: (slug: string, title: string, description: string, author: string, publishedDate: string, modifiedDate?: string) => ({
    title: `${title} - Karma Swap Blog`,
    description,
    canonical: `https://www.officialkarmaswap.com/blog/${slug}`,
    ogType: "article",
    articleAuthor: author,
    articlePublishedTime: publishedDate,
    articleModifiedTime: modifiedDate || publishedDate,
    keywords: "karma swap, circular economy, sustainability, Nigeria",
  }),

  notFound: {
    title: "Page Not Found - Karma Swap Ltd",
    description: "The page you're looking for doesn't exist.",
    canonical: "https://www.officialkarmaswap.com/404",
  },
};
