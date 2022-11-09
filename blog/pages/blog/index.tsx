import { getAllPosts } from "lib/api";
import { eyecatchLocal } from "lib/constants";
import Hero from "components/hero";
import Container from "components/container";
import Meta from "components/meta";
import Posts from "components/posts";

type BlogProps = {
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

export default function Blog(props: BlogProps) {
  const { allPosts } = props;

  return (
    <>
      <Meta
        pageTitle="Blog"
        pageDesc="Blog Page"
        pageImg=""
        pageImgW=""
        pageImgH=""
      />

      <Container large={false}>
        <Hero title="Blog" subtitle="Recent Posts" imageOn={false} />
        <Posts allPosts={allPosts} />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPosts();

  for (const post of allPosts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
  }

  return {
    props: {
      allPosts: allPosts,
    },
  };
}
