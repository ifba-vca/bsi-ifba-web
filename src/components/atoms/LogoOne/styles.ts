import styled from 'styled-components';
import {_ubuh2,_ubuh3} from '../../../Styles/generic/Typography';

export const Container = styled.div`
    display: flex;
    align-items: center;
`;
export const Logo = styled.img<{small:any}>`
    height: ${props => props.small ? 10 : 30 }px;
    margin-right: 10px;
`;
export const Title = styled.h1<{small:any}>`
    ${props => props.small ? _ubuh3 : _ubuh2}
`;
