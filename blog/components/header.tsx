import Logo from "./logo";
import Nav from "./nav";
import Container from "./container";
import styles from "styles/header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container large={true}>
        <div className={styles.flexBox}>
          <Logo boxOn={true} />
          <Nav />
        </div>
      </Container>
    </header>
  );
}
