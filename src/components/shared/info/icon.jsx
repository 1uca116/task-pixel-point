import React from 'react';
import PropTypes from 'prop-types';
import Cross from 'images/svg/cross.svg';
import Loader from 'images/svg/loader.svg';
import Check from 'images/svg/check.svg';
import clsx from 'clsx';

const styles = {
  base: 'flex items-center justify-center w-12 h-12 leading-none text-center text-black whitespace-nowrap rounded-large select-none',
  theme: {
    'primary-1-filled': 'bg-primary-1',
    'primary-2-filled': 'bg-primary-2',
    'secondary-1-filled': 'bg-secondary-1',
  },
  animation: 'animate-spin ',
  content: {
    check: Check,
    cross: Cross,
    loading: Loader,
  },
};

const Icon = ({ theme, content, animation }) => {
  return (
    <div className={clsx(styles.base, styles.theme[theme])}>
      <img
        src={styles.content[content]}
        className={clsx(animation ? styles.animation : '')}
        alt={''}
      />
    </div>
  );
};
Icon.propTypes = {
  className: PropTypes.string,
  animation: PropTypes.bool,
  theme: PropTypes.oneOf(Object.keys(styles.theme)).isRequired,
  content: PropTypes.oneOf(Object.keys(styles.content)).isRequired,
};
export default Icon;
