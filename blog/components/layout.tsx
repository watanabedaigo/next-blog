import { ReactNode } from "react";
import Header from "components/header";
import Footer from "components/footer";
import styles from "styles/layout.module.scss";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout(props: LayoutProps) {
  const { children } = props;

  if (typeof window !== "undefined") {
    const setMainPadding = () => {
      const header = document.getElementsByTagName("header")[0];
      const headerHeght = header.clientHeight;
      const main = document.getElementsByTagName("main")[0];
      main.style.setProperty("--padding", `${headerHeght}px`);
    };

    window.addEventListener("resize", () => {
      setMainPadding();
    });

    window.addEventListener("load", () => {
      setMainPadding();
    });
  }

  return (
    <>
      <Header />

      <main className={styles.main}>{children}</main>

      <Footer />
    </>
  );
}
