import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  border: ${({ theme, $isnew }) =>
    $isnew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none"};
  background-color: ${({ theme, $isnew }) =>
    $isnew ? "transparent" : theme.COLORS.BACKGROUND_700};
  border-radius: 10px;
  padding-right: 16px;

  input {
    color: ${({ theme }) => theme.COLORS.WHITE};
    height: 56px;
    padding: 16px;
    border: none;
    background: transparent;
  }

  .input-add {
    width: 100%;
  }

  .input-delete{
    width: 170px;
  }

  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
    cursor: pointer;
  }
`;
