/* eslint-disable jsx-quotes */
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {
  Container,
  Content,
  StyledHeading,
  Row,
  Item,
  ItemText,
  ItemText2,
  ItemText3,
  ItemGrad1,
  ItemGrad2,
} from './styles';

const Funds = () => {
  return (
    <Container id="funds">
      <Content>
        <StyledHeading>Fundraising Stages</StyledHeading>
        <AnimationOnScroll
          animateOnce={true}
          delay={100}
          animateIn="animate__fadeInUp"
        >
          <Row>
            <Item>
              <ItemText>1 step</ItemText>
              <ItemGrad1>
                <ItemText3>15 October - 15 November</ItemText3>
                <ItemText>Private Sale</ItemText>
                <ItemText2>12%</ItemText2>
              </ItemGrad1>
              <ItemText>$ 2,400,000</ItemText>
            </Item>

            <Item>
              <ItemText>2 step</ItemText>
              <ItemGrad2>
                <ItemText3>7 December - 14 December</ItemText3>
                <ItemText>Public Sale</ItemText>
                <ItemText2>16%</ItemText2>
              </ItemGrad2>
              <ItemText>$ 3,200,000</ItemText>
            </Item>
          </Row>
        </AnimationOnScroll>
      </Content>
    </Container>
  );
};

export default Funds;
