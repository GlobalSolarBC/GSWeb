import styled from 'styled-components';
import RInvesting from '../../assets/image/investingImg.svg';
import InvestMobile from '../../assets/image/investMobile.svg';

export const Container = styled.div`
  display: flex;
  background-color: #fff;
  height: 900px;
  margin: 0 auto;
  max-width: 1440px;

  @media screen and (max-width: 801px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: auto;
    /* height: 873px; */
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 720px;
`;

export const Heading = styled.p`
  font-family: 'AeonikProTRIALRegular';
  font-size: 72px;
  margin: 0;
  margin-bottom: 20px;
  line-height: 105%;
  @media screen and (max-width: 801px) {
    font-size: 32px;
    line-height: 100%;
  }
`;
export const Title = styled.span`
  font-family: 'AeonikProTRIALRegular';
  font-size: 18px;
  line-height: 21px;
  @media screen and (max-width: 801px) {
    font-size: 16px;
    line-height: 110%;
  }
`;

export const ImageContainer = styled.div`
  background-image: url(${RInvesting});
  width: 710px;
  height: 100%;
  @media screen and (max-width: 801px) {
    background-image: url(${InvestMobile});
    width: 375px;
    height: 475px;
  }
`;

export const StyledDiv = styled.div`
  padding: 70px 0 70px 50px;
  box-sizing: border-box;
  width: 730px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 801px) {
    padding: 40px 16px;
    /* height: 320px; */
    width: 100%;
  }
`;

export const StyledSpan = styled.span`
  font-family: 'AeonikProTRIALRegular';
  line-height: 40px;
  font-size: 32px;
`;

export const InfoP = styled.p`
  font-size: 32px;
  margin: 0;
  @media screen and (max-width: 801px) {
    line-height: 23px;
    font-size: 20px;
    margin: 10px 0;
  }
`;

export const StyledP = styled.p`
  font-family: 'AeonikProTRIALRegular';
  font-size: 18px;
  @media screen and (max-width: 801px) {
    font-size: 16px;
    line-height: 23px;
    margin: 10px 0;
  }
`;

export const InfoDiv = styled.div`
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 801px) {
    margin: 30px 0 0 0;
    flex-direction: column;
    font-size: 32px;
    line-height: 100%;
  }
`;
