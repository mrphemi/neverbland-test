import "./globals.css";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";

import Footer from "@/components/common/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "TV Bland",
    description: "Home for TV shows",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`font-light bg-sh-blue-primary text-white flex min-h-screen flex-col justify-between ${outfit.className}`}
            >
                {children}
                <Footer />
            </body>
        </html>
    );
}
