import styled from 'styled-components';
import { mobile } from "../../../../Styles/generic/Breakpoints";
import {_ubuh1} from '../../../../Styles/generic/Typography';

export const Container = styled.div`
    display: flex;
    width:100%;
    min-height: 400px;
    flex-wrap: wrap-reverse;
    justify-content: center;
`;

export const SubContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h2`
    ${_ubuh1};
    margin: 10px;
    margin-bottom: 30px;
`;

export const Content = styled.p`
    max-width: 400px;
    margin: 13px 10px;
    text-align: center;
`;

export const Link = styled.a`
    max-width: fit-content;
    margin: 10px;
    padding: 5px 20px;
    border-radius: 20px;
    background-color: var(--si-orange-01);
    color: var(--si-red-01);
    font-weight: bold;
    align-self: center;
`;

export const DevsImage = styled.img`
    margin: 30px 0;
    max-width: 100%;
    max-height: 250px;
    border-radius: 10px;

    @media ${mobile.tablet} {
        margin: 0;
        max-width: 100%;
    }
`;