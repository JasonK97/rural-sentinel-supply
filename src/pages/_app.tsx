import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { Analytics } from '@vercel/analytics/react';

import "tailwindcss/tailwind.css";
import "../styles/app.css";

import { defaultSEO } from "../../next-seo.config";
import { WishlistProvider } from "../context/wishlist";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WishlistProvider>
      <Layout>
        {/* <DefaultSeo {...defaultSEO} /> */}
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </WishlistProvider>
  );
}

export default MyApp;
