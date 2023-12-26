import getMetadata from 'utils/get-metadata';
import Image from 'next/image';
import mockImage from '../images/document.png';
import Stats from '../components/pages/stats';
import { useMemo } from 'react';
import SingleForm from '../components/pages/single-form';

const Home = () => {
  const statsData = useMemo(
    () => [
      {
        keyValue: '3x',
        title: 'Faster Analysis Cycles',
        subtitle:
          'Stop the tedium of manual subscription data review. Quickly access essential information from all subscriptions.',
        className: 'text-center md:text-start',
      },
      {
        keyValue: '10%+',
        title: 'Savings on Costs',
        subtitle:
          'Insights into both subscription data and expenditure lead to rapid, smart cost-cutting strategies.',
        className: 'text-center md:text-start',
      },
      {
        keyValue: '30',
        title: 'Day Setup',
        subtitle:
          'Implement swiftly with straightforward, no-code processes and ready-to-use integrations.',
        className:
          'col-span-1 md:col-span-2 lg:col-span-1 text-center lg:text-start',
      },
    ],
    []
  );

  return (
    <div className='container pt-16 min-h-screen'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-14 items-center'>
        <div className='round_gradient' />
        <div className='col-span-1 pt-10 lg:pt-0 z-20'>
          <h1 className='font-poppins text-5xl md:text-6xl xl:text-7xl mb-5 xl:mb-7'>
            Unlock valuable insights from subscription data
          </h1>
          <p className='text-lg md:text-xl text-grey-94 font-robotoLight max-w-xl mb-8 xl:mb-10'>
            Analyze your subscription ecosystem for cost optimization and risk
            management
          </p>
          <SingleForm />
        </div>
        <div className='col-span-1'>
          <Image src={mockImage} alt='' priority />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-40'>
        {statsData.map((x, index) => (
          <Stats
            keyValue={x.keyValue}
            title={x.title}
            subtitle={x.subtitle}
            className={x.className}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

export async function generateMetadata() {
  return getMetadata({
    title: 'Home',
    description: 'Home - statistics data',
    pathname: '/',
  });
}
