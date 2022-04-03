import Image from 'next/image';
import Layout from '@components/Layout';
import PageHeader from '@components/PageHeader';

const Recruit = () => {
  return (
    <Layout>
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
