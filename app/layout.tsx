import { GeistSans } from "geist/font";
import "./globals.css";

import { APP_CONFIG } from "../config/index";
import { Providers } from "../providers/index";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Camboo - O Maior Marketplace de Trocas do Brasil",
  description: "O Maior Marketplace de Trocas do Brasil",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body
        className="text-foreground overscroll-x-none"
        style={{ backgroundColor: APP_CONFIG.layout.mainBackgroundColor }}
      >
        <Providers>
          <main className="flex flex-col min-h-screen">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
