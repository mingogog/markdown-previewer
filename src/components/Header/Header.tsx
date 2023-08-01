import { HeaderContainer } from "./Header.styles"
import styled from "styled-components"
import { useState } from "react"

export const CheatSheetToggle = styled.button`
    background-color: #2a9d8f;
    padding: 10px;
    margin-left: auto;
    &:after{
        content: "Markdown Cheat Sheet";
    }
`

interface HeaderProps {
    onToggleGuide(): void;
}

const Header: React.FC<HeaderProps> = ({onToggleGuide}:HeaderProps) => {
    return (
        <div>
            <HeaderContainer>
                <CheatSheetToggle onClick={onToggleGuide}/>
            </HeaderContainer>
        </div>
    )
}
export default Header
// import { render } from "react-dom";
// import styled from "styled-components";

// // Create a Title component that'll render an <h1> tag with some styles
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: #BF4F74;
// `;

// // Create a Wrapper component that'll render a <section> tag with some styles
// const Wrapper = styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;

// // Use Title and Wrapper like any other React component – except they're styled!
// export { Wrapper, Title}