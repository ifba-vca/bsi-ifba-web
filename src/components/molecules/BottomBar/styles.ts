import styled from 'styled-components';
import { mobile } from "../../../Styles/generic/Breakpoints";
import {Link} from 'react-router-dom';

export const Modal = styled.div`
    width: 100px;
    height: 50px;
    position: fixed;
    bottom: 53px;
    background-color: var(--si-background-02);
    border-radius:20px 20px 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    &.close{
        display: none;
    }

    @media ${mobile.tablet} {
        display: none;
    }
`;

export const Container = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: var(--si-background-02);
    position: fixed;
    bottom: 0;

    @media ${mobile.tablet} {
        display: none;
    }
`;
export const ButtonContainer = styled.div` 
    width: 30px;
    display: flex;
    justify-content: flex-end;
`;

export const Button = styled.button`
    color: var(--si-text1);
    background-color: transparent;
    border: none;
    padding: 0;
`;