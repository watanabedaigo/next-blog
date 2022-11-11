import styles from "styles/post-header.module.scss";
import ConvertDate from "components/convert-date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

type PostHeaderProps = {
  title: string;
  subtitle: string;
  publish: string;
};

export default function PostHeader(props: PostHeaderProps) {
  const { title, subtitle, publish } = props;

  return (
    <div className={styles.wrapper}>
      <p className={styles.ttl}>{subtitle}</p>
      <h1 className={styles.subttl}>{title}</h1>
      {publish && (
        <div className={styles.time}>
          <FontAwesomeIcon icon={faClock} size="lg" color="#aaaaaa" />
          <ConvertDate dateISO={publish} />
        </div>
      )}
    </div>
  );
}
