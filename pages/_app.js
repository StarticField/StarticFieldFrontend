// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import coustomTheme from "../theme/theme";
import "../styles/global.css";
import "../styles/styles.css";
import "../styles/w3.css";
import {Layout} from "../components/Layout";

function MyApp({ Component, pageProps, ...appProps}, AppProps) {
  var noLayoutNeeded = false;
  if (Component.noLayout){
    noLayoutNeeded = Component.noLayout;
  }

  const LayoutComponent = noLayoutNeeded ? Component : Layout ;
  return (
    // 2. Use at the root of your app
    <NextUIProvider theme={coustomTheme}>
        <title>Startic Field</title>
      <LayoutComponent>
          <Component {...pageProps} />
      </LayoutComponent>
    </NextUIProvider>
  );
}

export default MyApp;
