import React from 'react';
import { 
  Hero, 
  Services, 
  Process, 
  Results, 
  Team,
  Contact
} from '../components';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Results />
      <Team />
      <Contact />
    </>
  );
};
