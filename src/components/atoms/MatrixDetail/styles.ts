import styled from 'styled-components';
import {_ubuh2,_ubutextlittle} from '../../../Styles/generic/Typography';

export const Container = styled.div`
  background-color: var(--si-background-02);
  display: none;
  position: fixed;
  overflow: hidden;
  border-radius: 10px;
  width: 90vw;
  max-width: 600px;
  height: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 1s;
  z-index: 10;
  &.show{
    display: flex !important;
  }
  box-shadow: 0px 0px 10px  var(--si-background-01);
`;

export const Content = styled.div`
  width: 100%;
  position: relative;
`;

export const Cover = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  object-position: center;
`;

export const Close = styled.a`
  cursor: pointer;
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 5px;
  background-color: var(--si-magenta-01);
`;

export const Title = styled.p`
  ${_ubuh2};
  margin: 25px 0 0 10px;
`;
export const DisciplineSubtitle = styled.p`
  margin-left: 10px;
  margin-bottom: 5px;
`;
export const Subtitle = styled.p`
  margin-left: 10px;
  margin-bottom: 60px;
`;
export const Box = styled.div`
  border: var(--si-background-01) solid 1px;
  padding: 15px;
  width: 50%;
  border-radius: 10px;
  margin: auto;
`;
export const Text = styled.p`
  ${_ubutextlittle};
  text-align: center;
  margin: 4px 0;
`;
