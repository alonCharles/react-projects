import styled from "styled-components";

export const StyledDisplay = styled.div`
    box-sizing: border-box;
    display:flex;
    align-items:center;
    margin: 0 0 20px 0;
    border:4px solid #333;
    min-height:30px;
    width:100%;
    color:${props => (props.gameOver ? 'red': '#999')};
    background:#000;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size:0.8rem;
`