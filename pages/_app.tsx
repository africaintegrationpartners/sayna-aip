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

setupNavProgress();

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);

  return (
    <>
      <SSRProvider>
        <Layout>
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </Layout>
      </SSRProvider>
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
