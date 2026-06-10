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
  fullDescription?: string;
  dosage: string;
  packSize: string;
  ingredientsLabel: string;
  ingredients: string[];
  benefits: string[];
  icon: string;
  color: string;
  image: string;
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
    slug: 'ovadil-od',
    name: 'OVADIL-OD',
    displayName: 'OVADIL-OD Chewable Tablets',
    categoryLabel: "Women's Health & Fertility Support",
    categoryTags: ['women-healthcare', 'nutraceuticals', 'wellness-products'],
    dosageForm: 'Chewable Tablets',
    dosageTags: ['chewable-tablets'],
    therapeuticTags: ['gynecology', 'general-wellness'],
    shortDescription: "Women's health supplement containing Myo-Inositol, D-Chiro Inositol, L-Methylfolate, Calcium, and Vitamin D3 to support reproductive wellness.",
    overview: 'OVADIL-OD is a women\'s fertility and metabolic health supplement specifically formulated with a scientifically-researched blend of inositols, folate, calcium, and Vitamin D3. Designed to support reproductive wellness, hormonal balance, and overall metabolic health.',
    fullDescription: 'OVADIL-OD is a comprehensive women\'s health supplement combining Myo-Inositol, D-Chiro Inositol in the optimal 40:1 ratio, L-Methylfolate for cellular health, Calcium for bone wellness, and Vitamin D3 for optimal absorption. This advanced formulation supports reproductive health, metabolic balance, and overall wellness in women.',
    dosage: 'As directed by the physician.',
    packSize: '30 Chewable Tablets',
    ingredientsLabel: 'Key Ingredients',
    ingredients: ['Myo-Inositol', 'D-Chiro Inositol', 'L-Methylfolate', 'Calcium Carbonate', 'Cholecalciferol (Vitamin D3)'],
    benefits: ['Supports reproductive wellness', 'Promotes hormonal balance', 'Supports metabolic health', 'Enriched with essential nutrients', 'Fertility support supplement'],
    icon: 'fa-person-pregnant',
    color: '#FF6B9D',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde0e?w=600&h=600&fit=crop&crop=faces'
  },
  {
    slug: 'basdil-liv-ds',
    name: 'Basdil-Liv-DS',
    displayName: 'Basdil-Liv-DS Syrup',
    categoryLabel: 'Liver Care & Digestive Wellness',
    categoryTags: ['liver-care', 'ayurvedic-products', 'wellness-products'],
    dosageForm: 'Syrup',
    dosageTags: ['syrups'],
    therapeuticTags: ['liver-care', 'general-wellness'],
    shortDescription: 'Herbal liver tonic enriched with digestive enzymes to support liver function, appetite, digestion, and overall liver wellness.',
    overview: 'Basdil-Liv-DS is a herbal liver tonic with enzyme support formulated to help maintain healthy liver function and digestive wellness.',
    fullDescription: 'Basdil-Liv-DS is a comprehensive liver care formula combining traditional Ayurvedic herbs with modern scientific research. Formulated with Bhringraj, Kalmegh, and other liver-supporting herbs enriched with digestive enzymes, it promotes healthy liver function, aids digestion, and supports overall hepatic wellness.',
    dosage: 'As directed by the physician.',
    packSize: '225 ml Syrup',
    ingredientsLabel: 'Key Ingredients',
    ingredients: ['Bhringraj', 'Sharpunkha', 'Rohitak', 'Arjun', 'Ashwagandha', 'Chirayata', 'Kalmegh', 'Makoi', 'Tulsi', 'Giloy', 'Amla', 'Kutki'],
    benefits: ['Supports liver health', 'Helps improve digestion', 'Supports appetite', 'Useful in digestive wellness', 'Sugar-free formula'],
    icon: 'fa-leaf',
    color: '#2ECC71',
    image: 'https://images.unsplash.com/photo-1563427436-cbf36c3fecb9?w=600&h=600&fit=crop'
  },
  {
    slug: 'basifol',
    name: 'Basifol',
    displayName: 'Basifol Tablets',
    categoryLabel: 'Women\'s Health & Prenatal Support',
    categoryTags: ['women-healthcare', 'nutraceuticals', 'wellness-products'],
    dosageForm: 'Tablets',
    dosageTags: ['tablets'],
    therapeuticTags: ['gynecology', 'general-wellness'],
    shortDescription: 'Pregnancy and preconception nutritional supplement containing L-Methylfolate, Pyridoxal-5-Phosphate, DHA, Potassium Iodide, and Cyanocobalamin.',
    overview: 'Basifol is a prenatal and maternal nutritional support tablet formulated with essential vitamins and nutrients to support overall health and wellness during pregnancy and preconception periods.',
    fullDescription: 'Basifol is a meticulously formulated prenatal supplement combining L-Methylfolate, active B vitamins, and DHA. Designed for optimal bioavailability and absorption, Basifol supports maternal health, fetal development, and cognitive function. Ideal for maintaining comprehensive micronutrient levels during pregnancy and preconception.',
    dosage: 'As directed by the physician.',
    packSize: '10 x 10 Tablets',
    ingredientsLabel: 'Composition',
    ingredients: ['L-Methylfolate', 'Pyridoxal-5-Phosphate', 'DHA', 'Potassium Iodide', 'Cyanocobalamin'],
    benefits: ['Prenatal nutritional support', 'Folate supplementation', 'DHA enriched formula', 'Vitamin B12 support', 'Pregnancy support supplement'],
    icon: 'fa-person-pregnant',
    color: '#FF6B9D',
    image: 'https://images.unsplash.com/photo-1584307938042-469ce38bd936?w=600&h=600&fit=crop'
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
    shortDescription: 'Iron, Zinc, Folic Acid, Vitamin B12, and Vitamin D3 supplement designed to support hemoglobin levels and nutritional health.',
    overview: 'BASOFER-D3 is an iron, folic acid, and Vitamin D3 nutritional supplement designed to support healthy hemoglobin levels and overall nutritional balance.',
    fullDescription: 'BASOFER-D3 combines highly bioavailable iron (Ferrous Bisglycinate) with essential co-factors including Vitamin D3, B vitamins, and minerals. This scientifically formulated supplement supports hemoglobin synthesis, energy levels, and nutritional wellness with excellent tolerability.',
    dosage: 'As directed by the physician.',
    packSize: '10 x 10 Tablets',
    ingredientsLabel: 'Composition',
    ingredients: ['Ferrous Bisglycinate', 'Zinc Bisglycinate', 'Folic Acid', 'Cyanocobalamin', 'Cholecalciferol (Vitamin D3)'],
    benefits: ['Iron supplementation', 'Folic Acid support', 'Vitamin B12 support', 'Vitamin D3 support', 'Zinc supplementation'],
    icon: 'fa-droplet',
    color: '#E74C3C',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde0e?w=600&h=600&fit=crop&q=80'
  },
  {
    slug: 'bacitrol-plus',
    name: 'BACITROL-PLUS',
    displayName: 'BACITROL-PLUS Softgel Capsules',
    categoryLabel: 'Bone & Nerve Health',
    categoryTags: ['bone-health', 'nutraceuticals'],
    dosageForm: 'Softgel Capsules',
    dosageTags: ['softgels', 'capsules'],
    therapeuticTags: ['orthopedics', 'general-wellness'],
    shortDescription: 'Advanced bone and nerve health supplement containing L-Methylfolate, Calcitriol, Calcium Carbonate, Vitamin K2-7, Methylcobalamin, Zinc, and Magnesium.',
    overview: 'BACITROL-PLUS is a comprehensive bone and nerve health formulation designed to support bone strength, calcium metabolism, and overall skeletal and nervous system wellness.',
    fullDescription: 'BACITROL-PLUS is a premium bone and nerve health formula featuring Calcium, Vitamin K2-7, Vitamin D3, and essential minerals with L-Methylfolate for cellular health. This advanced formulation supports bone density, calcium absorption, skeletal integrity, and nerve function.',
    dosage: 'As directed by the physician.',
    packSize: '10 x 10 Softgel Capsules',
    ingredientsLabel: 'Composition',
    ingredients: ['L-Methyl Folate', 'Calcitriol', 'Calcium Carbonate', 'Vitamin K2-7', 'Methylcobalamin', 'Zinc', 'Magnesium'],
    benefits: ['Bone health support', 'Calcium supplementation', 'Nerve health support', 'Vitamin K2-7 support', 'Magnesium enrichment'],
    icon: 'fa-bone',
    color: '#F39C12',
    image: 'https://images.unsplash.com/photo-1631549916768-4873b991538d?w=600&h=600&fit=crop'
  },
  {
    slug: 'tendodil-forte',
    name: 'TENDODIL-FORTE',
    displayName: 'TENDODIL-FORTE Tablets',
    categoryLabel: 'Joint Care & Cartilage Support',
    categoryTags: ['joint-care', 'nutraceuticals', 'wellness-products'],
    dosageForm: 'Tablets',
    dosageTags: ['tablets'],
    therapeuticTags: ['orthopedics', 'general-wellness'],
    shortDescription: 'Joint care formulation with Undenatured Collagen Type II, Hyaluronic Acid, Chondroitin, Boswellia, Curcumin, and Vitamin C for osteoarthritis support.',
    overview: 'TENDODIL-FORTE is an advanced joint and cartilage support formula developed to help maintain joint mobility and overall musculoskeletal wellness.',
    fullDescription: 'TENDODIL-FORTE is a comprehensive joint support formula featuring Undenatured Collagen Type II, Sodium Hyaluronate, and Boswellia. This advanced formulation supports cartilage health, joint flexibility, comfort, and mobility. Ideal for maintaining active joint function throughout life.',
    dosage: 'As directed by the physician.',
    packSize: '1 x 10 Tablets',
    ingredientsLabel: 'Composition',
    ingredients: ['Undenatured Collagen Peptide Type II', 'Sodium Hyaluronate', 'Chondroitin Sulphate', 'Rosehip Extract', 'Curcuma Longa Extract', 'Boswellia Serrata Extract', 'Vitamin C'],
    benefits: ['Joint support', 'Cartilage health', 'Mobility support', 'Collagen supplementation', 'Osteoarthritis wellness support'],
    icon: 'fa-person-hiking',
    color: '#9B59B6',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=600&fit=crop'
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
    { label: 'Chewable Tablets', value: 'chewable-tablets' },
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
