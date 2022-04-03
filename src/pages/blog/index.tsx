import Card from '@components/Card';
import Layout from '@components/Layout';
import PageHeader from '@components/PageHeader';

const Blog = () => {
  return (
    <Layout>
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
