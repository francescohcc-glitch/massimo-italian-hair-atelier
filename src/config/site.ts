// All provisional copy and imagery live here. Set domain only after ownership is confirmed.
export const site = {
  brand: 'MASSIMO', professionalName: 'Massimo', subtitle: 'Italian Hair Atelier',
  headline: 'The Art of Italian Hair', location: 'Houston, Texas',
  intro: 'Where Italian artistry meets modern individuality. Discover a personal approach to hairstyling for men and women in Houston.',
  biography: { eyebrow: 'Meet Massimo', headline: "An Italian soul.\nAn artist’s vision.", text: 'Rooted in the spirit of Italian artistry, Massimo approaches hairstyling as a balance of technique, creativity, and individuality. Every detail matters. Every look begins with understanding the person behind it.', provisional: true },
  philosophy: { headline: 'True style is never accidental.', text: 'It is the harmony between who you are and how you express yourself.', provisional: true },
  phone: '713-894-9586', phoneHref: '+17138949586', sms: '+17138949586', email: '', instagram: '', domain: '',
  address: { workplace: 'Toni Salon', street: '4444 Richmond Ave', city: 'Houston', region: 'TX', postalCode: '77027', country: 'US' },
  maps: 'https://www.google.com/maps/dir/?api=1&destination=4444+Richmond+Ave+Houston+TX+77027',
  images: { portrait: '/images/massimo/reference.png', portraitIsFlyer: true, salon: '', },
  services: [
    { title: 'Women’s Hair Design', description: 'A considered approach to shape, movement, and contemporary personal style.', enabled: true },
    { title: 'Men’s Hair Design', description: 'Refined cuts, thoughtful detail, and a look that feels entirely your own.', enabled: true },
    { title: 'Color & Dimension', description: 'Color, highlights, and dimensional techniques.', enabled: false },
    { title: 'Signature Styling', description: 'Personalized finishing and special occasions.', enabled: false },
  ],
  sections: {
    expertise: { eyebrow: 'Crafted for your individuality', heading: 'The art of', accent: 'the details.' },
    portfolio: { eyebrow: 'A reflection of style', heading: 'Selected', accent: 'work.', note: 'A glimpse of the visual direction. These temporary editorial images are inspiration only; Massimo’s own portfolio is coming soon.' },
    location: { eyebrow: 'Find me in Houston', heading: 'Your next look', accent: 'begins here.' },
    contact: { eyebrow: 'Italian craftsmanship. Modern elegance.', heading: 'Let’s create', middle: 'something', accent: 'beautiful.', text: 'Your next great look starts with a conversation.' },
  },
  servicesNote: 'An introduction to the approach. Please call or text to discuss available services and your individual needs.',
  portfolio: [
    { src: '/images/portfolio/editorial-01.jpg', title: 'Soft movement', category: 'Women', alt: 'Editorial inspiration: long hair with soft natural movement', placeholder: true },
    { src: '/images/portfolio/editorial-02.jpg', title: 'Natural character', category: 'Men', alt: 'Editorial inspiration: men’s textured hairstyle', placeholder: true },
    { src: '/images/portfolio/editorial-03.jpg', title: 'Individual expression', category: 'Women', alt: 'Editorial inspiration: expressive women’s hair portrait', placeholder: true },
  ],
  seo: { title: 'Massimo | Italian Hairstylist in Houston, TX', description: 'Discover Massimo’s personal approach to hair design for men and women in Houston. Find him at Toni Salon, 4444 Richmond Ave. Call or text 713-894-9586.', socialImage: '/opengraph-image' },
};
export const navigation = [['Home','home'],['The Artist','artist'],['Expertise','expertise'],['Portfolio','portfolio'],['Location','location'],['Contact','contact']] as const;
