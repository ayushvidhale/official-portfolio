import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Intro from "@/components/intro";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ayush | Personal Portfolio",
  description:
    "Ayush is a full-stack developer with experience in node.js frameworks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light !scroll-smooth">
      <body
        className={`${inter.className} bg-[#e8e4e4] text-gray-950 relative pt-14`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {/* <Header /> */}
            <aside
              id="default-sidebar"
              className="sm:fixed sm:top-0 sm:left-0 sm:z-40 sm:w-96 sm:h-screen sm:transition-transform sm:translate-x-0 w-full relative h-auto"
              aria-label="Sidebar"
            >
              <div className="h-full px-4 py-8">
                <Intro />
              </div>
            </aside>

            <div className="md:p-4 p-2 sm:ml-96">{children}</div>
            {/* <Footer /> */}

            <Toaster position="top-right" />
            {/* <ThemeSwitch /> */}
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
