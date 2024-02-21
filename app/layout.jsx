import { 
  Barlow_Semi_Condensed,
  Barlow_Condensed,

} from "next/font/google";
import "./globals.css";

const barlow_semi_condensed = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const barlow_condensed = Barlow_Condensed({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata = {
  title: "SymComp",
  description: "Simpósio da Computação IME-USP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={barlow_semi_condensed.className}>{children}</body>
    </html>
  );
}

<link rel="stylesheet" href="style.css"/>