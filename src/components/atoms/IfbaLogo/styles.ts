import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:row;
    align-items: flex-end;
`;
export const Text = styled.div<{width:any}>`
    p {
        font-size : ${props => props.width ? props.width : 7 }px;
        margin-left: 2px;
    }
`;

export const TextPrimary = styled.p<{color:any}>`
    color: ${props => props.color ? 'var('+props.color+')' : 'var(--si-green-02)' };
`;
export const TextSecondary = styled.p<{color:any}>`
    color: ${props => props.color ? 'var('+props.color+')' : 'var(--si-green-02)' };
`;