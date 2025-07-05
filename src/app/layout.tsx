import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const metadata: Metadata = {
  title: "Ceyhun Emlak - Çok Yakında",
  description: "Ceyhun Emlak - Tokat'ın en güvenilir gayrimenkul danışmanı. Yeni sitemiz çok yakında!",
  keywords: "ceyhun emlak, tokat emlak, gayrimenkul tokat, emlak ofisi, tokat emlak ofisi, tokat gayrimenkul, ceyhun emlak tokat",
  authors: [{ name: "Ceyhun Emlak" }],
  creator: "Ceyhun Emlak",
  publisher: "Ceyhun Emlak",
  formatDetection: {
    telephone: true,
    email: true,
  },
  openGraph: {
    title: "Ceyhun Emlak - Çok Yakında",
    description: "Ceyhun Emlak - Tokat'ın en güvenilir gayrimenkul danışmanı. Yeni sitemiz çok yakında!",
    siteName: "Ceyhun Emlak",
    locale: "tr_TR",
    type: "website",
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
