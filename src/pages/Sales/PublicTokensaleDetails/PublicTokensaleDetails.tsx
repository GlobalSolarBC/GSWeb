import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {
  Container,
  Content,
  StyledHeading,
  StyledUl,
  StyledLi,
  StyledSpan,
  StyledHead,
  Coll,
  Row,
} from './styles';

const PublicTokensale = () => {
  return (
    <Container id="pub_tokensale_details">
      <Content>
        <StyledHeading>Public tokensale details</StyledHeading>
        <Row>
          <StyledUl>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
              <StyledLi>
                <StyledSpan>Blockchain:</StyledSpan>
                <StyledHead>BSC</StyledHead>
              </StyledLi>
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
              <StyledLi>
                <StyledSpan>Token supply:</StyledSpan>
                <StyledHead>3,200,000</StyledHead>
              </StyledLi>
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
              <StyledLi>
                <StyledSpan>Cliff:</StyledSpan>
                <StyledHead>yes</StyledHead>
              </StyledLi>
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
              <StyledLi>
                <StyledSpan>Additional:</StyledSpan>
                <StyledHead>FCFS (First Come, First Served)</StyledHead>
              </StyledLi>
            </AnimationOnScroll>
          </StyledUl>

          <StyledUl>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
              <StyledLi>
                <StyledSpan>Accepted Currency:</StyledSpan>
                <StyledHead>USDT, USDC, BUSD</StyledHead>
              </StyledLi>
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
              <StyledLi>
                <StyledSpan>Total raise:</StyledSpan>
                <StyledHead>3,200,000$</StyledHead>
              </StyledLi>
            </AnimationOnScroll>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
              <StyledLi>
                <StyledSpan>Vesting:</StyledSpan>
                <StyledHead>yes, each block</StyledHead>
              </StyledLi>
            </AnimationOnScroll>
          </StyledUl>
        </Row>
      </Content>
    </Container>
  );
};

export default PublicTokensale;
