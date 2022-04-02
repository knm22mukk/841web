import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MobileNav } from '@components/MobileNav';
import { headerNavLinks } from '@data/headerNavLinks';
import { siteMetaData } from '@data/siteMetaData';

const Header: NextPage = () => {
  return (
    <header className='flex justify-between items-center py-6 border-b'>
      <Link href='/' area-label='ToHome'>
        <a>
          <div className='flex justify-between items-center'>
            <Image src={siteMetaData.siteLogo} width={50} height={50} alt='841logo' />
            <div className='text-3xl font-bold'>株式会社橋市</div>
          </div>
        </a>
      </Link>
      <div className='flex justify-center items-center'>
        <div className='hidden md:block'>
          {headerNavLinks.map((link) => (
            <Link key={link.title} href={link.href}>
              <a className='p-2 font-bold hover:text-indigo-600'>{link.title}</a>
            </Link>
          ))}
        </div>
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
