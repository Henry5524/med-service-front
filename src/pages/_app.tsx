import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider className="flex flex-col min-h-screen">
      <Navbar />
      <main className={"app flex-1"}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </NextUIProvider>
  );
}
