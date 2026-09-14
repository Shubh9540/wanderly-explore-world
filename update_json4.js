const fs = require('fs');

const filePath = 'g:\\\\wanderly-explore-world\\\\data\\\\templates.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const sitemapData = {
  subtitle: "Overview",
  titlePart1: "Site",
  titleHighlight: "map",
  titlePart2: "",
  description: "Find what you're looking for easily with our complete site structure.",
  heading: "Website Structure",
  links: [
    { id: "link-home", label: "Home", url: "/" }
  ],
  categories: [
    {
      id: "cat-about",
      title: "About Us",
      icon: "FaInfoCircle",
      links: [
        { id: "link-about", label: "About Us", url: "/about" },
        { id: "link-mission", label: "Mission & Vision", url: "/mission-vision" },
        { id: "link-awards", label: "Awards & Recognition", url: "/awards" },
        { id: "link-why-choose", label: "Why Choose Us", url: "/why-choose-us" }
      ]
    },
    {
      id: "cat-team",
      title: "Our Team",
      icon: "FaUsers",
      links: [
        { id: "link-team", label: "Our Team", url: "/team" },
        { id: "link-team-detail", label: "Team Detail", url: "/team/tm-1" }
      ]
    },
    {
      id: "cat-services",
      title: "Our Services",
      icon: "FaBriefcase",
      links: [
        { id: "link-services", label: "Our Services", url: "/services" },
        { id: "link-service-detail", label: "Service Detail", url: "/services/srv-1" }
      ]
    },
    {
      id: "cat-tours",
      title: "Tour Packages",
      icon: "FaMapMarkedAlt",
      links: [
        { id: "link-tours", label: "Tour Packages", url: "/tour-packages" },
        { id: "link-tour-detail", label: "Package Detail", url: "/tour-packages/delhi" }
      ]
    },
    {
      id: "cat-destinations",
      title: "Destinations",
      icon: "FaGlobe",
      links: [
        { id: "link-destinations", label: "Destinations", url: "/destination" }
      ]
    },
    {
      id: "cat-info",
      title: "Information & Support",
      icon: "FaQuestionCircle",
      links: [
        { id: "link-blog", label: "Blog", url: "/blog" },
        { id: "link-blog-detail", label: "Blog Detail", url: "/blog/top-10-beaches-you-must-visit-in-thailand" },
        { id: "link-contact", label: "Contact Us", url: "/contact" },
        { id: "link-enquiry", label: "Enquiry", url: "/enquiry" },
        { id: "link-faq", label: "FAQ", url: "/faq" },
        { id: "link-gallery", label: "Gallery", url: "/gallery" },
        { id: "link-testimonials", label: "Testimonials", url: "/testimonials" },
        { id: "link-partner", label: "Partner with Us", url: "/partner" },
        { id: "link-404", label: "404 Error Page", url: "/404-not-found" }
      ]
    },
    {
      id: "cat-legal",
      title: "Legal & Policies",
      icon: "FaBalanceScale",
      links: [
        { id: "link-privacy", label: "Privacy Policy", url: "/privacy-policy" },
        { id: "link-terms", label: "Terms & Conditions", url: "/terms-conditions" },
        { id: "link-refund", label: "Refund Policy", url: "/refund-policy" },
        { id: "link-payment", label: "Payment Policy", url: "/payment-policy" }
      ]
    }
  ]
};

data.categories.Wanderly.sections.SitemapSection = {
  variants: {
    WanderlySitemap1: sitemapData
  }
};

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
