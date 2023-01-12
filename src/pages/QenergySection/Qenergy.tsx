/* eslint-disable jsx-quotes */
import React from 'react';
import SocialLink from '../../components/SocialLink/SocialLink';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {
  Container,
  Block,
  Content,
  Heading,
  HeadingTitle,
  MenuItems,
  Item,
  ItemP,
  ItemSpan,
  ImageContainer,
  SocialContent,
  Div,
  ItemLast,
} from './styled';

const Qenergy = () => {
  return (
    <Container id="why_us">
      <Block>
        <Content>
          <Div>
            <Heading>Why Qenergy</Heading>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
              <HeadingTitle>
                Our mission is to promote solar energy, build and manage solar
                plants, and show by example how you can improve our world and
                make it greener.
              </HeadingTitle>
            </AnimationOnScroll>
            <MenuItems>
              <AnimationOnScroll
                animateOnce={true}
                animateIn="animate__fadeInUp"
              >
                <Item>
                  <ItemP>Qenergy operates</ItemP>
                  <ItemSpan>114,000 kWh every hour</ItemSpan>
                </Item>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateOnce={true}
                animateIn="animate__fadeInUp"
              >
                <Item>
                  <ItemP>Estimated plant size</ItemP>
                  <ItemSpan>600 GWh</ItemSpan>
                </Item>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateOnce={true}
                animateIn="animate__fadeInUp"
              >
                <ItemLast>
                  <ItemSpan>Located in Mexico</ItemSpan>
                  <ItemP>
                    This country has average solar radiation of 5 kWh/m /day
                    which is considerably more than in other countries.
                  </ItemP>
                </ItemLast>
              </AnimationOnScroll>
            </MenuItems>
          </Div>
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
            <SocialContent>
              <SocialLink title="Join our community" hoverColor={'#fff'} />
            </SocialContent>
          </AnimationOnScroll>
        </Content>
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
          <ImageContainer />
        </AnimationOnScroll>
      </Block>
    </Container>
  );
};

export default Qenergy;
