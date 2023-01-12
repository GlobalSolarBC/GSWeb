import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'AeonikProTRIALRegular';
  background: #A4CD69;
  font-weight: 400;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 630px;
  padding: 70px 53px;
  @media screen and (max-width: 800px) {
    padding: 40px 16px;
    height: auto;
    //  height: 451px; 
  }
`;

export const StyledHeading = styled.h3`
  // font-style: normal;
  font-weight: 400;
  font-size: 72px;
  margin: 0;
  @media screen and (max-width: 800px) {
    font-size: 32px;
    // margin: 0 0 20px 0;
  }
`;
export const StyledTitle = styled.p`
  font-size: 18px;
  margin: 0 0 50px 0;
  @media screen and (max-width: 800px) {
    font-size: 16px;
    margin: 0 0 40px 0;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 30%;
  list-style: none;
  padding: 0;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0;
    width: 50%;
  }
`;
export const StyledLi = styled.li`
  // max-width: 405px;
  list-style-type: none;
  margin-bottom: 32px;
  @media screen and (max-width: 800px) {
    // height: 25%;
    width: 100%;
    /* margin: 48px 0px; */
    // margin-bottom: 48px;
    :last-child {
      margin: 0;
    }
  }
`;
export const StyledSpan = styled.span`
  font-size: 18px;
  @media screen and (max-width: 800px) {
    line-height: 17.6px;
    font-size: 16px;
  }
`;
export const StyledHead = styled.p`
  font-size: 32px;
  margin: 10px 0 0px;
  white-space: nowrap;
  @media screen and (max-width: 800px) {
    margin: 10px 0 0px;;
    font-size: 20px;
    white-space: normal;
  }
`;

export const StyledP = styled.p`
  font-size: 18px;
  margin: 0;
  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;

export const StyledSun = styled.p`
  font-size: 32px;
  margin: 10px 0;
  @media screen and (max-width: 800px) {
    margin: 0;
    font-size: 20px;
  }
`;

export const Coll = styled.p`
  display: flex;
  flex-direction: column;
`
export const Row = styled.p`
  display: flex;
  flex-direction: row;
  margin: 50px 0;
  @media screen and (max-width: 800px) {
    margin: 40px 0;
  }
`