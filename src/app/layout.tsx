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
        <div className="lg:grid-cols-app min-h-screen lg:grid">
          <Sidebar />
          <main className="max-w-[100vw] px-4 pt-30 pb-12 lg:col-start-2 lg:px-8 lg:pt-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
