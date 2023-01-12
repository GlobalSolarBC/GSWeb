import styled from 'styled-components';
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';

interface IProps {
  color?: string;
}

export const LogoIcon = styled(Logo)``;

export const Container = styled.div`
  max-width: 1340px;
  height: 85px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  @media screen and (max-width: 800px) {
    align-items: flex-end;
    /* align-items: center; */
    width: 100%;
    height: 40px;
  }
`;

export const LinksList = styled.ul`
  font-family: 'AeonikProTRIALRegular';
  display: flex;
  align-items: center;
  list-style: none;
  width: 840px;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const LinksItem = styled.li`
  margin: 0;
  padding: 0;
  > a {
    color: #000000;
    font-size: 18px;
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
`;

export const IconWrapper = styled.div<IProps>`
  cursor: pointer;
  padding-left: 10px;
  svg {
    width: 144px;
    height: 40px;
    > path {
      fill: ${(props) => (props.color ? props.color : '#000000')};
    }
  }
  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;
