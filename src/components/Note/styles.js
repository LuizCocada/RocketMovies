import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.RED_300};
  border-radius: 16px;
  padding: 30px;
  margin-top: 24px;
  border: none;
  cursor: pointer;

  h2 {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
  }

  svg {
    width: 12px;
    height: 12px;
  }

  p {
    overflow: hidden;
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    text-align: justify;
    max-height: 60px;
    text-overflow: ellipsis;
    overflow-y: scroll;
    border-radius: 5px;
  }

  footer {
    width: 100%;
    display: flex;
    margin-top: 20px;
    gap: 8px;

    .tags {
      font-size: 12px;
      padding: 5px 16px;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      border-radius: 8px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
