import styled from "styled-components";

import backgroundImg from "../../assets/backgroundImg.png";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  padding: 0 163px;

  h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  p {
    font-size: 14px;
    display: flex;
  }

  h2 {
    display: flex;
    margin: 48px 0;
  }

  a {
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .buttonBack {
    margin-top: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5px;

    a {
      margin-top: -2px;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #1c1b1e; 
    opacity: 0.7; 
  }
`;
