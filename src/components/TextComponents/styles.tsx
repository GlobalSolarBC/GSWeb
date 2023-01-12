import styled from 'styled-components';

interface Props {
  fontSizeTitle?: string;
  fontSizeHeading?: string;
  widthContainer?: string;
}

export const Container = styled.div`
  height: 410px;
  margin-right: auto;
  margin-left: 50px;
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    height: 320px;
    align-items: center;
    margin: 0 auto;
  }
`;

export const TitleHeading = styled.h2<Props>`
  font-size: 120px;
  line-height: 111.6px;
  font-family: 'AeonikProTRIALLight';
  margin: 0;
  max-width: 1265px;

  @media screen and (max-width: 800px) {
    font-size: 46px;
    line-height: 105%;
  }
`;

export const SubTitleHeading = styled.span<Props>`
  margin: 35px 0 54px 0;
  font-size: 18px;
  font-family: 'AeonikProTRIALRegular';
  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;

export const Div = styled.div`
  height: 815px;
  max-width: 1440px;
  text-align: start;
  display: flex;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 800px) {
    height: 560px;
  }
`;
