import { useState } from "react";
import Link from "next/link";
import styles from "styles/nav.module.scss";

export default function Nav() {
  const [navIsActive, setNavIsActive] = useState(false);

  const handleSetNavIsActive = () => {
    setNavIsActive(!navIsActive);
  };

  return (
    <nav>
      <button
        onClick={handleSetNavIsActive}
        className={navIsActive ? `${styles.btn} ${styles.active}` : styles.btn}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul
        className={
          navIsActive ? `${styles.list} ${styles.active}` : styles.list
        }
      >
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
