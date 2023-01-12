import styled from 'styled-components';

export const Container = styled.div`
  background: #a4cd69;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  padding: 70px 0 70px 50px;
  height: 900px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 801px) {
    display: flex;
    flex-direction: column-reverse;
    height: 1000px;
    /* height: auto; */
    padding: 40px 17px;
    margin: 0;
  }
`;

export const ListContainer = styled.div`
  > p {
    max-width: 550px;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.3px;
    margin: 0;
  }
`;

export const List = styled.ul`
  display: flex;
  align-content: flex-end;
  align-items: flex-end;
  font-size: 18px;
  justify-content: center;
  font-family: 'AeonikProTRIALRegular';
  padding-bottom: 15px;
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li``;

const CustomStyleDiv = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 137px;
`;

const CustomStyleSpan = styled.span`
  display: flex;
  width: 137px;
  height: 351px;
`;

export const ListItemProgress1 = styled(CustomStyleDiv)`
  background: linear-gradient(180deg, #f4f9ec 0%, rgba(244, 249, 236, 0) 100%);
  height: 252px;
  @media screen and (max-width: 800px) {
    width: 85px;
    height: 121px;
  }
`;

export const ListItemProgress2 = styled(CustomStyleDiv)`
  background: linear-gradient(180deg, #ddecc7 0%, rgba(221, 236, 199, 0) 100%);
  height: 430px;
  @media screen and (max-width: 800px) {
    width: 85px;
    height: 206px;
  }
`;

export const ListItemProgress3 = styled(CustomStyleDiv)`
  background: linear-gradient(180deg, #bbd98e 0%, rgba(187, 217, 142, 0) 100%);
  height: 554px;
  @media screen and (max-width: 800px) {
    width: 85px;
    height: 265px;
  }
`;
export const ListItemProgress4 = styled(CustomStyleDiv)`
  height: 702px;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    width: 85px;
    height: 336px;
  }
`;

export const ProgressImg1 = styled(CustomStyleSpan)`
  background: linear-gradient(180deg, #f4f9ec 0%, rgba(244, 249, 236, 0) 130%);
  align-items: flex-end;
  justify-content: center;
  @media screen and (max-width: 800px) {
    width: 85px;
    height: 166px;
  }
`;

export const ProgressImg2 = styled(CustomStyleSpan)`
  background: linear-gradient(
    179.09deg,
    #8dc043 8.27%,
    rgba(141, 192, 67, 0) 109.09%
  );
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  > span {
    &:first-child {
      padding-top: 10px;
      display: flex;
      justify-content: center;
    }
  }
  @media screen and (max-width: 800px) {
    width: 85px;
    height: 185px;
  }
`;

export const ProgressImg3 = styled(CustomStyleSpan)`
  align-items: flex-end;
  justify-content: center;
`;

export const TitleSpan = styled.span`
  padding-bottom: 10px;
  font-size: 20px;

  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`;

export const TitleSpanYear = styled.span`
  padding-bottom: 10px;
  font-size: 18px;
`;

export const MenuItem = styled.li`
  margin-right: 1px;
  > span {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 800px) {
    margin-right: 1px;
  }
`;
// new siction

export const TextContainer = styled.div`
  font-family: 'AeonikProTRIALRegular';
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 710px;
  height: 560px;
  margin: auto 0;

  > div {
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    width: 100%;
    height: 400px;
    justify-content: flex-start;
  }
`;

export const TextUl = styled.ul`
  display: flex;
  flex-direction: column;

  height: 100%;
  justify-content: space-between;
  padding-left: 29px;

  @media screen and (max-width: 800px) {
    /* height: 240px; */
    margin: 0;
  }
`;

export const Text = styled.li`
  margin: 0.5px;
  ::marker {
    font-size: 2em;
  }
  @media screen and (max-width: 800px) {
    :last-child > p {
      margin: 0 0 10px 0;
    }
  }
`;

export const TextSpan = styled.p`
  font-size: 32px;
  line-height: 36px;
  margin: 0 0 32px 0;
  @media screen and (max-width: 800px) {
    font-size: 20px;
    line-height: 23px;
    margin: 0 0 10px 0;

    /* margin: 0 0 21px 0; */
  }
`;

export const TextSpanButtom = styled.p`
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 0;
  width: 620px;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const TextHeading = styled.span`
  font-size: 72px;
  line-height: 105%;
  @media screen and (max-width: 800px) {
    font-size: 32px;
    line-height: 100%;
  }
`;

export const TextSubHeading = styled.p`
  font-size: 32px;
  /* line-height: 50px; */
  @media screen and (max-width: 800px) {
    font-size: 16px;
    line-height: 110%;
  }
`;
