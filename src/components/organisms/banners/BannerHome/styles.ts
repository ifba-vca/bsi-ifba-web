import styled from 'styled-components';
import { mobile } from "../../../../Styles/generic/Breakpoints";

export const Container = styled.div`
    min-height: calc(100vh - 8px);
    display: flex;
    align-items: center;
    justify-content: center;
    position:relative;

    & svg {
        position:absolute;
        z-index:0;
    }
`;

export const TextContainer = styled.div`
    z-index:1;
    width: 100%;
    margin-top: 50px;
    align-self: flex-start;
    transition:0.5s;
    @media ${mobile.tablet} {
        margin-top: 0px;
        margin-left: 50px;
        align-self: center;
    }
`;

export const Title = styled.p`
    font-size:30px;
    transition:0.5s;
    text-align: center;
    @media ${mobile.tablet} {
        text-align: left;
        font-size:40px;
    }
`;

export const Subtitle = styled.p`
    font-size:20px;
    text-align: center;
    @media ${mobile.tablet} {
        text-align: left;
        font-size:30px;
    }
`;