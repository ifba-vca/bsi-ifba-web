import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 25px;
    background-color: var(--si-orange-01);
    color: var(--si-red-01);
    display: flex;
    flex-direction: row;
    align-items: center;

    &.close{
        display: none;
    }
`;

export const ChildArea = styled.div`
    flex: 1;
    margin-left: 10px;
`;

export const Close = styled.button`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 2px;
    background-color: var(--si-orange-01);
    color: var(--si-red-01);
    font-weight: bold;
    filter: brightness(0.7);
    cursor: pointer;

    &:hover{
        filter: brightness(0.9);
    }
`;