import styled from "styled-components"
export const HeaderContainer = styled.section`
    overflow: hidden;
    background-color: #264653;
    padding: 10px 10px;
    display: flex;
    align-items: center;
    width: 100vw;
    box-sizing: border-box;
    &:before{
        content: "Markdown Previewer";
        font-weight: bold;
        font-size: x-large;
    }
`

