import type { NextPage } from 'next';
import Image from 'next/image';
import { SEO } from '../components/SEO';
import Layout from '@components/Layout';
import SectionHeader from '@components/SectionHeader';

const Home: NextPage = () => {
  return (
    <Layout>
      <SEO pageTitle='株式会社橋市 | トップページ' />
      <Image src='/images/hashiich.jpg' alt='hashiichi' width={1280} height={700} className='' />
      <SectionHeader title='株式会社橋市とは' />
    </Layout>
  );
};

export default Home;
