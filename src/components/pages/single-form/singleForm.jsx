'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from 'components/shared/input';
import Button from 'components/shared/button';
import clsx from 'clsx';
import Icon from 'components/shared/info';

const schema = yup.object().shape({
  email: yup.string().required(),
});

const SingleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formFailed, setFormFailed] = useState(false);

  const onSubmitHandler = async (data) => {
    setFormSuccess(false);
    setFormFailed(false);

    try {
      yup.string().email().required().validateSync(data.email);
      await fakeSuccessRequest();
      setFormSuccess(true);
    } catch {
      reset();
      setFormFailed(true);
    } finally {
      setLoading(false);
    }
  };

  async function fakeSuccessRequest() {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
  }

  function resetSumbitButton() {
    setLoading(false);
    setFormSuccess(false);
    setFormFailed(false);
  }

  return (
    <div className='flex flex-col min-h-[96px]'>
      <div
        className={
          'overlay_border rounded-large p-px max-h-[60px] lg:max-w-[504px] overflow-hidden'
        }
      >
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          noValidate
          className={
            'flex rounded-large items-center justify-between overlay border border-transparent max-h-[58px] ' +
            'lg:max-w-[502px] overflow-hidden'
          }
        >
          <Input
            {...register('email')}
            placeholder={
              formFailed
                ? 'Oops! Something went wrong'
                : 'Your business email...'
            }
            type='email'
            className={clsx(
              'flex flex-1 bg-transparent ps-5 lg:ps-8 py-4 font-robotoLight text-base overflow-hidden rounded-l-large',
              formFailed ? 'placeholder:text-white' : 'linear-text'
            )}
            onChange={resetSumbitButton}
          />
          <div className='p-1.5 overflow-hidden rounded-large'>
            {loading ? (
              <Icon theme={'primary-1-filled'} content={'loading'} animation />
            ) : (
              <Button
                className={clsx(
                  !loading && !formSuccess && !formFailed ? 'block' : 'hidden'
                )}
                theme={'primary-1-filled'}
                size={'lg'}
                type='submit'
              >
                Free Trial
              </Button>
            )}
            {formFailed && (
              <Icon theme={'primary-2-filled'} content={'cross'} />
            )}
            {formSuccess && (
              <Icon theme={'secondary-1-filled'} content={'check'} />
            )}
          </div>
        </form>
      </div>
      <p className='text-secondary-4 ps-5 lg:ps-8 pt-3 text-base font-normal'>
        {errors.email?.message}
      </p>
    </div>
  );
};

export default SingleForm;
