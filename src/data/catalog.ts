export type Product = {
  slug: string;
  name: string;
  displayName: string;
  categoryLabel: string;
  categoryTags: string[];
  dosageForm: string;
  dosageTags: string[];
  therapeuticTags: string[];
  shortDescription: string;
  overview: string;
  dosage: string;
  packSize: string;
  ingredientsLabel: string;
  ingredients: string[];
  benefits: string[];
};

export type Service = {
  title: string;
  description: string;
  icon: string;
  bullets: string[];
};

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label: 'Manufacturing', to: '/manufacturing' },
  { label: 'Contact', to: '/contact' }
];

export const products: Product[] = [
  {
    slug: 'mensoris',
    name: 'MENSORIS',
    displayName: 'MENSORIS Syrup',
    categoryLabel: "Women's Healthcare | Ayurvedic Range",
    categoryTags: ['women-healthcare', 'ayurvedic-products', 'wellness-products'],
    dosageForm: 'Syrup',
    dosageTags: ['syrups'],
    therapeuticTags: ['gynecology', 'general-wellness'],
    shortDescription: "Ayurvedic uterine tonic for women's healthcare.",
    overview: 'An Ayurvedic uterine tonic formulated with carefully selected herbs traditionally used to support women\'s reproductive health and overall wellness.',
    dosage: 'As directed by the physician.',
    packSize: '300 ml Syrup',
    ingredientsLabel: 'Key Ingredients',
    ingredients: ['Ashoka', 'Lodhra', 'Dhataki', 'Amla', 'Baheda', 'Haritaki', 'Sunthi', 'Mustaka', 'Rakta Chandan', 'Daruharidra', 'Aloe Vera', 'Honey'],
    benefits: ['Supports women\'s reproductive health', 'Helps maintain uterine wellness', 'Ayurvedic formulation', 'Enriched with herbal extracts', 'Daily wellness support']
  },
  {
    slug: 'basdil-liv-ds',
    name: 'BASDIL-LIV DS',
    displayName: 'BASDIL-LIV DS Syrup',
    categoryLabel: 'Liver Care & Digestive Wellness',
    categoryTags: ['liver-care', 'ayurvedic-products', 'wellness-products'],
    dosageForm: 'Syrup',
    dosageTags: ['syrups'],
    therapeuticTags: ['liver-care', 'general-wellness'],
    shortDescription: 'Liver tonic with enzyme support for digestive wellness.',
    overview: 'A liver tonic with enzyme support formulated to help maintain healthy liver function and digestive wellness.',
    dosage: 'As directed by the physician.',
    packSize: '225 ml Syrup',
    ingredientsLabel: 'Key Ingredients',
    ingredients: ['Bhringraj', 'Sharpunkha', 'Rohitak', 'Arjun', 'Ashwagandha', 'Chirayata', 'Kalmegh', 'Makoi', 'Tulsi', 'Giloy', 'Amla', 'Kutki'],
    benefits: ['Supports liver health', 'Helps improve digestion', 'Supports appetite', 'Useful in digestive wellness', 'Sugar-free formula']
  },
  {
    slug: 'basifol',
    name: 'BASIFOL',
    displayName: 'BASIFOL Tablets',
    categoryLabel: 'Nutraceuticals',
    categoryTags: ['nutraceuticals', 'wellness-products'],
    dosageForm: 'Tablets',
    dosageTags: ['tablets'],
    therapeuticTags: ['nutrition', 'general-wellness'],
    shortDescription: 'Premium folate, DHA, and B12 nutrition support.',
    overview: 'A premium nutritional supplement formulated with essential vitamins and nutrients to support overall health and wellness.',
    dosage: 'As directed by the physician.',
    packSize: '10 x 10 Tablets',
    ingredientsLabel: 'Composition',
    ingredients: ['L-Methylfolate', 'Pyridoxal-5-Phosphate', 'DHA', 'Potassium Iodide', 'Cyanocobalamin'],
    benefits: ['Nutritional support', 'Folate supplementation', 'DHA enriched formula', 'Vitamin B12 support', 'Daily wellness supplement']
  },
  {
    slug: 'basofer-d3',
    name: 'BASOFER-D3',
    displayName: 'BASOFER-D3 Tablets',
    categoryLabel: 'Hematinics & Nutritional Support',
    categoryTags: ['iron-supplements', 'nutraceuticals', 'hematinics'],
    dosageForm: 'Tablets',
    dosageTags: ['tablets'],
    therapeuticTags: ['hematinics', 'nutrition'],
    shortDescription: 'Iron and hematinic support for healthy nutrition balance.',
    overview: 'A comprehensive iron and nutritional supplement designed to support healthy hemoglobin levels and overall nutritional balance.',
    dosage: 'As directed by the physician.',
    packSize: '10 x 10 Tablets',
    ingredientsLabel: 'Composition',
    ingredients: ['Ferrous Bisglycinate', 'Zinc Bisglycinate', 'Folic Acid', 'Cyanocobalamin', 'Cholecalciferol (Vitamin D3)'],
    benefits: ['Iron supplementation', 'Folic Acid support', 'Vitamin B12 support', 'Vitamin D3 support', 'Zinc supplementation']
  },
  {
    slug: 'bacitrol-plus',
    name: 'BACITROL-PLUS',
    displayName: 'BACITROL-PLUS Softgel Capsules',
    categoryLabel: 'Bone Health & Nutrition',
    categoryTags: ['bone-health', 'nutraceuticals'],
    dosageForm: 'Softgel Capsules',
    dosageTags: ['softgels', 'capsules'],
    therapeuticTags: ['orthopedics', 'general-wellness'],
    shortDescription: 'Advanced bone health support with calcium and vitamin enrichment.',
    overview: 'An advanced bone health formulation designed to support bone strength, calcium metabolism, and overall skeletal wellness.',
    dosage: 'As directed by the physician.',
    packSize: '10 x 10 Softgel Capsules',
    ingredientsLabel: 'Composition',
    ingredients: ['L-Methyl Folate', 'Calcitriol', 'Calcium Carbonate', 'Vitamin K2-7', 'Methylcobalamin', 'Zinc', 'Magnesium'],
    benefits: ['Bone health support', 'Calcium supplementation', 'Vitamin K2-7 support', 'Magnesium support', 'Zinc enrichment']
  },
  {
    slug: 'tendodil-forte',
    name: 'TENDODIL-FORTE',
    displayName: 'TENDODIL-FORTE Tablets',
    categoryLabel: 'Joint Care & Orthopedic Wellness',
    categoryTags: ['joint-care', 'nutraceuticals', 'wellness-products'],
    dosageForm: 'Tablets',
    dosageTags: ['tablets'],
    therapeuticTags: ['orthopedics', 'general-wellness'],
    shortDescription: 'Advanced joint support for musculoskeletal wellness.',
    overview: 'An advanced joint support formula developed to help maintain joint mobility and overall musculoskeletal wellness.',
    dosage: 'As directed by the physician.',
    packSize: '1 x 10 Tablets',
    ingredientsLabel: 'Composition',
    ingredients: ['Undenatured Collagen Peptide Type II', 'Sodium Hyaluronate', 'Chondroitin Sulphate', 'Rosehip Extract', 'Curcuma Longa Extract', 'Boswellia Serrata Extract', 'Vitamin C'],
    benefits: ['Joint support', 'Cartilage health', 'Mobility support', 'Collagen supplementation', 'Osteoarthritis wellness support']
  }
];

