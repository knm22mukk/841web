import Image from 'next/image';
import Layout from '@components/Layout';
import PageHeader from '@components/PageHeader';
import SectionHeader from '@components/SectionHeader';

const Products = () => {
  return (
    <Layout>
      <PageHeader title='店舗取扱商品' />
      <SectionHeader title='各種ポリ袋' />
      <div className='flex flex-col justify-center items-center py-3 sm:flex-row'>
        <div className='mx-3 max-w-sm'>
          <Image src='/products/product1.png' height={288} width={400} alt='product' className='' />
        </div>
        <div className='mx-3 max-w-sm'>
          <Image src='/products/product2.png' height={288} width={400} alt='product' className='' />
        </div>
      </div>
      <SectionHeader title='各種折箱弁当容器・紙コップ類' />
      <div className='flex flex-col justify-center items-center py-3 sm:flex-row'>
        <div className='mx-3 max-w-sm'>
          <Image src='/products/product3.png' height={288} width={400} alt='product' className='' />
        </div>
        <div className='mx-3 max-w-sm'>
          <Image src='/products/product4.png' height={288} width={400} alt='product' className='' />
        </div>
      </div>
      <SectionHeader title='調味料・食材類' />
      <div className='flex flex-col justify-center items-center py-3 sm:flex-row'>
        <div className='mx-3 max-w-sm'>
          <Image src='/products/product5.png' height={288} width={220} alt='product' className='' />
        </div>
        <div className='mx-3 max-w-sm'>
          <Image src='/products/product6.png' height={288} width={400} alt='product' className='' />
        </div>
      </div>
      <SectionHeader title='包丁・砥石各種' />
      <div className='flex flex-col justify-center items-center py-3 sm:flex-row'>
        <div className='mx-3 max-w-sm'>
          <Image src='/products/product7.png' height={288} width={400} alt='product' className='' />
        </div>
        <div className='mx-3 max-w-sm'>
          <Image src='/products/product8.png' height={288} width={400} alt='product' className='' />
        </div>
      </div>
      <SectionHeader title='文具用品・熨斗紙類' />
      <div className='flex flex-col justify-center items-center py-3 sm:flex-row'>
        <div className='mx-3 max-w-sm'>
          <Image src='/products/product9.png' height={288} width={400} alt='product' className='' />
        </div>
        <div className='mx-3 max-w-sm'>
          <Image
            src='/products/product10.png'
            height={288}
            width={400}
            alt='product'
            className=''
          />
        </div>
      </div>
      <SectionHeader title='リボン・ラッピング資材' />
      <div className='flex flex-col justify-center items-center py-3 sm:flex-row'>
        <div className='mx-3 max-w-sm'>
          <Image
            src='/products/product11.png'
            height={288}
            width={400}
            alt='product'
            className=''
          />
        </div>
        <div className='mx-3 max-w-sm'>
          <Image
            src='/products/product12.png'
            height={288}
            width={400}
            alt='product'
            className=''
          />
        </div>
      </div>
      <SectionHeader title='エプロン・白衣類　食器・グラス類' />
      <div className='flex flex-col justify-center items-center py-3 sm:flex-row'>
        <div className='mx-3 max-w-sm'>
          <Image
            src='/products/product13.png'
            height={288}
            width={400}
            alt='product'
            className=''
          />
        </div>
        <div className='mx-3 max-w-sm'>
          <Image
            src='/products/product14.png'
            height={288}
            width={400}
            alt='product'
            className=''
          />
        </div>
      </div>
    </Layout>
  );
};

export default Products;
