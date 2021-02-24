import { createGlobalStyle } from "styled-components";

import AvertaRegular from '../../assets/fonts/Averta-Regular/Averta-Regular.woff'
import AvertaRegular2 from '../../assets/fonts/Averta-Regular/Averta-Regular.woff2'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Averta Regular', sans-serif;
    }

    @font-face {
        font-family: 'Averta Regular';
        src: local('Averta Regular'), local('Averta Regular'),
        url(${AvertaRegular2}) format('woff2'),
        url(${AvertaRegular}) format('woff');
    }

`;
