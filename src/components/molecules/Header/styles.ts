import styled from 'styled-components';
import {_ubuh2} from '../../../Styles/generic/Typography';

export const Container = styled.div`
    width:100%;
    height: 60px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    background-color: var(--si-background-02)
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