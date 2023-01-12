/* eslint-disable jsx-quotes */
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
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
          <StyledTitle>
            Qenergy offers a transparent and easy-to-use earning model.
          </StyledTitle>
        </AnimationOnScroll>
        <StyledUl>
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
            <StyledLi>
              <StyledSpan>01</StyledSpan>
              <StyledHead>Stake QE token</StyledHead>
              <StyledP>
                By staking your QE token, you will receive a 1:1 ENERGY utility
                token every day.
              </StyledP>
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
                Contribute ENERGY <br />
                to the Qenergy Profit Pool
              </StyledHead>
              <StyledP>
                The more ENERGY you contribute, the bigger part of the profit
                pool you will get.
              </StyledP>
            </StyledLi>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateOnce={true}
            delay={200}
            animateIn="animate__fadeInUp"
          >
            <StyledLi>
              <StyledSpan>03</StyledSpan>
              <StyledHead>Enjoy quarterly yields!</StyledHead>
              <StyledP>Estimated Q1 2023 profit pool: </StyledP>
              <StyledSun>$750,000</StyledSun>
            </StyledLi>
          </AnimationOnScroll>
        </StyledUl>
      </Content>
    </Container>
  );
};

export default Works;
//style={{marginBottom: 23}}
