/* eslint-disable jsx-quotes */
import React from 'react';
import { Buttons, DisabledButtons } from './styles';
import Loader from '../../assets/loader-anime.gif';

interface Props {
  text: string;
  fontSize?: string;
  fontFamily?: string;
  color?: string;
  BgColor?: string;
  widthBtn?: string;
  isDisabled?: boolean;
  heightBtn?: string;
  loading?: boolean;
  textLoading?: string;
  widthBtnLoad?: string;
  hoverColor?: string;
  borderColor?: string;
  hoverColorTitle?: string;
  clickHandler?: () => void;
}

const Button = (args: Props) => {
  const {
    text,
    fontSize,
    borderColor,
    fontFamily,
    widthBtnLoad,
    hoverColor,
    hoverColorTitle,
    textLoading,
    loading = false,
    widthBtn = '211px',
    heightBtn = '57px',
    isDisabled = false,
    clickHandler,
    color = '#FFF',
    BgColor = '#000000',
  } = args;

  return (
    <>
      {isDisabled ? (
        <DisabledButtons
          color={color}
          fontSize={fontSize}
          widthBtn={widthBtn}
          heightBtn={heightBtn}
        >
          {text}
        </DisabledButtons>
      ) : (
        <Buttons
          onClick={clickHandler}
          fontSize={fontSize}
          fontFamily={fontFamily}
          color={color}
          BgColor={BgColor}
          disabled={isDisabled}
          widthBtn={loading ? widthBtnLoad : widthBtn}
          heightBtn={heightBtn}
          hoverColor={hoverColor}
          hoverColorTitle={hoverColorTitle}
          borderColor={hoverColorTitle}
        >
          {loading ? (
            <>
              {textLoading}

              <img
                src={Loader}
                alt="loading..."
                width={'24px'}
                height={'24px'}
              />
            </>
          ) : (
            <>{text}</>
          )}
        </Buttons>
      )}
    </>
  );
};

export default Button;
