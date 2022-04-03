import Image from 'next/image';

type Props = {
  title: string;
};

const Card = ({ title }: Props) => {
  return (
    <div className='mx-auto max-w-sm bg-white rounded-lg border border-gray-200 shadow-md'>
      <Image
        src='/products/product1.png'
        width={384}
        height={250}
        alt='newsimage'
        className='rounded-t-lg'
      />
      <div className='p-3'>
        <h4 className='mb-2 text-xl font-semibold tracking-tight'>{title}</h4>
      </div>
      <p className='mb-2 text-center text-gray-500'>2022年4月1日</p>
    </div>
  );
};

export default Card;
