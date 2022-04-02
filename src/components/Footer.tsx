import { NextPage } from 'next';

const Footer: NextPage = () => {
  return (
    <footer className='text-white bg-blue-600'>
      <div className='flex justify-center pt-5 pb-10'>
        <p className='text-sm'>© Copyright 2022 hashiichi. All rights reserved. </p>
      </div>
    </footer>
  );
};

export default Footer;
