/* eslint-disable jsx-quotes */
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {
  Container,
  MainContainer,
  Heading,
  ImageContainer,
  StyledDiv,
  StyledSpan,
  StyledP,
  InfoDiv,
  Title,
  InfoP,
} from './styles';

const Investing = () => {
  return (
    <Container id="about">
      <StyledDiv>
        <MainContainer>
          <Heading>We are the energy investing platform</Heading>
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
            <Title>
              We are benefeting the world through the production of green
              energy. Qenergy generating stable income from the real world,
              independent of the state of the crypto market.
            </Title>
          </AnimationOnScroll>
        </MainContainer>
        <InfoDiv>
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
            <StyledSpan>
              <InfoP>Private sale</InfoP>
              <StyledP>&#8594; 15 October - 15 November</StyledP>
            </StyledSpan>
          </AnimationOnScroll>
          <AnimationOnScroll
            delay={100}
            animateOnce={true}
            animateIn="animate__fadeInUp"
          >
            <StyledSpan>
              <InfoP>Public sale</InfoP>
              <StyledP>&#8594; 7 December - 14 December</StyledP>
            </StyledSpan>
          </AnimationOnScroll>
        </InfoDiv>
      </StyledDiv>

      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
        <ImageContainer />
      </AnimationOnScroll>
    </Container>
  );
};

export default Investing;
