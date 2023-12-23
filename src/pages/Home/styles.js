import styled from 'styled-components';


export const Container = styled.div`
    height: 100vh;
    
    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
        "header"
        "content"
    ;

    > main{
        grid-area: content;
        overflow-y: scroll;
        padding: 50px 0 58px;
    }

`

export const Content = styled.div`
    max-width: 1000px;
    margin: 0 auto;

    div:first-child{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        h1{
            font-weight: 400;
        }

        a{
            padding: 16px 20px;
            background-color: ${({theme}) => theme.COLORS.PINK};
            color: ${({theme}) => theme.COLORS.BACKGROUND_900};
            border-radius: 8px;

            display: flex;
            align-items: center;
            gap: 8px;

            svg{
                font-size: 20px;
            }
        }
    }

    .stars{
        display: flex;
        gap: 6px;
        margin: 8px 0 15px;
    }


`