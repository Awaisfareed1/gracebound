import { Inter, Roboto, Playfair_Display, Montserrat } from 'next/font/google';

// Primary font
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// Secondary font (optional)
export const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const playfair = Playfair_Display({
  weight: ['400','500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});
