export const SITE = {
    name: 'AstroLaunch',
    title: 'Boost Your Productivity with AstroLaunch',
    description: 'The ultimate landing page template for B2C startups. Fast, accessible, and SEO-optimized.',
    url: 'https://astrolaunch.demo',
    defaultImage: '/assets/og-image.png',
};

export const MENU_ITEMS = [
    { text: 'Features', href: '#features' },
    { text: 'How it Works', href: '#how-it-works' },
    { text: 'Testimonials', href: '#testimonials' },
    { text: 'Pricing', href: '#pricing' },
    { text: 'FAQ', href: '#faq' },
];

export const FEATURES = [
    {
        icon: 'rocket',
        title: 'Lightning Fast',
        description: 'Built with Astro and minimal JS for perfect Web Vitals scores.',
    },
    {
        icon: 'accessibility',
        title: 'Accessible',
        description: 'Follows WCAG 2.1 AA+ standards for an inclusive experience.',
    },
    {
        icon: 'seo',
        title: 'SEO Optimized',
        description: 'Meta tags, semantic HTML, and sitemap generation out of the box.',
    },
    {
        icon: 'design',
        title: 'Modern Design',
        description: 'Styled with Tailwind CSS for a clean and professional look.',
    },
    {
        icon: 'mobile',
        title: 'Fully Responsive',
        description: 'Looks great on all devices, from mobile phones to desktops.',
    },
    {
        icon: 'code',
        title: 'Developer Friendly',
        description: 'TypeScript, ESLint, and Prettier configured for quality code.',
    },
];

export const TESTIMONIALS = [
    {
        name: 'Sarah Johnson',
        role: 'Product Manager',
        avatar: 'https://i.pravatar.cc/150?u=sarah',
        text: "This template saved us weeks of development time. It's incredibly fast and easy to customize.",
    },
    {
        name: 'David Lee',
        role: 'Startup Founder',
        avatar: 'https://i.pravatar.cc/150?u=david',
        text: "The SEO optimization is top-notch. Our landing page ranked on the first page within a week.",
    },
    {
        name: 'Emily Davis',
        role: 'Marketing Director',
        avatar: 'https://i.pravatar.cc/150?u=emily',
        text: "I love the design! It's modern, clean, and converts visitors into customers effectively.",
    },
];

export const PRICING_PLANS = [
    {
        name: 'Starter',
        price: '$0',
        description: 'Perfect for hobby projects.',
        features: ['1 Project', 'Basic Analytics', 'Community Support'],
        cta: 'Get Started',
        popular: false,
    },
    {
        name: 'Pro',
        price: '$29',
        description: 'For growing businesses.',
        features: ['Unlimited Projects', 'Advanced Analytics', 'Priority Support', 'Custom Domain'],
        cta: 'Start Free Trial',
        popular: true,
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        description: 'For large support teams.',
        features: ['Dedicated Account Manager', 'SLA', 'SSO Integration', 'Custom Contracts'],
        cta: 'Contact Sales',
        popular: false,
    },
];

export const FAQS = [
    {
        question: 'Is this template free to use?',
        answer: 'Yes, this is a premium quality template provided for demonstration purposes.',
    },
    {
        question: 'Can I use it for commercial projects?',
        answer: 'Absolutely! You can use it for both personal and commercial projects.',
    },
    {
        question: 'Do I need to know Astro?',
        answer: 'Basic knowledge of HTML and CSS is enough to customize the content. Astro basics help for deeper changes.',
    },
    {
        question: 'How do I deploy this?',
        answer: 'You can deploy seamlessly to Vercel, Netlify, or any static hosting provider.',
    },
];
