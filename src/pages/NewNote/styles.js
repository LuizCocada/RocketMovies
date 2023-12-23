import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 40px 0 85px;
  }
`;

export const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;

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

  h1 {
    font-size: 36px;
    font-weight: 500;
    margin: 24px 0 40px;
  }
`;

export const Form = styled.form`
  div:first-child {
    display: flex;
    gap: 40px;
  }

  > h2 {
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  .marcadores {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    align-items: center;
    gap: 24px;
    padding: 16px;
    flex-wrap: wrap;
    width: 100%;
    border-radius: 8px;
    margin-top: 24px;
  }

  .buttons {
    display: flex;
    gap: 40px;
    font-weight: 500;
    margin-top: 40px;
    
    button{
      cursor: pointer;
    }
  }

  button:first-child{
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  `;
