import { ReactNode } from 'react';
import Header from 'components/header'
import Footer from 'components/footer'

type LayoutProps = {
  children: ReactNode;
};

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <>
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </>
  )
}