import styled from 'styled-components';

interface Props {
  fontSize?: string;
  fontFamily?: string;
  color?: string;
  BgColor?: string;
  widthBtn?: string;
  heightBtn?: string;
  hoverColor?: string;
  hoverColorTitle?: string;
  borderColor?: string;
}

export const Buttons = styled.button<Props>`
  width: ${(props) => props.widthBtn};
  height: ${(props) => props.heightBtn};
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: ${(props) => props.color};
  padding: 18px 30px;
  border: 1px solid #000000;
  border-radius: 29px;
  background-color: ${(props) => props.BgColor};

  cursor: pointer;
  > img {
    margin-left: 8px;
  }
  @media screen and (max-width: 800px) {
    margin: 0 auto;
    width: 343px;
  }
  &:hover {
    background-color: ${(props) => props.hoverColor};
    color: ${(props) => props.hoverColorTitle};
    border: 1px solid ${(props) => props.borderColor};
  }
`;

export const DisabledButtons = styled.button<Props>`
  width: ${(props) => props.widthBtn};
  height: ${(props) => props.heightBtn};
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
  outline: none;
  display: flex;
  flex-direction: row;
  color: ${(props) => props.color};
  justify-content: center;
  padding: 18px 30px;
  border: none;
  border-radius: 29px;
  background-color: #666666;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    width: 343px;
  }
`;
