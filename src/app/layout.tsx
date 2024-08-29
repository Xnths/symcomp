import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SYMCOMP | Aproximando a computação e a sociedade",
  description: "O Simpósio da Computação promove eventos relacionados à computação na Universidade de São Paulo campus Butantã. Com alunos do curso de Bacharelado em Ciência da Computação, oferecido pelo Instituto de Matemática e Estatística (IME), somos responsáveis por aproximar os alunos de graduação da sociedade, fortalecendo a presença do BCC na comunidade interna e externa à USP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
