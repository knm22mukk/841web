import Image from 'next/image';
import Layout from '@components/Layout';
import PageHeader from '@components/PageHeader';
import { SEO } from '@components/SEO';

const Recruit = () => {
  return (
    <Layout>
      <SEO
        pageTitle='株式会社橋市 | 求人情報'
        pageDescription='株式会社橋市では一緒に働いていただける方を募集しています。詳しくはお問い合わせをお願いいたします。'
      />
      <PageHeader title='求人情報' />
      <div className='py-12 text-center'>
        <Image
          src='/images/recruit.jpg'
          width={800}
          height={700}
          alt='recruit-image'
          className=''
        />
        <h4 className='text-2xl font-bold text-center'>現在正社員ドライバーを募集しています。</h4>
        <p className='font-bold'>詳細・ご応募の際はハローワークを通してお願いいたします。</p>
      </div>
    </Layout>
  );
};

export default Recruit;
