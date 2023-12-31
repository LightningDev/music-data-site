import { Providers } from "@/lib/providers";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import AuthProvider from "@/context/authProvider";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music Data",
  description: "Your Music Data Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = headers().get("x-next-pathname") as string;
  const cookieStore = cookies();
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <AuthProvider
            route={pathname}
            jwtToken={cookieStore.get("token")?.value}
          >
            {children}
          </AuthProvider>
        </body>
      </html>
    </Providers>
  );
}
