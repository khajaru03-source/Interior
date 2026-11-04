import heroArchitecturalImg from '../assets/images/hero_architectural_interior_1793797443191.jpg';
import materialPlywoodVeneerImg from '../assets/images/material_plywood_veneer_1793797444072.jpg';
import materialFlutedPanelsImg from '../assets/images/material_fluted_panels_1793797446569.jpg';
import materialLuxuryLaminatesImg from '../assets/images/material_luxury_laminates_1793797446578.jpg';

export const SHOWROOM_PHOTOS = {
  kitchenDisplay: '/assets/aistudio/image_4631549a.png',
  facadeElevation: '/assets/aistudio/image_30d0bb71.png',
  facadeAngle: '/assets/aistudio/image_0b08779f.png',
  pullHandlesBoard: '/assets/aistudio/image_8a6eb9d9.png',
  experienceLounge: '/assets/aistudio/image_b74bece0.png',
  brassMotifsBoard: '/assets/aistudio/image_73e7545f.png',
  slidingLeverGallery: '/assets/aistudio/image_e76c0dac.png',
} as const;

export const ARCHITECTURAL_IMAGERY = {
  heroInterior: heroArchitecturalImg,
  plywoodAndVeneer: materialPlywoodVeneerImg,
  flutedPanels: materialFlutedPanelsImg,
  luxuryLaminates: materialLuxuryLaminatesImg,
} as const;

export interface ProductCategory {
  id: string;
  index: string;
  name: string;
  homeTitle: string;
  subtitle: string;
  description: string;
  highlights: string[];
  primaryImage: string;
  secondaryImage?: string;
  imageAlt: string;
  secondaryAlt?: string;
  isAuthenticShowroomPhoto: boolean;
  objectPosition?: string;
}

export interface GalleryItem {
  id: string;
  categoryId: string;
  categoryName: string;
  title: string;
  caption: string;
  image: string;
  alt: string;
  aspect: 'portrait' | 'landscape' | 'square';
  isShowroomOriginal: boolean;
  objectPosition?: string;
}

