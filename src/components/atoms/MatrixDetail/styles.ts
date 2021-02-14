import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--si-background-02);
  display: none;
  position: fixed;
  overflow: hidden;
  border-radius: 10px;
  width: 90vw;
  height: 90vh;
  left: 5vw;
  top: 5vh;
  transition: 1s;
  z-index: 10;
  &.show{
    display: flex !important;
  }
  box-shadow: 0px 0px 10px  var(--si-background-01);
`;

export const Content = styled.div`
  width: calc(90vw - 20px);
  padding: 5px;
`;

export const Close = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 5px;
  background-color: var(--si-magenta-01);
`;
