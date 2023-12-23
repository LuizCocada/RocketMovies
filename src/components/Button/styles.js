import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.BACKGROUND_800};

    cursor: pointer;

    padding: 0 16px;
    height: 48px;

    border: none;
    border-radius: 8px;

    margin-top: 16px;

    font-weight: 500;

    &:disabled{
        opacity: 0.5;

    }
`