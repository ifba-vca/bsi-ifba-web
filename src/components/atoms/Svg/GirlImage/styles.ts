import styled from 'styled-components';
import { mobile } from "../../../../Styles/generic/Breakpoints";

export const Desktop = styled.svg`
    width:100%;
    height:100%;
    fill:none;
    transition:.1s;
    display:none;
    @media ${mobile.tablet} {
        display:block;
    }
`;
export const Mobile = styled.svg`
    width:100%;
    height:100%;
    fill:none;
    transition:.1s;
    display:block;
    @media ${mobile.tablet} {
        display:none;
    }
`;