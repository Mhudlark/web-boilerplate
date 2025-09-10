import { Inter, Montserrat } from "next/font/google";

// Body font - Inter from Google Fonts
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Heading font - Using Montserrat from Google Fonts
// You can replace this with a local font later
export const headingFont = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

/* Example for using a local font:
import localFont from 'next/font/local';

export const headingFont = localFont({
  src: [
    {
      path: '../public/fonts/Heading-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Heading-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Heading-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-heading',
  display: 'swap',
});
*/
