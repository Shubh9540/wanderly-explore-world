import json
import os

file_path = "g:\\wanderly-explore-world\\data\\templates.json"

with open(file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

# Add SitemapBreadcrumb
data['common']['breadcrumbs']['SitemapBreadcrumb'] = {
    "title": "Sitemap",
    "bgImage": "/banner/bg-11.webp",
    "paths": [
        {"label": "Home", "url": "/"},
        {"label": "Sitemap"}
    ]
}

# Add WanderlySitemap1
sitemap_data = {
    "subtitle": "Overview",
    "titlePart1": "Site",
    "titleHighlight": "map",
    "description": "Find what you're looking for easily with our complete site structure.",
    "heading": "Website Structure",
    "links": [
        {"id": "link-home", "label": "Home", "url": "/"}
    ],
    "categories": [
        {
            "id": "cat-about",
            "title": "About Us",
            "icon": "FaInfoCircle",
            "links": [
                {"id": "link-about", "label": "About Us", "url": "/about"},
                {"id": "link-mission", "label": "Mission & Vision", "url": "/mission-vision"},
                {"id": "link-awards", "label": "Awards & Recognition", "url": "/awards"},
                {"id": "link-why-choose", "label": "Why Choose Us", "url": "/why-choose-us"}
            ]
        },
        {
            "id": "cat-team",
            "title": "Our Team",
            "icon": "FaUsers",
            "links": [
                {"id": "link-team", "label": "Our Team", "url": "/team"}
            ]
        },
        {
            "id": "cat-services",
            "title": "Our Services",
            "icon": "FaBriefcase",
            "links": [
                {"id": "link-services", "label": "Our Services", "url": "/services"}
            ]
        },
        {
            "id": "cat-tours",
            "title": "Tour Packages",
            "icon": "FaMapMarkedAlt",
            "links": [
                {"id": "link-tours", "label": "Tour Packages", "url": "/tour-packages"}
            ]
        },
        {
            "id": "cat-destinations",
            "title": "Destinations",
            "icon": "FaGlobe",
            "links": [
                {"id": "link-destinations", "label": "Destinations", "url": "/destination"}
            ]
        },
        {
            "id": "cat-info",
            "title": "Information & Support",
            "icon": "FaQuestionCircle",
            "links": [
                {"id": "link-blog", "label": "Blog", "url": "/blog"},
                {"id": "link-contact", "label": "Contact Us", "url": "/contact"},
                {"id": "link-enquiry", "label": "Enquiry", "url": "/enquiry"},
                {"id": "link-faq", "label": "FAQ", "url": "/faq"},
                {"id": "link-gallery", "label": "Gallery", "url": "/gallery"},
                {"id": "link-testimonials", "label": "Testimonials", "url": "/testimonials"},
                {"id": "link-partner", "label": "Partner with Us", "url": "/partner"}
            ]
        },
        {
            "id": "cat-legal",
            "title": "Legal & Policies",
            "icon": "FaBalanceScale",
            "links": [
                {"id": "link-privacy", "label": "Privacy Policy", "url": "/privacy-policy"},
                {"id": "link-terms", "label": "Terms & Conditions", "url": "/terms-conditions"},
                {"id": "link-refund", "label": "Refund Policy", "url": "/refund-policy"},
                {"id": "link-payment", "label": "Payment Policy", "url": "/payment-policy"}
            ]
        }
    ]
}

# The root structure is categories -> Wanderly -> sections -> Wanderly
data['categories']['Wanderly']['sections']['Wanderly']['WanderlySitemap1'] = sitemap_data

with open(file_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
