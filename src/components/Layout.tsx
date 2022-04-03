import { ReactNode } from 'react';
import Footer from '@components/Footer';
import Header from '@components/Header';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main className='px-4 mx-auto mb-auto max-w-3xl sm:px-6 xl:px-0 xl:max-w-5xl'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
