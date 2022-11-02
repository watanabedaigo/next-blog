import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'

export default function Blog() {
  return (
    <>
      <Meta
        pageTitle='Blog'
        pageDesc='Blog Page'
      />

      <Container
        large={false}
      >
        <Hero
          title="Blog"
          subtitle="Recent Posts"
          imageOn={false}
        />
      </Container>

    </>
  )
}
