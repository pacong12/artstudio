import "@/styles/globals.css";
import Header from "@/components/header";
import Breadcrumb from "@/components/breadcumb";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb />
        <Component {...pageProps} />
      </main>
    </>
  );
}
