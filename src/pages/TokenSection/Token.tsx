/* eslint-disable jsx-quotes */
/* eslint-disable max-lines-per-function */
// @ts-nocheck
import React, { useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Button from '../../components/Button/Button';
import Donut from './chart/Donut';
import './styles.css';
import {
  Container,
  Heading,
  HeadingTitle,
  Title,
  TitleP,
  Content,
  BtnContainer,
  ChartContainer,
  MenuList,
  MenuListItem,
  Tokens,
  Percent,
  Allocation,
  Price,
  Div,
} from './styled';
import { useNavigate } from 'react-router-dom';
import DATA from './ChartData';

const Token = (props) => {
  const [data, setData] = useState(DATA);

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleMouseEnter = (idx: number) => {
    const newData = DATA.map((e) => {
      return { ...e, opacity: 0.5};
    });
    newData[idx].opacity = 1;
    setData(newData);
  };

  const handleMouseLeave = () => {
    setData(DATA);
  };

  return (
    <Container>
      <Heading>{props.head}</Heading>
      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
        <HeadingTitle>
          Token holders will be able to stake QE tokens and receive stable
          profit from the Qenergy Ecosystem activities.
        </HeadingTitle>
      </AnimationOnScroll>

      <Div>
        <Content>
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
            <Title>Tokenomics</Title>
            <TitleP>Total Supply 20,000,000</TitleP>
          </AnimationOnScroll>
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
            <MenuList>
              <MenuListItem>
                <Allocation>Allocations</Allocation>
                <Tokens> Tokens</Tokens>
                <Percent>%</Percent>
                <Price>Price, $</Price>
              </MenuListItem>
              {DATA.map(({ allocation, token, percent, price, id }) => (
                <>
                  <MenuListItem
                    key={id}
                    onMouseEnter={() => handleMouseEnter(id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Allocation>{allocation}</Allocation>
                    <Tokens> {token}</Tokens>
                    <Percent>{percent}%</Percent>
                    <Price>{price}</Price>
                  </MenuListItem>
                </>
              ))}
            </MenuList>
          </AnimationOnScroll>

          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
            {/* {props.isButtonOn && ( */}
            <BtnContainer style={props.isButtonOn ? {} : { display: 'none' }}>
              <Button
                text={'Join the Public Sale'}
                widthBtn={'250px'}
                fontSize={'18px'}
                clickHandler={() => navigate('/sales')}
                hoverColor={'#fff'}
                hoverColorTitle={'#000'}
              />
            </BtnContainer>
            {/* )} */}
          </AnimationOnScroll>
        </Content>

        <ChartContainer>
          <Donut
            items={data}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            size={window.innerWidth > 800 ? 428 : 334}
            hole={window.innerWidth > 800 ? 214 : 167}
          />
        </ChartContainer>
      </Div>
    </Container>
  );
};

export default Token;
