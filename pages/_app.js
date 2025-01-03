import "@/styles/globals.css";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Sembunyikan Header dan Breadcrumb untuk halaman / dan semua rute di bawah /dashboard
  const hidePage = router.pathname === "/" || router.pathname.startsWith("/dashboard") || router.pathname.startsWith("/auth");

  return (
    <>
      {!hidePage && <Header />}
      <main>
        {!hidePage && <Breadcrumb />}
        <Component {...pageProps} />
      </main>
    </>
  );
}
