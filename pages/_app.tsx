import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

// map
import "leaflet/dist/leaflet.css";

import type { AppProps } from "next/app";

import { useEffect } from "react";
import { SSRProvider } from "react-bootstrap";
import Layout from "../components/Layout";

// i18n
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config.js";

// progress
import "../setup/progress/style.css";
import { setupNavProgress } from "../setup/progress";
import ErrorBoundary from "../components/ErrorBoundary";
import { SocialLinksContextProvider } from "../contexts/socialLinks";
import Script from "next/script";

setupNavProgress();

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
        `}
      </Script>
      <SSRProvider>
        <ErrorBoundary>
          <SocialLinksContextProvider value={pageProps["socialLinks"]}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SocialLinksContextProvider>
        </ErrorBoundary>
      </SSRProvider>
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
