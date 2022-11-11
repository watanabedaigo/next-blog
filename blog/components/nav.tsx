import { useState } from "react";
import Link from "next/link";
import styles from "styles/nav.module.scss";

export default function Nav() {
  const [navIsActive, setNavIsActive] = useState(false);

  const handleNavToggle = () => {
    setNavIsActive(!navIsActive);
  };

  const handleNavClose = () => {
    setNavIsActive(false);
  };

  return (
    <nav className={navIsActive ? styles.open : undefined}>
      <button onClick={handleNavToggle} className={styles.btn}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={styles.list}>
        <li>
          <Link href="/" onClick={handleNavClose}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={handleNavClose}>
            About
          </Link>
        </li>
        <li>
          <Link href="/blog" onClick={handleNavClose}>
            Blog
          </Link>
        </li>
        <li>
          <Link href="/blog/categories/fun" onClick={handleNavClose}>
            Categories
          </Link>
        </li>
      </ul>
    </nav>
  );
}
