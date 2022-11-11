import Hero from "components/hero";
import Container from "components/container";
import PostBody from "components/post-body";
import Contact from "components/contact";
import Meta from "components/meta";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "components/two-column";
import Accordion from "components/accordion";
import Image from "next/legacy/image";
import about from "images/about.jpg";

export default function About() {
  return (
    <>
      <Meta
        pageTitle="About"
        pageDesc="About Page"
        pageImg={about.src}
        pageImgW={about.width}
        pageImgH={about.height}
      />

      <Container large={false}>
        <Hero
          title="About"
          subtitle="About development activities"
          imageOn={false}
        />

        <figure>
          <Image
            src={about}
            alt=""
            layout="responsive"
            sizes="(min-width: 1152px) 1152px, 100vw"
            priority
            placeholder="blur"
          />
        </figure>

        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <p>
                testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
              </p>
              <h2>test</h2>
              <p>
                testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
              </p>
              <h3>test</h3>
              <p>
                testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
              </p>
              <h3>test</h3>
              <p>
                testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
              </p>
              <h2>test</h2>
              <p>
                testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
              </p>
              <h3>test</h3>
              <p>
                testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
              </p>
              <h3>test</h3>
              <p>
                testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
              </p>
              <div>
                <h2>FAQ</h2>
                <Accordion heading="HTML">
                  <p>マークアップ言語。骨組みを作る。</p>
                </Accordion>
                <Accordion heading="CSS">
                  <p>スタイルシート言語。見た目を整える。</p>
                </Accordion>
                <Accordion heading="JavaScript">
                  <p>プログラミング言語。演出面の実装、要素の生成が可能。</p>
                </Accordion>
              </div>
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <Contact />
          </TwoColumnSidebar>
        </TwoColumn>
      </Container>
    </>
  );
}
