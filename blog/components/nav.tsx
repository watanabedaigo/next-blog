import { useState } from "react";
import Link from "next/link";
import styles from "styles/nav.module.scss";

export default function Nav() {
  const [navIsOpen, setnavIsOpen] = useState(false);

  const handleNavToggle = () => {
    setnavIsOpen(!navIsOpen);
  };

  const handleNavClose = () => {
    setnavIsOpen(false);
  };

  return (
    <nav className={navIsOpen ? styles.open : undefined}>
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
