import { useState } from "react";
import Link from "next/link";
import styles from "styles/nav.module.scss";

export default function Nav() {
  const [navIsActive, setNavIsActive] = useState(false);

  const handleSetNavIsActive = () => {
    setNavIsActive(!navIsActive);
  };

  return (
    <nav className={navIsActive ? styles.open : undefined}>
      <button onClick={handleSetNavIsActive} className={styles.btn}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={styles.list}>
        <li>
          <Link href="/" onClick={handleSetNavIsActive}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={handleSetNavIsActive}>
            About
          </Link>
        </li>
        <li>
          <Link href="/blog" onClick={handleSetNavIsActive}>
            Blog
          </Link>
        </li>
        <li>
          <Link href="/blog/categories/fun" onClick={handleSetNavIsActive}>
            Categories
          </Link>
        </li>
      </ul>
    </nav>
  );
}
