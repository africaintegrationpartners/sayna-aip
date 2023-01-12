import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

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
          <Component {...pageProps} />
        </Layout>
      </SSRProvider>
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
