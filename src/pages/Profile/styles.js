import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 144px auto;
  grid-template-areas:
    "header"
    "content";

  main {
    grid-area: content;
  }
`;

export const Header = styled.header`
  grid-area: header;
  background-color: ${({ theme }) => theme.COLORS.RED_300};

  display: flex;
  padding-left: 120px;

  .buttonBack { 
    display: inline-flex;

    a {
      color: ${({ theme }) => theme.COLORS.PINK};
      width: 100%;
      display: flex;
      gap: 4px;
      align-items: center;
    }
  }
`;

export const Content = styled.div`
  max-width: 340px;
  margin: 0 auto;

  .usuario-img {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: -100px;

    img {
      width: 186px;
      height: 186px;
      border-radius: 50%;
    }

    label {
      width: 46px;
      height: 46px;

      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: 4px;
      right: 85px;

      cursor: pointer;

      input {
        display: none;
      }

      svg {
        width: 20px;
        height: 20px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      }
    }
  }
`;

export const Form = styled.form`
  margin: 64px auto 200px;

  > div:nth-child(2) {
    margin-bottom: 23px;
  }

  > button {
    font-weight: 500;
    padding: 14px;
  }
`;
