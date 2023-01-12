import 'animate.css/animate.min.css';
import styled, { keyframes } from 'styled-components';

export const slowDown10 = keyframes`
  0%{
    opacity: 0;
    transform: translateY(-10px);
  }
  100%{
    transform: translateY(0);
    opacity: 1;
  }
`;

export const slowDown20 = keyframes`
  0%{
    opacity: 0;
    transform: translateY(-20px);
  }
  100%{
    transform: translateY(0);
    opacity: 1;
  }
`;

export const slowUp10 = keyframes`
  0%{
    opacity: 0;
    transform: translateY(10px);
  }
  100%{
    transform: translateY(0);
    opacity: 1;
  }
`;

export const slowUp20 = keyframes`
  0%{
    opacity: 0;
    transform: translateY(20px);
  }
  100%{
    transform: translateY(0);
    opacity: 1;
  }
`;

export const AnimatedDiv = styled.div`
  height: inherit;
  width: inherit;
  display: inherit;
  justify-content: inherit;
`;
