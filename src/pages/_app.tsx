import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Layout from '@/components/Layout';
import { inter, roboto, playfair } from "@/lib/fonts"
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${roboto.variable} ${playfair.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
