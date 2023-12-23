import styled from 'styled-components';

export const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ $isChecked, theme }) => ($isChecked ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_900)};

  &:hover {
    color: ${({theme}) => theme.COLORS.PINK};
  }
`;


