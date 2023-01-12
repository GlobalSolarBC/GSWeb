import styled from 'styled-components';

export const Container = styled.div`
  background: #000000;
`;

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  font-family: 'AeonikProTRIALLight';
  display: flex;
  justify-content: space-between;
  height: 550px;
  padding: 70px 150px 110px 50px;
  color: #fff;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    padding: 40px 16px;
    height: auto;
  }
`;

export const FromContainer = styled.div`
  font-family: 'AeonikProTRIALRegular';
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 640px;
  height: 392px;
  font-family: 'AeonikProTRIALRegular';

  @media screen and (max-width: 800px) {
    width: 100%;
    height: auto;
    /* display: flex; */
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* width: 370px; */

  font-family: 'AeonikProTRIALRegular';
  color: #fff;
  > p {
    margin: 10px 0 0 0;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    display: flex;
    > p {
      margin: 10px 0;
    }
  }
`;

export const Heading = styled.h2`
  margin: 0;
  font-size: 72px;
  font-weight: 400;

  @media screen and (max-width: 800px) {
    font-size: 32px;
  }
`;

export const Title = styled.p`
  color: #ffffff;
  margin: 0;
  font-size: 18px;

  @media screen and (max-width: 800px) {
    font-size: 16px;
    margin: 20px 0;
  }
`;

export const EmailTtitle = styled.span`
  color: #ffffff;
  margin: 0 0 40px 0;
  font-size: 32px;
  /* border-bottom: 1px solid #fff; */
  :hover {
    border-bottom: 1px solid #fff;
  }

  @media screen and (max-width: 800px) {
    font-size: 20px;
    width: 224px;
  }
  a {
    color: white;
  }
`;

export const BtnContainer = styled.div`
  @media screen and (max-width: 800px) {
    margin: 50px 0 48px;
  }
`;

export const Unsubscribe = styled.span`
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    > p {
      font-size: 14px;
      margin: 24px 0 0 0;
      color: #fff;
    }
  }
`;
