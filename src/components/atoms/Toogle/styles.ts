import styled from 'styled-components';

export const Label = styled.label`
    left: 0;
    position: relative;
    display: inline-block;
    width: 60px;
    height: 25px;
`;
export const Input = styled.input`
    opacity: 0;
    width: 0;
    height: 0;

    &:focus + span {
        box-shadow: 0 0 1px var(--si-background-01);
    }
    
    &:checked + span:before {
        -webkit-transform: translateX(36px);
        -ms-transform: translateX(36px);
        transform: translateX(36px);
    }
`;
export const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--si-background-01);
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;

    &:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 2.5px;
        bottom: 2.2px;
        background-color: var(--si-background-02);
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
    }
`;