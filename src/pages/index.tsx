import type { NextPage } from 'next';
import Layout from '@components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className='h-[500px]'>これはホームです</h1>
    </Layout>
  );
};

export default Home;
