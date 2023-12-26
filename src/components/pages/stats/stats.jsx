import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';

const Stats = ({
  keyValue,
  title,
  subtitle,
  className: additionalClassName = null,
  ...otherProps
}) => {
  return (
    <div className={clsx('flex flex-col', additionalClassName)} {...otherProps}>
      <div className='relative'>
        <div className='ellipse_gradient' />
        <h1 className='text-8xl font-poppins linear-text2 font-poppinsExtraLight mb-[14px] z-20 top-0 left-0'>
          {keyValue}
        </h1>
      </div>

      <h2 className='text-2xl text-grey-98'>{title}</h2>
      <hr className='text-white/10 my-8 ' />
      <p className='text-lg font-robotoLight text-grey-94'>{subtitle}</p>
    </div>
  );
};

Stats.propTypes = {
  keyValue: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
};

export default Stats;
