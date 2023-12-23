import styled from 'styled-components';

export const Container = styled.textarea`
    width: 100%;
    height: 274px;

    margin: 40px 0;

    border: none;
    border-radius: 10px;
    padding: 19px 16px;

    resize: none; //nao deixa aumentar a area

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
`