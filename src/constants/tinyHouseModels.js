export const TINY_HOUSE_MODELS = {
  COMPACT: {
    id: 'compact',
    name: 'Tiny Compact',
    length: 4,
    width: 2.55,
    height: 3.5,
    basePrice: 45000,
    description: 'Idéale pour 1-2 personnes, cette tiny house compacte offre un espace optimisé avec tout le nécessaire pour un mode de vie minimaliste.',
    features: [
      'Surface habitable : 10m²',
      'Configuration studio optimisée',
      'Parfaite pour les terrains restreints',
      'Facile à déplacer'
    ],
    defaultLayout: {
      rooms: ['salon-cuisine', 'salle-de-bain'],
      furniture: {
        'salon-cuisine': ['canapé-lit', 'cuisine-équipée-compacte', 'table-murale'],
        'salle-de-bain': ['douche', 'toilettes', 'lavabo']
      }
    },
    images: {
      exterior: '/assets/images/tiny-compact-exterior.jpg',
      interior: '/assets/images/tiny-compact-interior.jpg',
      plan: '/assets/images/tiny-compact-plan.jpg'
    }
  },
  STANDARD: {
    id: 'standard',
    name: 'Tiny Standard',
    length: 6,
    width: 2.55,
    height: 3.8,
    basePrice: 65000,
    description: 'Notre modèle le plus polyvalent, parfait pour 2 personnes avec un espace jour/nuit bien défini.',
    features: [
      'Surface habitable : 15m²',
      'Espace jour/nuit séparé',
      'Cuisine complète',
      'Nombreux rangements'
    ],
    defaultLayout: {
      rooms: ['salon', 'cuisine', 'salle-de-bain', 'mezzanine'],
      furniture: {
        salon: ['canapé', 'table-basse', 'rangements'],
        cuisine: ['cuisine-équipée', 'réfrigérateur', 'plan-travail'],
        'salle-de-bain': ['douche', 'toilettes', 'lavabo', 'machine-à-laver'],
        mezzanine: ['lit-double', 'rangements']
      }
    },
    images: {
      exterior: '/assets/images/tiny-standard-exterior.jpg',
      interior: '/assets/images/tiny-standard-interior.jpg',
      plan: '/assets/images/tiny-standard-plan.jpg'
    }
  },
  FAMILY: {
    id: 'family',
    name: 'Tiny Family',
    length: 8,
    width: 2.55,
    height: 4,
    basePrice: 85000,
    description: 'Un espace généreux adapté pour 2-3 personnes, avec une vraie chambre et des espaces de vie confortables.',
    features: [
      'Surface habitable : 20m²',
      'Chambre séparée',
      'Grande cuisine équipée',
      'Espace bureau possible'
    ],
    defaultLayout: {
      rooms: ['salon', 'cuisine', 'chambre', 'salle-de-bain', 'mezzanine'],
      furniture: {
        salon: ['canapé-convertible', 'table-basse', 'meuble-tv', 'bureau'],
        cuisine: ['cuisine-équipée-complete', 'îlot', 'réfrigérateur'],
        chambre: ['lit-double', 'armoire', 'rangements'],
        'salle-de-bain': ['douche-xl', 'toilettes', 'double-vasque', 'machine-à-laver'],
        mezzanine: ['espace-couchage', 'rangements']
      }
    },
    images: {
      exterior: '/assets/images/tiny-family-exterior.jpg',
      interior: '/assets/images/tiny-family-interior.jpg',
      plan: '/assets/images/tiny-family-plan.jpg'
    }
  }
};

export const FURNITURE_OPTIONS = {
  'salon': {
    'canapé': {
      name: 'Canapé',
      price: 800,
      variants: ['2 places', '3 places', 'convertible']
    },
    'table-basse': {
      name: 'Table basse',
      price: 300,
      variants: ['ronde', 'rectangulaire', 'relevable']
    },
    'meuble-tv': {
      name: 'Meuble TV',
      price: 400,
      variants: ['suspendu', 'sur pied', 'modulable']
    },
    'bureau': {
      name: 'Bureau',
      price: 350,
      variants: ['escamotable', 'compact', 'angle']
    }
  },
  'cuisine': {
    'cuisine-équipée': {
      name: 'Cuisine équipée',
      price: 5000,
      variants: ['standard', 'premium', 'compacte']
    },
    'réfrigérateur': {
      name: 'Réfrigérateur',
      price: 600,
      variants: ['standard', 'combiné', 'petit']
    },
    'plan-travail': {
      name: 'Plan de travail',
      price: 800,
      variants: ['bois', 'granit', 'stratifié']
    }
  },
  'salle-de-bain': {
    'douche': {
      name: 'Douche',
      price: 1000,
      variants: ['standard', 'italienne', 'cabine']
    },
    'toilettes': {
      name: 'Toilettes',
      price: 400,
      variants: ['standard', 'sèches', 'suspendues']
    },
    'lavabo': {
      name: 'Lavabo',
      price: 300,
      variants: ['simple', 'double', 'compact']
    }
  }
};

export const FINITION_OPTIONS = {
  'extérieur': {
    'bardage': {
      name: 'Bardage',
      options: ['bois naturel', 'composite', 'métal'],
      prices: {
        'bois naturel': 4000,
        'composite': 5000,
        'métal': 4500
      }
    },
    'toit': {
      name: 'Toiture',
      options: ['bac acier', 'membrane EPDM', 'tuiles légères'],
      prices: {
        'bac acier': 3000,
        'membrane EPDM': 2500,
        'tuiles légères': 3500
      }
    }
  },
  'intérieur': {
    'sol': {
      name: 'Revêtement sol',
      options: ['parquet', 'vinyle', 'liège'],
      prices: {
        'parquet': 2000,
        'vinyle': 1500,
        'liège': 1800
      }
    },
    'murs': {
      name: 'Revêtement murs',
      options: ['bois', 'peinture', 'lambris'],
      prices: {
        'bois': 2500,
        'peinture': 1000,
        'lambris': 2000
      }
    }
  }
};
