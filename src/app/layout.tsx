import type { Metadata } from "next";
import { VT323 as Pixel} from "next/font/google";
import "../styles/globals.css";

const pixel = Pixel({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
});

export const metadata: Metadata = {
  title: "silverwolf.dev",
  description: "Silverwolf's boyfriend's personal website dump",
  icons: {
    icon: '/favicon.png',
  },
  metadataBase: new URL('https://silverwolf.dev'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pixel.variable} font-pixel`}
      >
        {children}
      </body>
    </html>
  );
}
