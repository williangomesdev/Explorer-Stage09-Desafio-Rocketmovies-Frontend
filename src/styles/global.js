import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding:0;
    box-sizing:border-box;
}

body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    color: ${({ theme }) => theme.COLORS.WHITE};
}
 a{
    text-decoration: none;
 }

 button, a{
    transition: filter 0.2s;
    cursor:pointer;


    &:hover{
        
    filter:brightness(0.9f)
} 
}

`;
