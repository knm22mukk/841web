import Card from '@components/Card';
import Layout from '@components/Layout';
import PageHeader from '@components/PageHeader';
import { SEO } from '@components/SEO';

const Blog = () => {
  return (
    <Layout>
      <SEO
        pageTitle='株式会社橋市 | 更新情報'
        pageDescription='店舗や商品に関する最新情報をご案内いたします。'
      />
      <PageHeader title='更新情報' />
      <div className='py-8 px-3'>
        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
          <Card title='テストコンポーネント' />
          <Card title='テストコンポーネント' />
          <Card title='テストコンポーネント' />
          <Card title='テストコンポーネント' />
          <Card title='テストコンポーネント' />
          <Card title='テストコンポーネント' />
          <Card title='テストコンポーネント' />
          <Card title='テストコンポーネント' />
          <Card title='テストコンポーネント' />
          <Card title='テストコンポーネント' />
          <Card title='テストコンポーネント' />
          <Card title='テストコンポーネント' />
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
