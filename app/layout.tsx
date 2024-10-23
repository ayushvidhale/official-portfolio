import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Intro from "@/components/intro";
import ContactButton from "@/components/contact-button";
import NextUIWrapper from "@/components/NextUI";

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
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-[#f7ecff] text-gray-950 pt-14`}>
        <NextUIWrapper>
          <ActiveSectionContextProvider>
            {/* <Header /> */}
            <div className="flex flex-col sm:flex-row">
              <aside
                id="default-sidebar"
                className="sm:fixed sm:top-0 sm:left-0 sm:z-40 sm:w-[400px] lg:w-[650px] sm:h-screen sm:transition-transform sm:translate-x-0 w-full relative h-auto"
                aria-label="Sidebar"
              >
                <div className="h-full md:px-4 md:py-8">
                  <Intro />
                </div>
              </aside>

              <div className="flex-grow md:p-4 p-2 sm:ml-[400px] lg:ml-[600px]">
                {children}
              </div>
            </div>
            {/* <Footer /> */}

            <Toaster position="top-right" />
            {/* <ThemeSwitch /> */}
            {/* <ContactButton /> */}
          </ActiveSectionContextProvider>
        </NextUIWrapper>
      </body>
    </html>
  );
}
