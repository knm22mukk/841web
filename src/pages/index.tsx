import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SEO } from '../components/SEO';
import Button from '@components/Button';
import Card from '@components/Card';
import Layout from '@components/Layout';
import PageHeader from '@components/PageHeader';

const Home: NextPage = () => {
  return (
    <Layout>
      <SEO pageTitle='株式会社橋市 | トップページ' />
      <Image src='/images/hashiich.jpg' alt='hashiichi' width={1280} height={700} className='' />
      <PageHeader title='株式会社橋市とは' />
      <p className='text-gray-500'>
        株式会社橋市は主に、厨房機器類・調理道具類・食器類・梱包材料・コンテナー・洗剤類・衛生用品・店舗装飾品文具類・紙袋類・ラッピング資材・使い捨て容器等々の商品を幅広く取り扱っている会社です。
        <br />
        一般の方から業者の方まで購入できる店舗をもちお客様の用途に合わせてあらゆるニーズにお応えいたします。
      </p>
      <PageHeader title='更新情報' />
      <div className='py-8 px-3'>
        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
          <Card title='テストコンポーネント' />
          <Card title='テストコンポーネント' />
          <Card title='テストコンポーネント' />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center my-5 h-56 border-y border-gray-200'>
        <div className='py-3 text-2xl font-bold'>CONTACT</div>
        <p className='pb-5 text-gray-500'>ご意見・ご質問などは、下記からお問い合わせください。</p>
        <Link href='/contact'>
          <a>
            <Button title='お問い合わせ' />
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
