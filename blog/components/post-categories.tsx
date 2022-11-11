import styles from "styles/post-categories.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";

type PostCategoriesProps = {
  categories: [];
};

type categoryProps = {
  name: string;
  slug: string;
};

export default function PostCategories(props: PostCategoriesProps) {
  const { categories } = props;

  return (
    <div className={styles.flexBox}>
      <h3 className={styles.ttl}>
        <FontAwesomeIcon icon={faFolderOpen} />
        <span className="sr-only">Categories</span>
      </h3>
      <ul className={styles.list}>
        {categories.map((category: categoryProps) => {
          return (
            <li key={category.slug} className={styles.item}>
              <Link href={`blog/category/${category.slug}`}>
                {category.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
