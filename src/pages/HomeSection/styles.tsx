import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 0 0 0;
  background: radial-gradient(
    39.46% 50% at 78% 50%,
    rgba(241, 241, 241, 0.94) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  background-color: #ffcb11;

  @media screen and (max-width: 800px) {
    padding: 16px;
    background: radial-gradient(
      39.46% 50% at 50% 100%,
      rgba(241, 241, 241, 0.94) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    background-color: #ffcb11;
    height: 667px;
  }
`;
