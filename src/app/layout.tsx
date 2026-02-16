import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/Sidebar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paróquia São José - Caraguatatuba",
  description:
    "Site oficial da Paróquia São José em Caraguatatuba, SP. Encontre informações sobre missas, eventos, ministérios e serviços comunitários. Junte-se a nós na fé e na celebração da vida cristã.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="antialiased bg-brand-0">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <div className="grid-cols-app grid min-h-screen">
          <Sidebar />
          <main className="px-8 pt-8 pb-12">{children}</main>
        </div>
      </body>
    </html>
  );
}
