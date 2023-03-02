import rootReducer from "@/modules";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";
import { createStore } from "redux";

const store = createStore(rootReducer);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </Provider>
  );
}
