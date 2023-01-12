import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

interface IProps {
  color?: string;
  colorHeader?: string;
  PositionTop?: string;
  isBorder?: boolean;
}

export const LogoIcon = styled(Logo)``;

export const FixedContainer = styled.div<IProps>`
  background-color: ${(props) =>
    props.colorHeader ? props.colorHeader : 'transparent'};
  position: fixed;
  width: 100%;
  left: 0;
  top: ${(props) => props.PositionTop};
  right: 0;
  z-index: 9;
  border-bottom: ${(props) => (props.isBorder ? '2px solid #000' : 'none')};
  /* border-bottom: 2px solid #000; */
  @media screen and (max-width: 800px) {
    position: static;
  }
`;

export const Container = styled.div`
  max-width: 1340px;
  height: 85px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 40px;
  }
`;

export const LinksList = styled.ul`
  font-family: 'AeonikProTRIALRegular';
  display: flex;
  align-items: center;
  list-style: none;
  width: 850px;
  justify-content: space-between;
  padding: 0;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const LinksItem = styled.li`
  margin: 0;
  border-radius: 20px;

  > a {
    color: #000000;
    font-size: 18px;
  }
  padding: 15px;
  :hover {
    border-radius: 29px;
    box-shadow: 0px 0px 1px 1px black;
  }
`;

export const GiperLink = styled.a`
  width: 215px;
  height: 57px;
  border: 1px solid #000000;
  border-radius: 29px;
  padding: 18px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  cursor: pointer;
  :hover {
    background-color: #000;
    color: #ffffff;
  }
`;

export const IconWrapper = styled.a<IProps>`
  svg {
    width: 198px;
    height: 55px;
    > path {
      fill: ${(props) => (props.color ? props.color : '#000000')};
    }
  }
  margin: auto 0;
  @media screen and (max-width: 800px) {
    svg {
      width: 144px;
      height: 40px;
      > path {
        fill: ${(props) => (props.color ? props.color : '#000000')};
      }
    }
  }
`;
