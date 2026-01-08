import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter for that clean look
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Onyx Financial",
  description: "Mock Portfolio Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // ADDED: className="dark"
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50`}>
        {/* The "Desktop" Layout Grid */}
        <div className="flex min-h-screen">
          <Sidebar />
          
          {/* Main Content Area */}
          <main className="flex-1 bg-zinc-50 dark:bg-zinc-950">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}