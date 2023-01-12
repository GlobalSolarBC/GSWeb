import styled from 'styled-components';
// import cursor from '../../assets/icons/pointinghand.svg';

interface Props {
  isActive: boolean;
}

export const Container = styled.div`
  font-family: 'AeonikProTRIALRegular';
  background-color: #fff;
  height: 900px;
  padding: 70px 50px;
  max-width: 1440px;
  margin: 0 auto;
  @media screen and (max-width: 801px) {
    height: auto;
    padding: 40px 18px;
    // margin-bottom: 150px;
  }
`;

export const Heading = styled.h3`
  font-family: 'AeonikProTRIALRegular';
  font-size: 72px;
  font-weight: 400;
  margin: 0;
  @media screen and (max-width: 801px) {
    font-size: 32px;
    margin: 0;
  }
`;

export const HeadingTitle = styled.p`
  font-size: 18px;
  @media screen and (max-width: 801px) {
    font-size: 16px;
    margin: 20px 0 40px 0;
  }
`;

export const TitleP = styled.p`
  font-size: 18px;
  margin: 0 0 55px 0;
  @media screen and (max-width: 801px) {
    font-size: 16px;
    /* margin: 0; */
  }
`;
export const Title = styled.p`
  font-size: 32px;
  margin: 40px 0 10px 0;
  @media screen and (max-width: 801px) {
    font-size: 20px;
    margin: 0 0 10px 0;
  }
`;

export const Content = styled.div`
  max-width: 710px;
  // display: flex;
  margin: 0 141px 0 0;
  @media screen and (max-width: 801px) {
    // font-size: 20px;
    // padding: 0 18px ;
    margin: 0 0 48px 0;
  }
`;

export const BtnContainer = styled.p`
  margin: 40px 0px 0px 0px;
  @media screen and (max-width: 801px) {
    display: none;
  }
`;

export const TokenomicHeader = styled.div`
  margin-bottom: -70px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  border-bottom: 1px solid rgb(0, 0, 0);
  width: 690px;
  > span {
    width: 110px;
    padding: 0 0 5px 0;
  }
  @media screen and (max-width: 801px) {
    display: none;
  }
`;
export const TokenomicHeaderMob = styled.div`
  margin-bottom: -70px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  border-bottom: 1px solid rgb(0, 0, 0);
  width: 332px;
  /* > span {
    background-color: aqua;
    width: 25%;
    padding: 0 0px 5px 0px;
  } */
  @media screen and (min-width: 801px) {
    display: none;
  }
`;
export const ChartContainer = styled.div`
  width: 429px;
  // height: 429px;

  @media screen and (max-width: 801px) {
    width: 343px;
    // display: block;
    margin: 0px;
    // padding-bottom: 80px;
  }
`;

export const ChartMobile = styled.div`
  display: none;
  @media screen and (max-width: 801px) {
    display: block;
    margin-top: 66px;
  }
`;
export const MobileContainer = styled.div`
  width: 340px;
  /* margin: 0 auto; */
`;
const BaseUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const MenuList = styled(BaseUl)`
  width: 710px;

  // height: 342px;
  @media screen and (max-width: 800px) {
    margin: 0;
    width: 100%;
    font-size: 16px;
  }
`;

export const MenuListItem = styled.li<Props>`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000;
  padding: 10px 0;

  :first-child {
    padding: 0 0 5px 0;
    > span {
      // font-size: 14px;
    }
    &:hover {
      background: transparent;
    }
  }
  &:hover {
    background: linear-gradient(90deg, #90cd38 0%, rgba(144, 205, 56, 0) 100%);
  }
  @media screen and (max-width: 800px) {
    justify-content: start;

    :first-child {
      padding: 0 0 5px 0;
      white-space: nowrap;
      > span {
        font-size: 16px;
      }
    }
    > span {
      margin-right: 16px;
    }
  }
`;

export const Allocation = styled.span`
  width: 400px;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 800px) {
    width: 95px;
    white-space: pre-wrap;
  }
`;
export const Tokens = styled.span`
  width: 350px;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 800px) {
    width: 94px;
    // text-align: center;
    vertical-align: middle;
  }
`;
export const Percent = styled.span`
  width: 170px;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 800px) {
    width: 50px;
    text-align: center;
  }
`;
export const Price = styled.span`
  width: 170px;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 800px) {
    width: 32px;
    text-align: right;
  }
`;

export const Div = styled.div`
  display: flex;
  // justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const ChartLabel = styled.text`
  font-size: 12px;
  color: #000000;
`;
