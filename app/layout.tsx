import type { Metadata } from "next";
import { Literata, Nunito_Sans } from "next/font/google";
import "./globals.css";

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MultiResize — Turn One Image into Multiple Sizes (Free, in Browser)",
  description:
    "Resize one image into many different sizes at once. Add custom widths and heights or presets, then download every version in a single ZIP—all processed locally in your browser.",
  keywords: [
    "resize one image to multiple sizes",
    "batch image resize",
    "multiple image sizes from one photo",
    "resize image for social media",
    "free image resizer",
  ],
  openGraph: {
    title: "MultiResize — One image, many sizes",
    description:
      "Upload one picture and export multiple resized copies at once. Private, fast, and free in your browser.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "MultiResize — One image, many sizes",
    description:
      "Upload one picture and export multiple resized copies at once. Private, fast, and free in your browser.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`light ${literata.variable} ${nunitoSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
          <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
          <meta name="google-site-verification" content="SyxP_GlpbV2q7l23-vdX_TqA_3qwfMI0yg249pFOnYk" />
      </head>
      <body className="min-h-full flex flex-col selection:bg-primary/20">{children}</body>
    </html>
  );
}
