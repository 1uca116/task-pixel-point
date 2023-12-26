import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

const styles = {
  base: 'flex items-center justify-center leading-none text-center whitespace-nowrap rounded-large select-none',
  size: {
    md: 'text-common px-[18px] py-[10px] font-semibold',
    lg: 'text-base px-4 sm:px-6 lg:px-[50px] py-4 font-semibold',
  },
  theme: {
    'white-filled':
      'text-black bg-white disabled:opacity-40 hover:opacity-80 transition-opacity duration-500',
    'primary-1-filled': 'text-black bg-primary-1',
  },
};

const Button = ({
  className = null,
  to = null,
  size,
  theme,
  children,
  ...otherProps
}) => {
  const Tag = to ? Link : 'button';

  return (
    <Tag
      className={clsx(
        styles.base,
        styles.size[size],
        styles.theme[theme],
        className
      )}
      to={to}
      {...otherProps}
    >
      {children}
    </Tag>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)).isRequired,
  theme: PropTypes.oneOf(Object.keys(styles.theme)).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
