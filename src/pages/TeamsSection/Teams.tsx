/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-quotes */
import React from 'react';
import Slider from '../../components/SliserTeams/Slider';
import styled from 'styled-components';
import { Container, Content, Heading } from './styled';
import TeamsSponsor from './TeamsSponsor';
import { ReactComponent as LOGO_BLAZE } from '../../assets/icons/logo_blaize.svg';
import { ReactComponent as LOGO_MAJINX } from '../../assets/icons/logo_majinx.svg';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Teams = () => {
  const TEAM_SPONSOR = [
    'Forbes',
    'Bloomberg',
    'Forbes',
    'Bloomberg',
    'Forbes',
    'Bloomberg',
  ];

  const PARTNERS = [
    {
      link: 'https://blaize.tech/',
      img: <LOGO_BLAZE />,
    },
    {
      link: 'https://majinx.io/',
      img: <LOGO_MAJINX />,
    },
  ];
  return (
    <Container>
      <Content>
        {/* <Heading>Media about us</Heading>
        <TeamsSponsor props={TEAM_SPONSOR} /> */}
        <Slider />
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
          <Div>
            <Heading>Partners</Heading>
            <TeamsSponsor
              props={PARTNERS}
              weightContainer="min-content"
              mb="1px"
            />
          </Div>
        </AnimationOnScroll>
      </Content>
    </Container>
  );
};

export default Teams;

export const Div = styled.div`
  margin-top: 100px;
  @media screen and (max-width: 801px) {
    margin-top: 50px;
  }
`;