export const services: Service[] = [
  {
    title: 'PCD Pharma Franchise',
    icon: 'fa-store',
    description: 'Monopoly rights, promotional inputs, marketing support, and attractive margins.',
    bullets: ['Monopoly Rights', 'Promotional Inputs', 'Marketing Support', 'Attractive Margins']
  },
  {
    title: 'Third Party Manufacturing',
    icon: 'fa-industry',
    description: 'WHO-GMP facilities, quality manufacturing, private label solutions, and timely delivery.',
    bullets: ['WHO-GMP Facilities', 'Quality Manufacturing', 'Private Label Solutions', 'Timely Delivery']
  },
  {
    title: 'Contract Manufacturing',
    icon: 'fa-handshake',
    description: 'End-to-end production with regulatory compliance and packaging solutions.',
    bullets: ['End-to-End Production', 'Regulatory Compliance', 'Packaging Solutions']
  },
  {
    title: 'Product Development',
    icon: 'fa-diagram-project',
    description: 'Custom formulations for nutraceutical and Ayurvedic product development.',
    bullets: ['Custom Formulations', 'Nutraceutical Development', 'Ayurvedic Product Development']
  }
];

export const productFilters = {
  category: [
    { label: "All", value: 'all' },
    { label: "Women's Healthcare", value: 'women-healthcare' },
    { label: 'Liver Care', value: 'liver-care' },
    { label: 'Nutraceuticals', value: 'nutraceuticals' },
    { label: 'Iron Supplements', value: 'iron-supplements' },
    { label: 'Bone Health', value: 'bone-health' },
    { label: 'Joint Care', value: 'joint-care' },
    { label: 'Wellness Products', value: 'wellness-products' },
    { label: 'Ayurvedic Products', value: 'ayurvedic-products' }
  ],
  dosage: [
    { label: 'All', value: 'all' },
    { label: 'Tablets', value: 'tablets' },
    { label: 'Capsules', value: 'capsules' },
    { label: 'Softgels', value: 'softgels' },
    { label: 'Syrups', value: 'syrups' }
  ],
  therapeutic: [
    { label: 'All', value: 'all' },
    { label: 'Gynecology', value: 'gynecology' },
    { label: 'Orthopedics', value: 'orthopedics' },
    { label: 'Nutrition', value: 'nutrition' },
    { label: 'Liver Care', value: 'liver-care' },
    { label: 'Hematinics', value: 'hematinics' },
    { label: 'General Wellness', value: 'general-wellness' }
  ]
} as const;
