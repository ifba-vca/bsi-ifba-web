import styled from 'styled-components';

export const Container = styled.div<{width:any,height:any}>`
    width: ${props => props.width }px;
    height: ${props => props.height }px;
    display:flex;
    flex-direction: column;
`;

export const Line = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: left;
    width: 100%;
`;

export const Square = styled.div<{width:any,margin:any,color?:any}>`
    width: ${props => props.width }px;
    height: ${props => props.width }px;
    margin: ${props => props.margin }px;
    border-radius: 10%;
    background-color: ${props => props.color ? 'var('+props.color+')' : 'var(--si-green-02)' };
`;

export const Circle = styled.div<{width:any,margin:any,color?:any}>`
    width: ${props => props.width }px;
    height: ${props => props.width }px;
    margin: ${props => props.margin }px;
    border-radius: 50%;
    background-color: ${props => props.color ? 'var('+props.color+')' : 'var(--si-green-02)' };
`;