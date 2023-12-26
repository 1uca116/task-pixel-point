'use client';

import { useEffect, useState } from 'react';

import Burger from 'components/shared/header/burger';
import Link from 'components/shared/link';
import MobileMenu from 'components/shared/mobile-menu';
import dropdown from 'images/svg/dropdown.svg';
import Button from '../button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () =>
    setIsMobileMenuOpen((prevIsOpen) => !prevIsOpen);

  return (
    <>
      <header
        id='site-header-inner'
        className='fixed left-0 right-0 top-0 z-50 h-[64px] px-safe pt-safe bg-transparent'
      >
        <nav
          className='container flex h-full items-center justify-end gap-16 2xl:gap-[244px]'
          aria-label='Global'
        >
          <ul className='hidden lg:flex text-common items-center gap-10 '>
            <li>
              <Link href='/' theme='default'>
                Integrations
              </Link>
            </li>
            <li>
              <Link
                href='/'
                theme='default'
                className={'flex gap-1 items-center justify-center'}
              >
                <span>Code platform</span>
                <img src={dropdown} width={'12px'} height={'12px'} alt='' />
              </Link>
            </li>
            <li>
              <Link
                href='/'
                theme='default'
                className={'flex gap-1 items-center justify-center'}
              >
                <span>Company</span>
                <img src={dropdown} width={'12px'} height={'12px'} alt='' />
              </Link>
            </li>
            <li>
              <Link
                href='/'
                theme='default'
                className={'flex gap-1 items-center justify-center'}
              >
                <span>Resources</span>
                <img src={dropdown} width={'12px'} height={'12px'} alt=''/>
              </Link>
            </li>
          </ul>
          <div className='hidden lg:flex items-center gap-8 '>
            <Link href='/' size='md' theme='default'>
              Contact sales
            </Link>
            <Button theme={'white-filled'} size={'md'}>
              Book a demo
            </Button>
          </div>

          <Burger
            className='block lg:hidden'
            isToggled={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          />
        </nav>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
    </>
  );
};

export default Header;
