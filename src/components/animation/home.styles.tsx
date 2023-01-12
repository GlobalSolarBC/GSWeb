import styled from 'styled-components';
import { slowDown20, slowUp20, AnimatedDiv } from './general.styles';

export const HeaderAnimation = styled(AnimatedDiv)`
  width: 100%;
  /* background-color: pink; */
  animation: ${slowDown20} 1s forwards;
`;

export const TitleHeadingAnimation = styled(AnimatedDiv)`
  animation: ${slowUp20} 1s forwards;
  animation-delay: 250ms;
  opacity: 0;
`;

export const SubTitleHeadingAnimation = styled(AnimatedDiv)`
  animation: ${slowUp20} 900ms forwards;
  animation-delay: 500ms;
  opacity: 0;
  width: 100%;
`;

export const ButtonHeadingAnimation = styled(AnimatedDiv)`
  animation: ${slowUp20} 700ms forwards;
  animation-delay: 700ms;
  opacity: 0;
  width: 100%;
`;
