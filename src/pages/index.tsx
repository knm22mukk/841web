import type { NextPage } from 'next';
import { AiFillHome } from 'react-icons/ai';

const Home: NextPage = () => {
  return (
    <div>
      <h1 className='text-red-900'>ホームです。</h1>
      <AiFillHome />
    </div>
  );
};

export default Home;
