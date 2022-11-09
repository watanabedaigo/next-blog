import Link from "next/link";
import styles from "styles/nav.module.scss";

export default function Nav() {
  return (
    <nav>
      <ul className={styles.nav__list}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/blog/categories/fun">Categories</Link>
        </li>
      </ul>
    </nav>
  );
}
