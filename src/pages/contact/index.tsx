import Button from '@components/Button';
import Layout from '@components/Layout';
import PageHeader from '@components/PageHeader';
import { SEO } from '@components/SEO';

const Contact = () => {
  const contactSubmit = (e: any) => {
    e.preventDefault();
    console.log('お問い合わせ送信');
  };

  return (
    <Layout>
      <SEO
        pageTitle='株式会社橋市 | お問合せ'
        pageDescription='株式会社橋市へのお問い合わせはこちらのページからお願いいたします。'
      />
      <PageHeader title='お問い合わせページ' />
      <p className='text-sm text-gray-500'>
        お問い合わせはこちらからお願いいたします。
        <br />
        お問い合わせいただいてから2、3日以内にご連絡させていただきます。
      </p>
      <form className='flex flex-col p-8 mx-auto' onSubmit={contactSubmit}>
        <label htmlFor='name' className='mt-8 mb-2 font-light text-gray-500'>
          会社名
        </label>
        <input
          type='text'
          className='py-1 px-3 w-full text-base leading-8 text-gray-700 focus:bg-white rounded border border-gray-300 focus:border-indigo-500 outline-none focus:ring-2 focus:ring-indigo-200 transition-colors duration-200 ease-in-out'
        />
        <label htmlFor='name' className='mt-8 mb-2 font-light text-gray-500'>
          お名前
        </label>
        <input
          type='text'
          className='py-1 px-3 w-full text-base leading-8 text-gray-700 focus:bg-white rounded border border-gray-300 focus:border-indigo-500 outline-none focus:ring-2 focus:ring-indigo-200 transition-colors duration-200 ease-in-out'
        />
        <label htmlFor='name' className='mt-8 mb-2 font-light text-gray-500'>
          ご連絡先メールアドレス
        </label>
        <input
          type='text'
          className='py-1 px-3 w-full text-base leading-8 text-gray-700 focus:bg-white rounded border border-gray-300 focus:border-indigo-500 outline-none focus:ring-2 focus:ring-indigo-200 transition-colors duration-200 ease-in-out'
        />
        <label htmlFor='name' className='mt-8 mb-2 font-light text-gray-500'>
          お問合せ内容
        </label>
        <textarea className='py-1 px-3 w-full text-base leading-8 text-gray-700 focus:bg-white rounded border border-gray-300 focus:border-indigo-500 outline-none focus:ring-2 focus:ring-indigo-200 transition-colors duration-200 ease-in-out' />
        <div className='pt-8 text-center'>
          <Button title='送信する' />
        </div>
      </form>
    </Layout>
  );
};

export default Contact;
