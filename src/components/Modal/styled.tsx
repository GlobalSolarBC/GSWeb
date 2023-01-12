import styled from 'styled-components';

interface Props {
  isOpen?: boolean;
}

export const ModalBackdrop = styled.div<Props>`
  ${(props) => (props.isOpen ? `display: flex;` : `display: none`)};
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(40, 40, 40, 0.8);
  z-index: 10;
  overflow: auto;
  @media screen and (max-width: 800px) {
    width: 100vw;
    height: 100vh;
  }
`;

export const Container = styled.div`
  font-family: 'AeonikProTRIALRegular';
  background-color: #fff;
  width: 836px;
  height: 500px;
  padding: 32px;
  @media screen and (max-width: 800px) {
    padding: 40px 16px;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-content: space-between;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const IconWrapper = styled.div`
  svg {
    cursor: pointer;
    width: 30px;
    height: 30px;
  }

  @media screen and (max-width: 800px) {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Span = styled.span`
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const IconClose = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 60px 90px;
  height: 100%;

  @media screen and (max-width: 800px) {
    padding: 0;
    width: 100%;
    justify-content: center;
  }
`;
export const ModalHeading = styled.p`
  font-size: 72px;
  margin: 0;
  @media screen and (max-width: 800px) {
    font-size: 46px;
    margin: 0 0 15px 0;
  }
`;

export const ModalTitle = styled.p`
  margin: 0;
  font-size: 18px;
  @media screen and (max-width: 800px) {
    font-size: 16px;
    margin: 0 0 30px 0;
  }
`;

export const SuccessContainer = styled.div`
  font-family: 'AeonikProTRIALLight';
`;

export const SuccessHeading = styled.h2`
  font-size: 72px;
  margin: 0 0 20px 0;
  @media screen and (max-width: 800px) {
    font-size: 46px;
  }
`;

export const SuccessTitle = styled.p`
  font-size: 18px;
  margin: 0 0 50px 0;
  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;

export const BtnContainer = styled.div`
  @media screen and (max-width: 800px) {
    margin: 50px 0 48px;
  }
`;