export const PRODUCT_CATEGORIES: readonly ProductCategory[] = [
  {
    id: 'plywood',
    index: '01',
    name: 'Plywood',
    homeTitle: 'Plywood',
    subtitle: 'Structural substrates for enduring cabinetry & joinery',
    description:
      'Selected structural plywood sheets suited for wardrobes, modular cabinetry, architectural panelling, and bespoke residential or commercial joinery. Visit our showroom to compare core compositions and sheet thicknesses suited to your interior scope.',
    highlights: [
      'Substrates for wardrobes, kitchens & custom furniture',
      'Clean structural stability for residential & commercial interiors',
      'In-person material consultation at our New Hafeezpet showroom',
    ],
    primaryImage: ARCHITECTURAL_IMAGERY.plywoodAndVeneer,
    secondaryImage: SHOWROOM_PHOTOS.experienceLounge,
    imageAlt: 'Calibrated hardwood plywood sheets arranged alongside natural wood veneers',
    secondaryAlt: 'Plywood and timber display partitions inside the Interior Boxx showroom',
    isAuthenticShowroomPhoto: false,
    objectPosition: 'object-center',
  },
  {
    id: 'natural-veneers',
    index: '02',
    name: 'Natural Veneers',
    homeTitle: 'Veneers',
    subtitle: 'Organic timber grains with warm architectural character',
    description:
      'Authentic wood veneers celebrating natural grain movement, warm walnut tones, and tactile timber depth. Ideal for statement wall panelling, executive desks, custom doors, and refined living spaces.',
    highlights: [
      'Rich natural grain patterns across warm & deep timber tones',
      'Full-height timber & veneer partition displays in showroom',
      'Suited for bespoke furniture, wall cladding & flush doors',
    ],
    primaryImage: SHOWROOM_PHOTOS.experienceLounge,
    secondaryImage: ARCHITECTURAL_IMAGERY.plywoodAndVeneer,
    imageAlt: 'Interior Boxx showroom lounge featuring walnut ceiling louvers and veneer partition displays',
    secondaryAlt: 'Book-matched walnut and oak natural wood veneer sheets',
    isAuthenticShowroomPhoto: true,
    objectPosition: 'object-center',
  },
  {
    id: 'decorative-panels',
    index: '03',
    name: 'Decorative Panels',
    homeTitle: 'Decorative Panels',
    subtitle: 'Sculptural fluted surfaces & artisanal door accents',
    description:
      'Transform plain walls, entranceways, and pooja spaces with architectural louvers, textured decorative panels, and intricately cast antique-brass traditional motifs displayed across our multi-floor gallery.',
    highlights: [
      'Fluted louvers, textured feature wall panels & ceiling accents',
      'Artisanal brass & bronze traditional relief plaques for pooja doors',
      'Curated combinations with veneers, laminates & lighting',
    ],
    primaryImage: SHOWROOM_PHOTOS.brassMotifsBoard,
    secondaryImage: ARCHITECTURAL_IMAGERY.flutedPanels,
    imageAlt: 'Authentic antique brass traditional relief plaques and devotional door motifs displayed at Interior Boxx',
    secondaryAlt: 'Vertical fluted walnut decorative wall panels with architectural lighting',
    isAuthenticShowroomPhoto: true,
    objectPosition: 'object-center',
  },
  {
    id: 'kitchen-fittings',
    index: '04',
    name: 'Kitchen Fittings',
    homeTitle: 'Kitchen Fittings',
    subtitle: 'Ergonomic modular systems & contemporary storage fittings',
    description:
      'Experience full-scale modular kitchen setups in our showroom—including smooth tambour appliance shutters, tinted glass lift-up wall units, pull-out wicker baskets, and organized drawer systems built for everyday ease.',
    highlights: [
      'Appliance garage tambour shutters & glass lift-up wall units',
      'Pull-out wicker baskets, cutlery organizers & corner solutions',
      'Live working modular kitchen display for hands-on evaluation',
    ],
    primaryImage: SHOWROOM_PHOTOS.kitchenDisplay,
    imageAlt: 'Live modular kitchen display at Interior Boxx featuring black tambour shutter, tinted glass cabinets, and wicker basket pull-out',
    isAuthenticShowroomPhoto: true,
    objectPosition: 'object-center',
  },
  {
    id: 'laminates',
    index: '05',
    name: 'Laminates',
    homeTitle: 'Laminates',
    subtitle: 'Tactile matte solids, stone textures & woodgrain finishes',
    description:
      'Versatile decorative laminates ranging from serene warm ivory and cashmere matte solids to expressive stone, marble, and timber textures—crafted for high-traffic kitchens, wardrobes, and work surfaces.',
    highlights: [
      'Soft matte solids, realistic woodgrains & contemporary stone finishes',
      'Coordinated colour palettes for cabinetry, shutters & countertops',
      'Large-format swatch books and display boards for accurate pairing',
    ],
    primaryImage: ARCHITECTURAL_IMAGERY.luxuryLaminates,
    secondaryImage: SHOWROOM_PHOTOS.kitchenDisplay,
    imageAlt: 'Curated architectural laminates in warm ivory, cashmere beige, walnut timber, marble, and dark slate finishes',
    secondaryAlt: 'Cream gloss and matte laminate cabinetry inside the Interior Boxx kitchen studio',
    isAuthenticShowroomPhoto: false,
    objectPosition: 'object-center',
  },
  {
    id: 'interior-hardware',
    index: '06',
    name: 'Interior Hardware',
    homeTitle: 'Interior Hardware',
    subtitle: 'Statement main-door pulls, mortise levers & cabinet fittings',
    description:
      'An extensive gallery of architectural hardware displayed on full-height sliding boards—spanning sculptural main-door pull handles, contemporary mortise lever sets, cabinet pulls, and precision hinges in brass, bronze, rose gold, chrome, and matte black.',
    highlights: [
      'Grand entrance pull handles in antique brass, timber & matte black',
      'Sliding vertical display panels of mortise & lever door handles',
      'Coordinated wardrobe handles, knobs & architectural fittings',
    ],
    primaryImage: SHOWROOM_PHOTOS.pullHandlesBoard,
    secondaryImage: SHOWROOM_PHOTOS.slidingLeverGallery,
    imageAlt: 'Bespoke long main door pull handles in brass, carved bronze, wood, and matte black at Interior Boxx',
    secondaryAlt: 'Illuminated sliding vertical panels displaying contemporary door lever handles at Interior Boxx',
    isAuthenticShowroomPhoto: true,
    objectPosition: 'object-center',
  },
];

