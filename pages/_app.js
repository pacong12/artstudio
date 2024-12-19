import "@/styles/globals.css";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  // Render the Header component only on pages other than the homepage
  return (
    <>
      {router.pathname !== "/" && <Header />}
      <main>
        <Breadcrumb />
        <Component {...pageProps} />
      </main>
    </>
  );
}
