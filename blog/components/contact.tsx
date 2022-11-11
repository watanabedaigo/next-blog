import Social from "./social";
import styles from "styles/contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.ttl}>Contact</h3>
      <Social iconLarge={true} />
      <address>@mailaddress</address>
    </div>
  );
}
