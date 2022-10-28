import Hero from 'components/hero'
import Container from 'components/container'


export default function Blog() {
  return (
    <Container
      large={false}
    >
      <Hero
        title="Blog"
        subtitle="Recent Posts"
        imageOn={false}
      />
    </Container>
  )
}
