import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'AeonikProTRIALRegular';
  background: #ffffff;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 605px;
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
  justify-content: space-between;
  list-style: none;
  padding: 0;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
  }
`;
export const StyledLi = styled.li`
  max-width: 300px;
  margin-right: 40px;
  // width: 25%;
  @media screen and (max-width: 800px) {
    width: 100%;
    /* margin: 48px 0px; */
    margin-bottom: 48px;
    :last-child {
      margin: 0;
    }
  }
`;
export const StyledSpan = styled.span`
  font-size: 120px;
  @media screen and (max-width: 800px) {
    line-height: 64px;
    font-size: 64px;
  }
`;
export const StyledHead = styled.p`
  font-size: 32px;
  margin: 20px 0 20px;
  @media screen and (max-width: 800px) {
    margin: 10px 0;
    font-size: 20px;
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
