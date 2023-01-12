import styled from 'styled-components';

export const Container = styled.div`
  background: #a4cd69;
`;

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  overflow: hidden;
  padding: 70px 50px;
  @media screen and (max-width: 801px) {
    padding: 40px 16px;
  }
`;

export const Heading = styled.h3`
  font-family: AeonikProTRIALRegular;
  font-size: 54px;
  font-weight: 400;
  margin: 0px 0px 40px 0px;
  @media screen and (max-width: 801px) {
    font-size: 32px;
    margin: 0px 0px 25px 0px;
  }
`;
