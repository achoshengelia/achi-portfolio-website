import React from 'react';
import { Hero, About, Projects } from 'components';

const HomePage = () => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
};

export default HomePage;
