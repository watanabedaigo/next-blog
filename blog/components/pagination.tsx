import styles from "styles/pagination.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

type PaginationProps = {
  prevText: string;
  prevUrl: string;
  nextText: string;
  nextUrl: string;
};

export default function Pagination(props: PaginationProps) {
  const { prevText, prevUrl, nextText, nextUrl } = props;

  return (
    <ul className={styles.list}>
      {prevText && prevUrl && (
        <li className={styles.item}>
          <Link href={prevUrl}>
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>{prevText}</span>
          </Link>
        </li>
      )}
      {nextText && nextUrl && (
        <li className={`${styles.item} ${styles.item_next}`}>
          <Link href={nextUrl}>
            <FontAwesomeIcon icon={faChevronRight} />
            <span>{nextText}</span>
          </Link>
        </li>
      )}
    </ul>
  );
}
