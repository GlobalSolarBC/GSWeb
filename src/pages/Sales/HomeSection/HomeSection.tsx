import React, { useState, useEffect } from 'react';

import {
  Container,
  TitleHeading,
  SubTitleHeading,
  Div,
  TitleContainer,
  Row,
  LogoContainer,
  CircleOut,
  CircleIn,
  Light2,
  Light1,
} from './styles';
import Header from '../Header/Header';
import Modal from '../../../components/Modal/Modal';
import Button from '../../../components/Button/Button';
import TitleSales from '../../../components/TextComponents/TitleSales';
import {
  TitleHeadingAnimation,
  SubTitleHeadingAnimation,
  ButtonHeadingAnimation,
} from '../../../components/animation/home.styles';

const HomeSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Header />
      <Div>
        <TitleContainer>
          <TitleHeadingAnimation>
            <TitleHeading>Join the public sale</TitleHeading>
          </TitleHeadingAnimation>
          <SubTitleHeadingAnimation>
            <SubTitleHeading>
              Invest in solar plants construction without 3rd parties and earn
              from 15% QPR
            </SubTitleHeading>
          </SubTitleHeadingAnimation>
          <ButtonHeadingAnimation>
            <Button
              text={'Join the waitlist'}
              fontSize={'20px'}
              fontFamily={'AeonikProTRIALRegular'}
              clickHandler={() => setIsOpen(true)}
              hoverColor={'#FFCB11'}
              hoverColorTitle={'#000'}
            />
          </ButtonHeadingAnimation>
        </TitleContainer>
        <Modal isOpen={isOpen} handleClose={handleClose} isWaitlist={true} />
        <LogoContainer>
          <CircleOut>
            <CircleIn>
              <Light1 />
              <Light2 />
            </CircleIn>
          </CircleOut>
        </LogoContainer>
      </Div>
    </Container>
  );
};

export default HomeSection;
