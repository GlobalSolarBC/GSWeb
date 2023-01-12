import styled from 'styled-components';
import arrowL from '../../assets/icons/social/arrowL.svg';
import arrowR from '../../assets/icons/social/arrowR.svg';

export const Embla = styled.div`
  position: relative;
  height: 620px;

  /* background-color: #fff; */
  /* width: 1340px; */
  font-family: AeonikProTRIALRegular;

  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 801px) {
    height: auto;
  }
`;

export const EmblaViewport = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const EmblaContainer = styled.div`
  /* width: 1340px; */
  width: 440px;
  display: flex;
  user-select: none;
  @media screen and (max-width: 801px) {
    width: 343px;
  }
`;

export const EmblaSlide = styled.div`
  position: relative;
  flex: 0 0 100%;
  max-width: 100%;
  margin-left: 10px;
  /* width: 440px; */
  /* height: 550px; */

  > img {
    width: 440px;
    height: 440px;
  }
  @media screen and (max-width: 801px) {
    height: 450px;
    > img {
      width: 350px;
      height: 330px;
    }
  }
`;

export const EmblaTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 420px;
  /* height: 50px; */
  @media screen and (max-width: 801px) {
    padding: 0 10px 0 0;
  }
`;
export const EmblaTitleName = styled.p`
  font-size: 32px;
  margin: 15px 0px 10px;
  max-width: 390px;
`;
export const EmblaTitleSpan = styled.span``;
export const EmblaTitlePlace = styled.span`
  font-size: 18px;
`;

const BaseBtn = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  touch-action: manipulation;
  background-repeat: no-repeat;
  padding: 10px;
  align-items: center;
  @media screen and (max-width: 801px) {
    display: none;
  }
`;

export const EmblaBtnPrev = styled(BaseBtn)`
  background-image: url(${arrowL});
  /* @media screen and (max-width: 801px) {
    display: none;
  } */
`;

export const EmblaBtnNext = styled(BaseBtn)`
  background-image: url(${arrowR});
  /* @media screen and (max-width: 801px) {
    display: none;
  } */
`;

export const IconContainer = styled.span`
  margin: 15px 0 0 10px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  svg {
    fill: #666;
    margin: 0 0 0 10px;
    width: 24px;
    height: 24px;
  }
  @media screen and (max-width: 800px) {
    width: 24px;
    height: 24px;
    margin: 15px 0 0 0;
    cursor: pointer;
    svg {
      fill: #666;
      margin: 0;
      width: 24px;
      height: 24px;
    }
  }
`;

export const SlideCounter = styled.span`
  font-size: 32px;
  padding: 0 10px;
  @media screen and (max-width: 801px) {
    /* display: none; */
  }
`;

export const SlideBtn = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 801px) {
    display: none;
  }
`;

export const SlideHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;

  > span {
    font-size: 54px;
  }

  @media screen and (max-width: 801px) {
    > span {
      font-size: 32px;
    }
  }
`;
