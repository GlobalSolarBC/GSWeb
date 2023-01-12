import React, { ReactHTMLElement, useState } from 'react';
import styled from 'styled-components';
import FloatButton from './components/FloatingButton/FloatButton';
import Faq from './pages/FaqSection/Faq';
import Footer from './pages/Footer/Footer';
import GreenSection from './pages/GreenSection/GreenSection';
import HomeSection from './pages/HomeSection/HomeSection';
import Investing from './pages/InvestingSection/InvestingSection';
import PrivetSale from './pages/PrivetSaleSection/PrivetSale';
import Qenergy from './pages/QenergySection/Qenergy';
import Teams from './pages/TeamsSection/Teams';
import Token from './pages/TokenSection/Token';
import Works from './pages/WorksSection/Works';
// 
import IntersectionVisible from 'react-intersection-visible';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFooter, setIsFooter] = useState(false);

  return (
    <>
      <FloatButton isVisible={isVisible} isFooter={isFooter} />
      <Container>
        <IntersectionVisible
          // Функция, которая вызывается, когда элемент становится невидимым
          onHide={() => setIsVisible(true)}
          // Функция, которая вызывается, когда элемент становится видимым
          onShow={() => setIsVisible(false)}
        >
          <HomeSection />
        </IntersectionVisible>
        <Investing />
        <GreenSection />
        <Works />
        <Token head="QE Token" isButtonOn={true} />
        <Qenergy />
        <Teams />
        <PrivetSale />
        <Faq />
        <IntersectionVisible
          onHide={() => setIsFooter(false)}
          onShow={() => setIsFooter(true)}
        >
          <Footer />
        </IntersectionVisible>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  max-width: 100vw;
  margin: 0 auto;
`;
