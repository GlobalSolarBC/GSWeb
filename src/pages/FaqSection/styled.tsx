import styled from 'styled-components';

interface Props {
  isOpen: boolean;
}

export const Container = styled.div`
  font-family: 'AeonikProTRIALRegular';
  background-color: #ffffff;
  /* height: 560px; */
  padding: 70px 50px;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between; */
  max-width: 1440px;
  margin: 0 auto;
  @media screen and (max-width: 801px) {
    padding: 40px 16px;
    height: auto;
  }
`;

export const Heading = styled.h3`
  font-family: 'AeonikProTRIALRegular';
  font-size: 72px;
  font-weight: 400;
  margin: 0px 0px 70px 0px;
  line-height: 93%;

  @media screen and (max-width: 801px) {
    font-size: 32px;
    margin: 0px 0px 40px 0px;
  }
`;

export const HeadingTitle = styled.p<Props>`
  height: ${(props) => (props.isOpen ? '250px' : '150px')}; //auto
  font-family: 'AeonikProTRIALLight';
  display: flex;
  align-items: center;
  font-size: 18px;
  padding: 27px 0px 27px 10px;
  margin: 0;
`;

export const Title = styled.p`
  font-size: 32px;
  line-height: 21px;
  margin: 32px 0px 32px;
  @media screen and (max-width: 801px) {
    font-size: 20px;
    margin: 20px 0px;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li`
  border-bottom: 2px solid black;
  :first-child {
    border-top: 2px solid black;
  }
`;

export const IconWrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  margin-right: ${(props) => (!props.isOpen ? null : '10px')};
  svg {
    width: 42px;
    height: 42px;
  }

  @media screen and (max-width: 801px) {
    svg {
      width: 25px;
      height: 25px;
    }
  }
`;

export const Span = styled.span<Props>`
  display: flex;
  padding: 0px 0px 0px 5px;
  justify-content: space-between;
  background-color: ${(props) => (props.isOpen ? '#000' : '#fff')};
  color: ${(props) => (props.isOpen ? '#fff' : '#000')};
  fill: ${(props) => (props.isOpen ? '#000' : '#000')};
  cursor: pointer;

  p {
    padding: ${(props) => (props.isOpen ? '0 0 0 10px' : null)};
  }

  :hover {
    color: #fff;
    background-color: #000;
    ${IconWrapper} {
      fill: #f6f6f6;
      margin-right: 10px;
    }
    p {
      padding: 0 0 0 10px;
    }
  }
`;

export const SubTilteList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 20px;
`;

export const SubTilteItem = styled.p`
  margin: 32px 0px;
  font-size: 18px;

  @media screen and (max-width: 801px) {
    margin: 20px 0;
    font-size: 16px;
  }
`;
