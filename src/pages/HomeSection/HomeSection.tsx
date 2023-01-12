import React from 'react';

import Title from '../../components/TextComponents/Title';
import { Container } from './styles';
import Header from '../Header/Header';

const HomeSection = () => {
  return (
    <Container>
      <Header />
      <Title />
    </Container>
  );
};

export default HomeSection;
