import './globals.css';
import localFont from 'next/font/local';
const hypermarket = localFont({ src: '../public/fonts/Hypermarket-Regular.ttf', variable: '--font-hypermarket', display: 'swap' });
export const metadata = { title: 'КСИВА — текстовая новелла', description: 'Одна в своём маленьком прекрасном катере.', icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.svg` } };
export default function Layout({ children }) { return <html lang="ru" className={hypermarket.variable}><body style={{ fontFamily: hypermarket.style.fontFamily }}>{children}</body></html>; }
