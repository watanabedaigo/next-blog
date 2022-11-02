import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'

export default function Home() {
  return (
    <>
      <Meta />

      <Container
        large={false}
      >
        <Hero
          title="CUBE"
          subtitle="個人開発"
          imageOn={true}
        />
      </Container>
    </>

  )
}
