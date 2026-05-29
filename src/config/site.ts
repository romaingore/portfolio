export const SITE = {
    name: 'Romain Goré',
    title: 'Romain Goré — Sites web pour artisans',
    description: 'Je crée des sites web rapides, modernes et optimisés Google pour les artisans et petites entreprises locales.',
    url: 'https://romain-gore.fr',
    defaultImage: '/assets/og-image.png',
};

export const MENU_ITEMS = [
    { text: 'À propos', href: '#a-propos' },
    { text: 'Comment ça marche', href: '#processus' },
    { text: 'Offres', href: '#offres' },
    { text: 'Réalisations', href: '#realisations' },
    { text: 'Contact', href: '#contact' },
];

export const FEATURES = [
    {
        icon: 'speed',
        title: 'Ultra-rapide sur mobile',
        description: 'Un site codé sur mesure, optimisé pour la vitesse. Résultat : un chargement quasi-instantané qui réduit le taux de fuite des visiteurs.',
    },
    {
        icon: 'seo',
        title: 'Visible sur Google',
        description: 'SEO local optimisé pour votre ville et votre métier. Fiche Google Maps configurée. Vos clients vous trouvent avant vos concurrents.',
    },
    {
        icon: 'mobile',
        title: '100 % pensé mobile',
        description: "Plus de 70 % des recherches locales se font depuis un téléphone. Votre site s'adapte parfaitement à tous les écrans.",
    },
    {
        icon: 'human',
        title: 'Un interlocuteur unique',
        description: 'Pas d\'agence, pas d\'intermédiaire. Vous échangez directement avec moi — par SMS, mail ou téléphone.',
    },
    {
        icon: 'analytics',
        title: 'Suivi des performances',
        description: 'Google Analytics et Search Console intégrés dès le départ. Vous savez combien de personnes visitent votre site.',
    },
    {
        icon: 'maintenance',
        title: 'Tranquillité d\'esprit',
        description: 'Hébergement, sauvegardes, mises à jour et petites modifications gérés pour vous. Vous travaillez, je m\'occupe de la technique.',
    },
];

export const TESTIMONIALS = [
    {
        name: 'Alexis Goré',
        role: 'Couvreur — Gore Couverture, Pays de la Loire',
        avatar: '',
        text: "Romain a créé le site de mon entreprise de couverture en quelques jours. C'est rapide, propre, et mes clients me trouvent maintenant facilement sur Google. Je recommande sans hésiter.",
    },
];

export const PRICING_PLANS = [
    {
        name: 'Pack Essentiel',
        price: '500 €',
        suffix: 'paiement unique',
        description: 'Une présence pro simple et efficace pour démarrer.',
        features: [
            'Site one-page (Présentation, Services, Galerie, Contact)',
            'Design moderne, 100 % mobile',
            'SEO local optimisé (ville + métier)',
            'Fiche Google Business Profile',
            'Google Analytics & Search Console',
            '2 révisions incluses',
            'Livraison en 1 à 2 semaines',
        ],
        cta: 'Demander un devis',
        popular: false,
    },
    {
        name: 'Pack Expert',
        price: '900 €',
        suffix: 'paiement unique',
        description: 'Valorisez pleinement votre activité et passez devant la concurrence.',
        features: [
            'Site multi-pages (Accueil, Services, Réalisations, Contact)',
            'Design moderne, 100 % mobile',
            'SEO technique + local approfondi',
            'Fiche Google Business Profile',
            'Google Analytics & Search Console',
            '2 révisions incluses',
            'Livraison en 3 à 4 semaines',
        ],
        cta: 'Demander un devis',
        popular: true,
    },
    {
        name: 'Pack Seconde Vie',
        price: '100 €',
        suffix: "d'audit + devis refonte",
        description: 'Un vieux site lent fait fuir vos clients. On repart de zéro.',
        features: [
            'Audit technique complet (vitesse, mobile, SEO)',
            'Rapport détaillé avec recommandations',
            'Devis de refonte sur mesure',
            "Les 100 € sont déduits si vous faites la refonte",
            'Nouveau code optimisé, design moderne',
            '2 révisions incluses',
        ],
        cta: 'Demander un audit',
        popular: false,
    },
];

export const FAQS = [
    {
        question: 'Pourquoi un site sur mesure plutôt qu\'un constructeur en ligne ?',
        answer: 'Les constructeurs comme Wix ou Squarespace sont pratiques, mais ils génèrent des sites lents, peu optimisés pour Google, et chargés d\'abonnements mensuels. Un site codé sur mesure est plus rapide, mieux référencé, et vous appartient vraiment.',
    },
    {
        question: 'Je peux modifier mon site moi-même ?',
        answer: "Les petites modifications (textes, photos) sont incluses dans l'option Sérénité. Je les applique sous 48h ouvrées sur simple message. Pas besoin de savoir coder.",
    },
    {
        question: "Que se passe-t-il si je ne veux plus l'hébergement ?",
        answer: "Vous pouvez résilier avec 1 mois de préavis après la période minimale de 6 mois. Le nom de domaine vous est transféré sur simple demande.",
    },
    {
        question: 'Combien de temps pour avoir mon site en ligne ?',
        answer: 'Entre 1 et 4 semaines selon le pack choisi, à partir du versement de l\'acompte et de la réception de vos éléments (textes, photos, informations).',
    },
    {
        question: 'Je n\'ai pas de photos ni de textes. C\'est un problème ?',
        answer: "Pas du tout. L'option Plume vous permet d'avoir tous vos textes rédigés à partir d'un simple échange téléphonique. Pour les photos, je peux vous guider sur ce qu'il faut prendre.",
    },
];
