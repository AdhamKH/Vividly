import { Suspense } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Loading from "./loading";
import { GlobalStyle } from "@/style/globalStyle";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vividly",
  description: "",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalStyle />
        {children}
      </body>
    </html>
  );
}
