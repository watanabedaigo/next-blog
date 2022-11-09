import { getAllPosts } from "lib/api";
import { eyecatchLocal } from "lib/constants";
import Hero from "components/hero";
import Container from "components/container";
import Meta from "components/meta";
import Posts from "components/posts";
import Pagination from "components/pagination";

type HomeProps = {
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

export default function Home(props: HomeProps) {
  const { allPosts } = props;
  return (
    <>
      <Meta />

      <Container large={false}>
        <Hero title="CUBE" subtitle="個人開発" imageOn={true} />
        <Posts allPosts={allPosts} />
        <Pagination
          prevText=""
          prevUrl=""
          nextText="More Posts"
          nextUrl="/blog/"
        />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPosts(4);

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
