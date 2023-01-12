import React from 'react';
import styled from 'styled-components';

interface Props {
  props: Array<{
    link: string;
    img: any;
  }>;
  weightContainer?: string;
  mb?: string;
}

const TeamsSponsor = ({ props, weightContainer, mb }: Props) => {
  return (
    <Container weightContainer={weightContainer} mb={mb}>
      <MenuList>
        {props.map((el, index) => (
          <MenuListLi key={index}>
            <a target="_blank" href={el.link}>
              {el.img}
            </a>
          </MenuListLi>
        ))}
      </MenuList>
    </Container>
  );
};

export default TeamsSponsor;

interface props {
  weightContainer?: string;
  mb?: string;
}

export const Container = styled.div<props>`
  font-family: 'sans-serif';
  overflow: hidden;
  font-weight: 700;
  width: ${(props) =>
    props.weightContainer ? props.weightContainer : '1340px'};
  /* max-width: 1340px; */
  margin-bottom: ${(props) => (props.mb ? props.mb : '120px')};
  /* margin-bottom: 120px; */
`;

export const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

export const MenuListLi = styled.li`
  /* font-size: 46px; */
  opacity: 0.5;
  /* letter-spacing: -2px; */
  min-width: 160px;
  margin-right: 64px;
  /* :nth-child(2n) {
    font-family: 'AeonikProTRIALRegular';
    font-weight: normal;
    font-size: 43px;
    line-height: 54px;
  } */
  @media screen and (max-width: 801px) {
    margin-right: 0px;
    svg {
      width: 104px;
      margin-right: 22px;
    }
  }
`;
