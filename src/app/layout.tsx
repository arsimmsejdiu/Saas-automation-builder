import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Suspense } from "react";
import { Loading } from "@/components/global/loading";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fuzzie.",
  description: "Automate Your Work With Fuzzie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body className={font.className}>
        <Suspense fallback={<Loading />}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            {children}
          </ThemeProvider>
        </Suspense>
          
        </body>
      </html>
    </ClerkProvider>
  );
}
