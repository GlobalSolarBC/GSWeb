import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'AeonikProTRIALRegular';
  background: #FFCB11;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 900px;
  padding: 60px 50px;
  @media screen and (max-width: 800px) {
    padding: 40px 16px;
    height: auto;
    /* height: 804px; */
  }
`;

export const StyledHeading = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 72px;
  margin: 0;
  @media screen and (max-width: 800px) {
    font-size: 32px;
    margin: 0 0 20px 0;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  // justify-content: space-between;
  
`



export const Item = styled.div`
  display: flex;
  flex-direction: column-reverse;
  text-align: center;
  width: 50%;
  // height: 100%;
  
`

export const ItemText = styled.p`
  font-size: 32px;
  margin: 10px 0;
  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`

export const ItemText2 = styled.p`
  font-size: 120px;
  margin: 0 0 48px 0;
  @media screen and (max-width: 800px) {
    font-size: 64px;
  }
`

export const ItemText3 = styled.p`
  font-size: 18px;
  margin-bottom: 32px;
  margin-top: 0px;
  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`
const ItemGrad = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column-reverse;
  background: linear-gradient(180.42deg, #FFE070 0.37%, rgba(255, 235, 164, 0) 104.91%)
`

export const ItemGrad1 = styled(ItemGrad)`
  height: 414px;
`

export const ItemGrad2 = styled(ItemGrad)`
  height: 542px;
`