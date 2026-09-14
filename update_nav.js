const fs = require('fs');

const filePath = 'g:\\\\wanderly-explore-world\\\\data\\\\templates.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const newNavLinks = [
  {
    id: "nav-home",
    label: "Home",
    url: "/"
  },
  {
    id: "nav-about-us",
    label: "About Us",
    subLinks: [
      { id: "nav-about", label: "About", url: "/about" },
      { id: "nav-mission", label: "Mission & Vision", url: "/mission-vision" },
      { id: "nav-awards", label: "Awards & Recognition", url: "/awards" },
      { id: "nav-why-choose", label: "Why Choose Us", url: "/why-choose-us" },
      { id: "nav-team", label: "Team", url: "/team" },
      { id: "nav-team-detail", label: "Team Detail", url: "/team/tm-1" }
    ]
  },
  {
    id: "nav-services",
    label: "Services",
    subLinks: [
      { id: "nav-our-services", label: "Our Services", url: "/services" },
      { id: "nav-service-detail", label: "Service Detail", url: "/services/srv-1" }
    ]
  },
  {
    id: "nav-tour",
    label: "Tour",
    subLinks: [
      { id: "nav-destinations", label: "Destinations", url: "/destination" },
      { id: "nav-tour-packages", label: "Tour Packages", url: "/tour-packages" },
      { id: "nav-package-detail", label: "Package Detail", url: "/tour-packages/delhi" }
    ]
  },
  {
    id: "nav-blogs",
    label: "Blogs",
    subLinks: [
      { id: "nav-blog", label: "Blog", url: "/blog" },
      { id: "nav-blog-detail", label: "Blog Detail", url: "/blog/top-10-beaches-you-must-visit-in-thailand" }
    ]
  },
  {
    id: "nav-pages",
    label: "Pages",
    subLinks: [
      { id: "nav-contact", label: "Contact Us", url: "/contact" },
      { id: "nav-enquiry", label: "Enquiry", url: "/enquiry" },
      { id: "nav-faq", label: "FAQ", url: "/faq" },
      { id: "nav-gallery", label: "Gallery", url: "/gallery" },
      { id: "nav-testimonials", label: "Testimonials", url: "/testimonials" },
      { id: "nav-partner", label: "Partner with Us", url: "/partner" },
      { id: "nav-404", label: "404", url: "/404-not-found" }
    ]
  },
  {
    id: "nav-policies",
    label: "Policies",
    subLinks: [
      { id: "nav-privacy", label: "Privacy Policy", url: "/privacy-policy" },
      { id: "nav-terms", label: "Terms & Conditions", url: "/terms-conditions" },
      { id: "nav-refund", label: "Refund Policy", url: "/refund-policy" },
      { id: "nav-payment", label: "Payment Policy", url: "/payment-policy" }
    ]
  }
];

if (data.categories?.Wanderly?.sections?.Header?.variants?.WanderlyHeader1) {
  data.categories.Wanderly.sections.Header.variants.WanderlyHeader1.navLinks = newNavLinks;
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
