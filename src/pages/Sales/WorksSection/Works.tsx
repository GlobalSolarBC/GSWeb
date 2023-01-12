import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {
  Container,
  Content,
  StyledHeading,
  StyledTitle,
  StyledUl,
  StyledLi,
  StyledSpan,
  StyledHead,
  StyledP,
  StyledSun,
} from './styles';

const Works = () => {
  return (
    <Container id="how_it_works">
      <Content>
        <StyledHeading>How it works</StyledHeading>
        <StyledUl>
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
            <StyledLi>
              <StyledSpan>01</StyledSpan>
              <StyledHead>
                Connect your wallet to our investing platform
              </StyledHead>
            </StyledLi>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateOnce={true}
            delay={100}
            animateIn="animate__fadeInUp"
          >
            <StyledLi>
              <StyledSpan>02</StyledSpan>
              <StyledHead>
                Make sure you have a sufficient amount of BNB to cover the gas
                fee.
              </StyledHead>
            </StyledLi>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateOnce={true}
            delay={200}
            animateIn="animate__fadeInUp"
          >
            <StyledLi>
              <StyledSpan>03</StyledSpan>
              <StyledHead>
                Choose currency and number of token you want to buy
              </StyledHead>
            </StyledLi>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateOnce={true}
            delay={300}
            animateIn="animate__fadeInUp"
          >
            <StyledLi>
              <StyledSpan>04</StyledSpan>
              <StyledHead>
                Confirm your transaction in your wallet. That's it!
              </StyledHead>
            </StyledLi>
          </AnimationOnScroll>
        </StyledUl>
      </Content>
    </Container>
  );
};

export default Works;
