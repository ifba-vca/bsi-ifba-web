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

    &:checked + span {
        background-color: #2196F3;
    }

    &:focus + span {
        box-shadow: 0 0 1px #2196F3;
    }
    
    &:checked + span:before {
        -webkit-transform: translateX(33px);
        -ms-transform: translateX(33px);
        transform: translateX(33px);
    }
`;
export const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;

    &:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 2.5px;
        bottom: 2.5px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
    }
`;