import React, { useState } from 'react';
import styled from 'styled-components';
import HomeSection from './pages/Sales/HomeSection/HomeSection';
import Faq from './pages/FaqSection/Faq';
import Footer from './pages/Footer/Footer';
import PublicSales from './pages/Sales/PublicSales/PublicSales';
import HowItWorks from './pages/Sales/WorksSection/Works';
import Token from './pages/TokenSection/Token';
import PublicTokensale from './pages/Sales/PublicTokensaleDetails/PublicTokensaleDetails';
import Funds from './pages/Sales/Funds/Funds';
import Vesting from './pages/Sales/Vesting/Vesting';
import FloatButton from './components/FloatingButton/FloatButton';
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
        <HowItWorks />
        <PublicTokensale />
        <Token head="Tokenomics" isButtonOn={false} />
        <Funds />
        <Vesting />
        <PublicSales />
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
