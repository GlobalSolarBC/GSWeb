import styled from 'styled-components';

export const Container = styled.div`
  padding: 70px 50px;
  max-width: 1440px;
  /* background-color: aqua; */
  margin: 0 auto;
  @media screen and (max-width: 800px) {
    padding: 40px 16px;
  }
`;

export const Heading = styled.p`
  font-family: 'AeonikProTRIALLight';
  font-weight: 400;
  font-size: 72px;
  margin: 0 0 50px 0;
  @media screen and (max-width: 800px) {
    font-size: 32px;
  }
`;
const BaseUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const MenuList = styled(BaseUl)`
  @media screen and (max-width: 800px) {
  }
`;

export const MenuListItem = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000;
  padding: 10px 0;
  :first-child {
    padding: 0 0 5px 0;

    > span {
      font-weight: bold;
      // font-size: 14px;
    }
  }
  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

export const Allocation = styled.span`
  width: 400px;
  @media screen and (max-width: 800px) {
    width: 85px;
  }
`;
export const Time = styled.span`
  width: 350px;
  @media screen and (max-width: 800px) {
    width: 130px;
  }
`;
export const Vestings = styled.span`
  width: 170px;
  @media screen and (max-width: 800px) {
    width: 85px;
  }
`;

export const GraPhic = styled.div`
  svg {
    .line0:hover,
    .line1:hover,
    .line2:hover,
    .line3:hover,
    .line4:hover,
    .line5:hover,
    .line6:hover,
    .line7:hover {
      stroke: #90cd38;
      stroke-width: 4;
    }
  }
`;
export const FieldListItem = styled.li``;

export const FieldName = styled.p`
  cursor: pointer;

  &&:hover ~ ${GraPhic} {
    > .line0 {
      stroke: #90cd38;
      stroke-width: 4;
    }
  }

  /* &&:hover ~ ${FieldListItem} {
    background-color: aqua;
  } */
`;
// export const FieldList = styled(BaseUl)``;
// export const FieldIcon = styled.span``;

export const Div = styled.div`
  width: 1339px;
  height: 538px;
  margin-top: 70px;
  @media screen and (max-width: 800px) {
    width: 375px;
    height: 434px;
  }
`;

export const LegenItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 32px;
  :hover {
    opacity: 1 !important;
  }
  @media screen and (max-width: 800px) {
    margin-top: 20px;
    margin-right: 16px;
  }
`;
export const Legend = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1072px;
  margin-top: 40px;
  :has(${LegenItem}:hover) {
    > ${LegenItem} {
      opacity: 0.25;
    }
  }
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    // margin: 0;
  }
`;
export const LegendSpan = styled.div`
  // background: #90cd38;
  width: 12px;
  height: 12px;
  margin-right: 8px;
  border-radius: 100%;
  @media screen and (max-width: 800px) {
    margin-right: 4px;
  }
`;
export const LegendText = styled.p`
  margin: 0;
  font-size: 18px;
  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;
