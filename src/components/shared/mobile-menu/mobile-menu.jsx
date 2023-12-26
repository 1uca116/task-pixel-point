'use client';

import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';
import PropTypes from 'prop-types';

import Link from 'components/shared/link';
import Button from '../button';

const ANIMATION_DURATION = 0.2;

const menuVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
  opened: {
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
};

const MobileMenu = ({ isOpen, onClick }) => (
  <LazyMotion features={domAnimation}>
    <AnimatePresence>
      {isOpen && (
        <m.nav
          className='absolute inset-x-0 bottom-0 top-0 z-40 bg-black bg-opacity-95 px-safe'
          initial='closed'
          animate='opened'
          exit='closed'
          variants={menuVariants}
          onClick={onClick}
        >
          <div className='flex flex-col justify-between h-full w-full px-4 py-16 text-left'>
            <ul className='flex max-h-full w-full flex-col divide-y divide-[#000] overflow-y-auto'>
              <li>
                <Link href='/' className='block py-5' theme='default'>
                  Integrations
                </Link>
              </li>
              <li>
                <Link href='/' className='block py-5' theme='default'>
                  Code platform
                </Link>
              </li>
              <li>
                <Link href='/' className='block py-5' theme='default'>
                  Company
                </Link>
              </li>
              <li>
                <Link href='/' className='block py-5' theme='default'>
                  Resources
                </Link>
              </li>
              <li>
                <Link href='/' className='block py-5' theme='default' size='md'>
                  Contact sales
                </Link>
              </li>
            </ul>
            <Button theme={'white-filled'} size={'md'} className='w-fit'>
              Book a demo
            </Button>
          </div>
        </m.nav>
      )}
    </AnimatePresence>
  </LazyMotion>
);

export default MobileMenu;

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
