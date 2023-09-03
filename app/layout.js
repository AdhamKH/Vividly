import { Suspense } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { GlobalStyle } from "@/style/globalStyle";
import StyledComponentsRegistry from "@/lib/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vividly",
  description:
    "Vivdly is a dynamic marketing and advertising agency that offers unique and interactive services to clients across all industries.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="keywords" content="vividly,web,marketing" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English"></meta>
      <body className={inter.className}>
        <GlobalStyle />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
