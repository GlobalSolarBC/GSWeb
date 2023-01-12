import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowsUp } from '../../assets/arrowsUp.svg';

interface IProps {
  isVisible?: boolean;
  isFooter?: boolean;
}

const FloatButton = ({ isVisible, isFooter }: IProps) => {
  return (
    <>
      {isVisible ? (
        <BtnLink href="#" isFooter={isFooter}>
          <Icon isFooter={isFooter}>
            <ArrowsUp />
          </Icon>
        </BtnLink>
      ) : null}
    </>
  );
};

export default FloatButton;

export const BtnLink = styled.a<IProps>`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  color: #000;
  cursor: pointer;
  position: fixed;
  z-index: 99;
  right: 3%;
  /* 42% footer */
  bottom: ${(props) => (props.isFooter ? '42%' : '12%')};
  width: 85px;
  height: 58px;
  outline: none;
  border-radius: 57px;
  background: #8080804c;
  backdrop-filter: blur(10px);
  padding: 0;
  :hover {
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(20px);
    border: ${(props) =>
      props.isFooter ? '1px solid #fff' : '1px solid #808080'};
    fill: ${(props) => (props.isFooter ? '#fff' : '#000')};
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Icon = styled.span<IProps>`
  width: 15px;
  height: 14px;
`;
