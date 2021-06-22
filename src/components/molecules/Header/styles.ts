import styled from 'styled-components';
import {_ubuh2} from '../../../Styles/generic/Typography';
import { mobile } from "../../../Styles/generic/Breakpoints";

export const Container = styled.div`
    position: fixed;
    width: 100%;
    top:0;
    z-index: 1000;
`;

export const Content = styled.div`
    width:100%;
    height: 60px;
    display:none;
    justify-content:space-around;
    align-items:center;
    background-color: var(--si-background-02);
    @media ${mobile.tablet} {
        display:flex;
    }
`;

export const DiscordInfo = styled.p`
    text-align: center;
    margin: 5px 0;

    i{
        margin-right: 10px;
    }
    a{
        color: var(--si-light-01);
        font-weight: bold;
        :hover{
            color: var(--si-yellow-01);
            filter: brightness(1.5);
        }
    }
`;

export const Logo = styled.img`
    height: 30px;
`;
export const Title = styled.h1`
    ${_ubuh2}
`;