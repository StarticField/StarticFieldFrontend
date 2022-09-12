// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import coustomTheme from "../theme/theme";
import "../styles/global.css";
import "../styles/styles.css";
import {Layout} from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider theme={coustomTheme}>
        <title>Startic Field</title>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}

export default MyApp;
