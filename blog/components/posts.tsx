import styles from "styles/posts.module.scss";
import Image from "next/legacy/image";
import Link from "next/link";

type PostsProps = {
  allPosts: [
    {
      title: string;
      slug: string;
      eyecatch: {
        url: string;
        height: number;
        width: number;
      };
    }
  ];
};

type postProps = {
  title: string;
  slug: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
};

export default function Posts(props: PostsProps) {
  const { allPosts } = props;

  return (
    <ul className={styles.posts__list}>
      {allPosts.map((post: postProps) => {
        return (
          <li key={post.slug} className={styles.posts__item}>
            <Link href={`/blog/${post.slug}`}>
              <div className={styles.posts__item__img}>
                <Image
                  src={post.eyecatch.url}
                  layout="fill"
                  objectFit="cover"
                  sizes="100vw"
                />
              </div>
              <p>{post.title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
