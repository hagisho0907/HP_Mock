import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { LoadingScreen } from "@/components/loading-screen";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "NO MORE Inc.",
  description:
    "テクノロジーで人々の記憶に残る新しいストーリー体験を発明するNO MORE Inc.の公式サイトモック。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSans.className}>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
