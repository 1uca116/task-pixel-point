import PropTypes from 'prop-types';
import clsx from 'clsx';
import { forwardRef } from 'react';

const Input = forwardRef(
  ({ className, placeholder, type, ...otherProps }, ref) => {
    return (
      <input
        ref={ref}
        placeholder={placeholder}
        className={clsx('outline-none', className)}
        type={type}
        {...otherProps}
      />
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  className: null,
};

export default Input;
