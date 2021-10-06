import React, { useEffect } from 'react';
import { Hero } from '~/components/Hero/Hero';
import DefaultLayout from '~/components/Layout/Default';

const Home = () => {

  return (
    <>
      <DefaultLayout>
        <Hero />
      </DefaultLayout>
    </>
  );
};

export default Home;
