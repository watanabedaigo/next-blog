import { getPostBySlug, getAllSlugs } from "lib/api";
import { extractText } from "lib/extract-text";
import { eyecatchLocal } from "lib/constants";
import { prevNextPost } from "lib/prev-next-post";
import Container from "components/container";
import PostHeader from "components/post-header";
import PostBody from "components/post-body";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "components/two-column";
import ConvertBody from "components/convert-body";
import PostCategories from "components/post-categories";
import Meta from "components/meta";
import Pagination from "components/pagination";
import Image from "next/legacy/image";

type ScheduleProps = {
  title: string;
  publish: string;
  content: string;
  eyecatch: any;
  categories: [];
  description: string;
  prevPost: {
    title: string;
    slug: string;
  };
  nextPost: {
    title: string;
    slug: string;
  };
};

export default function Post(props: ScheduleProps) {
  const {
    title,
    publish,
    content,
    eyecatch,
    categories,
    description,
    prevPost,
    nextPost,
  } = props;

  return (
    <>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />

      <Container large={false}>
        <article>
          <PostHeader
            title={title}
            subtitle="Blog Articles"
            publish={publish}
          />
          <figure>
            <Image
              src={eyecatch.url}
              alt=""
              width={eyecatch.width}
              height={eyecatch.height}
              layout="responsive"
              sizes="(min-width: 1152px) 1152px, 100vw"
              priority
            />
          </figure>
          <TwoColumn>
            <TwoColumnMain>
              <PostBody>
                <ConvertBody contentHTMl={content} />
              </PostBody>
            </TwoColumnMain>
            <TwoColumnSidebar>
              <PostCategories categories={categories} />
            </TwoColumnSidebar>
          </TwoColumn>
          <Pagination
            prevText={prevPost.title}
            prevUrl={`/blog/${prevPost.slug}`}
            nextText={nextPost.title}
            nextUrl={`/blog/${nextPost.slug}`}
          />
        </article>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const allSlugs = await getAllSlugs(5);

  return {
    paths: allSlugs.map((slug: { slug: string }) => `/blog/${slug.slug}`),
    fallback: "blocking",
  };
}

export async function getStaticProps(context: { params: { slug: string } }) {
  const slug = context.params.slug;
  const post = await getPostBySlug(slug);
  if (!post) {
    return { notFound: true };
  }
  const description = extractText(post.content);
  const eyecatch = post.eyecatch ?? eyecatchLocal;
  const allSlugs = await getAllSlugs();
  const [prevPost, nextPost] = prevNextPost(allSlugs, slug);

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: eyecatch,
      categories: post.categories,
      description: description,
      prevPost: prevPost,
      nextPost: nextPost,
    },
  };
}
