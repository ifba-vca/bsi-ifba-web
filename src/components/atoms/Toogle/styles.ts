import styled from 'styled-components';

export const Label = styled.label`
  left: 0;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 20px;
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:focus + span {
    box-shadow: 0 0 1px var(--si-background-01);
  }

  &:checked + span:before {
    transform: translateX(36px);
  }
`;

interface SliderProps {
  icon: string
}

export const Slider = styled.span<SliderProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;

  cursor: pointer;
  background-color: var(--si-background-01);
  border-radius: 34px;

  &:before {
    position: absolute;
    left: -.2rem;

    content: "${props => props.icon}";
    font-family: 'Material Icons';
    font-size: 1.4rem;
    padding: .2rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--si-blue);
    color: var(--si-light-02);

    transition: .4s;
  }
`;
