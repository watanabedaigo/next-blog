import Hero from 'components/hero'
import Container from 'components/container'

export default function Home() {
  return (
    <Container
      large={false}
    >
      <Hero
        title="CUBE"
        subtitle="個人開発"
        imageOn={true}
      />
    </Container>
  )
}
