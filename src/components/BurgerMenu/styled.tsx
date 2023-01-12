import styled from 'styled-components';
interface IProps {
  isOpen: boolean;
}

export const Hamburger = styled.div<IProps>`
  width: 20px;
  height: 17px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  & span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: ${(props) => (props.isOpen ? `#fff` : `#000`)};
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }
  & span:nth-child(1) {
    top: 0px;
  }
  & span:nth-child(2),
  & span:nth-child(3) {
    top: 6px;
  }
  & span:nth-child(4) {
    top: 12px;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
  & span:nth-child(1) {
    top: 6px;
    width: 0%;
    left: 50%;
  }

  & span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  & span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  & span:nth-child(4) {
    top: 6px;
    width: 0%;
    left: 50%;
  }
  `}
`;

export const HamburgerContainer = styled.div<IProps>`
  ${(props) => (props.isOpen ? `display: flex;` : `display: none`)};
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */
  justify-content: flex-end;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(0 0 0);
  z-index: 2;
  /* overflow: auto; */
`;

export const MobileMenu = styled.div`
  display: flex;
  align-items: flex-end;
  @media screen and (min-width: 801px) {
    display: none;
  }
`;
export const MobileContent = styled.div`
  width: 100%;
  padding: 16px;
`;

export const BurgerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

export const GiperLinkBurger = styled.a`
  width: 343px;
  height: 58px;
  border: 1px solid #ffffff;
  border-radius: 29px;
  padding: 18px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
`;

export const ContentBurger = styled.div`
  height: 150px;
  border-bottom: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const LinksBurger = styled.div`
  width: 343px;
  display: flex;
  margin: 40px auto;
`;
