import { getAllCategories, getAllPosts } from "lib/api";
import { eyecatchLocal } from "lib/constants";
import Container from "components/container";
import PostHeader from "components/post-header";
import Meta from "components/meta";
import Posts from "components/posts";

type CategoryProps = {
  targetPosts: [
    {
      title: string;
      slug: string;
      eyecatch: {
        url: string;
        height: number;
        width: number;
      };
      categories: [
        {
          name: string;
        }
      ];
    }
  ];
  title: string;
};

export default function Category(props: CategoryProps) {
  const { targetPosts, title } = props;

  return (
    <>
      <Meta pageTitle={title} pageDesc={`${title}に関する記事`} />

      <Container large={false}>
        <PostHeader title={title} subtitle="Blog Categories" publish="" />
        <Posts allPosts={targetPosts} />
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const allCategories = await getAllCategories(3);

  return {
    paths: allCategories.map(
      (category: { slug: string }) => `/blog/categories/${category.slug}`
    ),
    fallback: false,
  };
}

export async function getStaticProps(context: { params: { slug: string } }) {
  const slug = context.params.slug;
  let title = "";
  const allPosts = await getAllPosts();
  const targetPosts = allPosts.filter(
    (post: { categories: [{ slug: string; name: string }] }) => {
      for (let i = 0; i < post.categories.length; i++) {
        if (post.categories[i].slug === slug) {
          if (!title) title = post.categories[i].name;
          return post;
        }
      }
    }
  );
  for (const post of targetPosts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
  }

  return {
    props: {
      targetPosts: targetPosts,
      title: title,
    },
  };
}
