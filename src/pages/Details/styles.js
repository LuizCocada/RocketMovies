import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;

  grid-template-rows: 116px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 40px 0 130px;
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

  .movie {
    display: flex;
    margin-top: 24px;
    align-items: center;

    h1 {
      padding-right: 19px;
    }

    svg {
      margin-right: 7px;
    }
  }

  .author {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-top: 24px;
    img {
      width: 19px;
      height: 19px;
      border: 1.8px solid ${({ theme }) => theme.COLORS.GRAY_400};
      border-radius: 50%;
    }
  }

  .tags {
    display: flex;
    gap: 8px;
    margin: 40px 0;
  }

  > p {
    text-align: justify;
    font-size: 16px;
  }
`;