export const PRODUCT_GALLERY_ITEMS: readonly GalleryItem[] = [
  {
    id: 'gallery-pull-handles',
    categoryId: 'interior-hardware',
    categoryName: 'Interior Hardware',
    title: 'Statement Main-Door Pull Handles',
    caption:
      'Original showroom display of grand entrance pull handles in antique brass, classical carved finials, walnut-inlaid rods, and knurled matte black finishes.',
    image: SHOWROOM_PHOTOS.pullHandlesBoard,
    alt: 'Collection of luxury brass, bronze, wood, and matte black door pull handles mounted on wood display panels at Interior Boxx',
    aspect: 'portrait',
    isShowroomOriginal: true,
    objectPosition: 'object-center',
  },
  {
    id: 'gallery-lever-handles',
    categoryId: 'interior-hardware',
    categoryName: 'Interior Hardware',
    title: 'Sliding Mortise & Lever Handle Gallery',
    caption:
      'Full-height LED-lit sliding plywood display panels allowing architects and homeowners to compare ergonomic lever profiles and metallic finishes side by side.',
    image: SHOWROOM_PHOTOS.slidingLeverGallery,
    alt: 'Sliding wooden display boards showcasing rows of modern door lever handles in matte black, rose gold, brass, and chrome',
    aspect: 'portrait',
    isShowroomOriginal: true,
    objectPosition: 'object-center',
  },
  {
    id: 'gallery-kitchen-studio',
    categoryId: 'kitchen-fittings',
    categoryName: 'Kitchen Fittings',
    title: 'Modular Kitchen & Tambour Shutter Display',
    caption:
      'Walk-in modular kitchen showcase featuring a black roller tambour appliance unit, smoked glass wall cabinets, wicker vegetable basket, and handleless drawers.',
    image: SHOWROOM_PHOTOS.kitchenDisplay,
    alt: 'Full-scale modular kitchen installation at Interior Boxx showroom with tambour shutter, glass cabinets, and quartz counter',
    aspect: 'portrait',
    isShowroomOriginal: true,
    objectPosition: 'object-center',
  },
  {
    id: 'gallery-brass-motifs',
    categoryId: 'decorative-panels',
    categoryName: 'Decorative Panels',
    title: 'Artisanal Brass Relief & Pooja Door Motifs',
    caption:
      'Intricately detailed antique-finish brass plaques and auspicious traditional emblems mounted on natural timber panels for bespoke pooja rooms and main doors.',
    image: SHOWROOM_PHOTOS.brassMotifsBoard,
    alt: 'Traditional cast brass devotional plaques and ornamental motifs displayed on wooden boards at Interior Boxx',
    aspect: 'portrait',
    isShowroomOriginal: true,
    objectPosition: 'object-center',
  },
  {
    id: 'gallery-showroom-lounge',
    categoryId: 'natural-veneers',
    categoryName: 'Natural Veneers',
    title: 'Material Consultation Lounge & Timber Partitions',
    caption:
      'Our showroom consultation zone showcasing slatted timber ceiling baffles, walnut-framed veneer partitions, and illuminated cabinet handle boards.',
    image: SHOWROOM_PHOTOS.experienceLounge,
    alt: 'Interior Boxx consultation seating area surrounded by cabinet hardware displays, walnut ceiling slats, and veneer panels',
    aspect: 'portrait',
    isShowroomOriginal: true,
    objectPosition: 'object-center',
  },
  {
    id: 'gallery-plywood-veneers',
    categoryId: 'plywood',
    categoryName: 'Plywood',
    title: 'Calibrated Plywood & Book-Matched Veneers',
    caption:
      'Multi-ply hardwood substrates paired with natural walnut and oak veneer leaves for precision cabinetry and architectural joinery.',
    image: ARCHITECTURAL_IMAGERY.plywoodAndVeneer,
    alt: 'Stacked multi-ply hardwood plywood and natural wood veneer sheets on a stone table',
    aspect: 'landscape',
    isShowroomOriginal: false,
    objectPosition: 'object-center',
  },
  {
    id: 'gallery-fluted-panels',
    categoryId: 'decorative-panels',
    categoryName: 'Decorative Panels',
    title: 'Fluted Timber Louvers & Textured Wall Cladding',
    caption:
      'Architectural wall panelling profiles combining linear walnut louvers with dark bronze-charcoal textured panels for warm spatial depth.',
    image: ARCHITECTURAL_IMAGERY.flutedPanels,
    alt: 'Fluted walnut louvers and dark textured decorative wall panels under grazing ceiling illumination',
    aspect: 'landscape',
    isShowroomOriginal: false,
    objectPosition: 'object-center',
  },
  {
    id: 'gallery-laminates-board',
    categoryId: 'laminates',
    categoryName: 'Laminates',
    title: 'Matte Solids, Stone & Timber Laminate Palette',
    caption:
      'Coordinated surface palette spanning warm ivory, cashmere beige, veined marble, natural walnut, and riven charcoal slate laminates.',
    image: ARCHITECTURAL_IMAGERY.luxuryLaminates,
    alt: 'Architectural material flat-lay of matte ivory, beige, marble, walnut, and slate laminate boards',
    aspect: 'landscape',
    isShowroomOriginal: false,
    objectPosition: 'object-center',
  },
  {
    id: 'gallery-showroom-facade',
    categoryId: 'plywood',
    categoryName: 'Showroom',
    title: 'Interior Boxx Multi-Level Showroom — New Hafeezpet',
    caption:
      'Our dedicated four-storey architectural interior materials destination at Subashchandrabose Nagar, New Hafeezpet, Hyderabad.',
    image: SHOWROOM_PHOTOS.facadeAngle,
    alt: 'Exterior view of the Interior Boxx showroom building in New Hafeezpet, Hyderabad',
    aspect: 'portrait',
    isShowroomOriginal: true,
    objectPosition: 'object-center',
  },
];
