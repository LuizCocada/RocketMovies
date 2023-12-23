import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-bottom-width: 1.5px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_400};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 64px;

  > h1 {
    margin: 0 64px 0 0;
    font-size: 30px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .seachInput {
    min-width: 250px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  margin: 0 0 0 64px;
  min-width: 200px;
  position: relative;

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-top: -20px;

    strong {
      font-size: 14px;
      font-weight: 700;
    }

    button {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      cursor: pointer;
      position: absolute;
      bottom: 10px;
      right: 120px;
      border: none;
      background: none;
    }
  }
`;
