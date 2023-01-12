import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'AeonikProTRIALRegular';
  background-color: #000000;
  height: 399px;
  padding: 70px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  // justify-content: space-between;
  @media screen and (max-width: 801px) {
    padding: 40px 16px;
    height: auto;
  }
`;

export const Heading = styled.h3`
  color: #fff;
  font-size: 72px;
  margin: 0 0 50px 0;
  line-height: 93%;
  @media screen and (max-width: 801px) {
    font-size: 46px;
    margin-bottom: 40px;
  }
`;

export const Title = styled.p`
  color: #fff;
  font-size: 18px;
  @media screen and (max-width: 801px) {
    font-size: 16px;
    margin: 20px 0 48px;
  }
`;
