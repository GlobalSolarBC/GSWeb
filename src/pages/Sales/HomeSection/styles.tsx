import styled from 'styled-components';

interface Props {
  fontSizeTitle?: string;
  fontSizeHeading?: string;
  widthContainer?: string;
}

export const Container = styled.div`
  padding: 30px 0 0 0;
  background-color: #ffcb11;
  height: 815px;
  @media screen and (max-width: 800px) {
    padding: 16px;
    /* background: radial-gradient(
      39.46% 50% at 50% 100%,
      rgba(241, 241, 241, 0.94) 0%,
      rgba(255, 255, 255, 0) 100%
    ); */
    background-color: #ffcb11;
    height: 667px;
  }
`;

export const TitleContainer = styled.div`
  height: 224px;
  width: 737px;
  /* margin: 77px 0 0 50px; */
  margin: 0 auto;
  margin-top: 77px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    height: 270px;
    align-items: center;
    width: 100%;
  }
`;

export const TitleHeading = styled.h2<Props>`
  font-size: 120px;
  line-height: 111.6px;
  font-family: 'AeonikProTRIALLight';
  margin: 0;
  width: 610px;
  /* max-width: 1265px; */

  @media screen and (max-width: 800px) {
    font-size: 46px;
    line-height: 90%;
  }
`;

export const SubTitleHeading = styled.span<Props>`
  margin: 35px 0 54px 0;
  font-size: 18px;
  width: 510px;
  font-family: 'AeonikProTRIALRegular';
  @media screen and (max-width: 800px) {
    font-size: 16px;
    margin: 0;
    margin: 20px 0 45px 0;
  }
`;

export const Div = styled.div`
  height: 582px;
  max-width: 1440px;
  text-align: start;
  display: flex;
  // align-items: center;
  margin: 0 auto;
  /* padding: 0 0 0 50px; */
  @media screen and (max-width: 800px) {
    /* height: 560px; */
    padding: 0 0;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  // width: 50%;
  margin: 0 auto;
`;
export const LogoContainer = styled.div`
  width: 582px;
  height: 582px;
  // position: relative
  @media screen and (max-width: 800px) {
    width: 212px;
    height: 212px;
  }
`;
export const CircleOut = styled.div`
  // background-color: #ffcb11;

  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-image: linear-gradient(
    180deg,
    #ffe070 0%,
    rgba(255, 235, 164, 0) 100%
  );
  position: relative;
  padding: 77px;
  @media screen and (max-width: 800px) {
    padding: 27.95px;
  }
`;
export const CircleIn = styled.div`
  width: 70%;
  height: 70%;
  border-radius: 100%;
  background-image: linear-gradient(
    180deg,
    #f0e070 0%,
    rgba(255, 235, 0, 0) 100%
  );
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
`;
export const Light = styled.div`
  width: 100px;
  height: 85px;
  // width: 73px;
  // height: 31px;
  // border-width: 0 73px 31px 73px;
  border-style: solid;
  border-width: 0 100px 85px 100px;
  border-color: transparent transparent #ffcb11 transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 800px) {
    width: 73px;
    height: 31px;
    border-width: 0 43px 41px 63px;
  }
`;

export const Light1 = styled(Light)`
  transform: translate(-48%, -80%) rotate(129deg);
`;
export const Light2 = styled(Light)`
  transform: translate(-46%, -30%) rotate(-51deg);
`;
