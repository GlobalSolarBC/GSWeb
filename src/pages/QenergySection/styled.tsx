import styled from 'styled-components';
import SolarPanelImg from '../../assets/image/aerial_drone.jpeg';
import Solar from '../../assets/image/pngImg.png';
// import SolarPanelImg from '../../assets/image/aerial_drone.jpeg';

export const Container = styled.div`
  font-family: 'AeonikProTRIALRegular';
  background-color: #ffcb11;
`;

export const Block = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  height: 900px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 801px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* height: auto; */
    height: 1070px;
  }
`;

export const Content = styled.div`
  width: 710px;
  height: 100%;
  padding: 70px 50px 75px;
  @media screen and (max-width: 801px) {
    width: 100%;
    height: 589px;
    padding: 40px 16px;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 690px;
  @media screen and (max-width: 801px) {
    height: auto;
    height: 400px;
    margin: 0 0 48px 0;
  }
`;

export const Heading = styled.h3`
  font-family: 'AeonikProTRIALLight';
  font-size: 72px;
  margin: 0 0 25px 0;
  @media screen and (max-width: 801px) {
    margin: 0 0 20px 0;
    font-size: 32px;
  }
`;
export const HeadingTitle = styled.p`
  max-width: 538px;
  font-size: 18px;
  margin: 0 0 50px 0;
  @media screen and (max-width: 801px) {
    font-size: 16px;
    margin: 0 0 0 0;
  }
`;

export const MenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
  font-size: 18px;
  height: 300px;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 801px) {
    display: block;
    /* background-color: aqua; */
    height: auto;
    margin: 48px 0;
  }
`;

export const ItemSpan = styled.span`
  font-family: 'AeonikProTRIALRegular';
  font-size: 32px;
  @media screen and (max-width: 801px) {
    font-size: 20px;
    margin: 0 0 10px 0;
  }
`;

export const Item = styled.li`
  padding: 0;
  list-style: none;
  font-size: 18px;
  // :last-child {
  //   > p {
  //     margin: 10px 0 0;
  //   }
  }

  @media screen and (max-width: 801px) {
    margin: 0 0 20px 0;
    // > p {
    //     margin: 10px 0 0;
    //   }
    // :last-child {
    //   margin: 0;
    // }
  }
`;

export const ItemLast = styled.li`
  padding: 0;
  list-style: none;
  font-size: 18px;
  > p {
    margin: 10px 0 0;
  }

  @media screen and (max-width: 801px) {
    margin: 0 0 20px 0;
    // > p {
    //     margin: 10px 0 0;
    //   }
    :last-child {
      margin: 0;
    }
  }
`;

export const ItemP = styled.p`
  margin: 0 0 10px 0;
  @media screen and (max-width: 801px) {
    font-size: 16px;
    margin: 0 0 10px 0;
  }
`;

export const ImageContainer = styled.div`
  background-image: url(${SolarPanelImg});
  width: 710px;
  height: 100%;
  @media screen and (max-width: 801px) {
    background-image: url(${Solar});
    width: 375px;
    height: 469px;
  }
`;

export const SocialContent = styled.div`
  max-width: 360px;
  height: 70px;
`;

export const DivSocial = styled.div`
  display: flex;
  justify-content: space-between;

  > img {
    cursor: pointer;
  }
`;
