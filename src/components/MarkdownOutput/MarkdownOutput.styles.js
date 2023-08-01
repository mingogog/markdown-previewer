import styled from "styled-components";

export const MarkdownOutputContainer = styled.div`
    color: white;
    width: 50%;
    height: 100%;
    padding: 0px 20px;
    box-sizing: border-box;
    font-size: 12px;
    p{
        word-break: break-all;
        white-space: normal;
    }
    .react-mark-down p{
        white-space: pre-wrap;
    }
`