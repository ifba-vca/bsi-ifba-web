import styled from 'styled-components';
import {_ubuh3} from '../../../Styles/generic/Typography';

export const Container = styled.a`
    margin: 20px;
    width:150px;
    min-height: 250px;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color: var(--si-background-02);
    border-radius: 10px;
    transition: 0.5s;

    :hover{
        box-shadow: 0px 0px 10px  var(--si-text);
    }
`;

export const AtavarContainer = styled.div`
    width:100px;
    height:100px;
    border-radius: 50%;
    margin: 25px 0;
    background-color: var(--si-background-01);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

export const Avatar = styled.img`
    max-width: calc(100% - 10px);
    max-height: calc(100% - 10px);
`;

export const Title = styled.h3`
    ${_ubuh3}
    text-decoration:none;
    text-align: center;
    margin: 10px;
`;