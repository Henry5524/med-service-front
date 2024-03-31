import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Navbar />
      <main className={'app'}>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}
