// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import coustomTheme from "../theme/theme";
import "../styles/global.css";
import "../styles/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider theme={coustomTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
