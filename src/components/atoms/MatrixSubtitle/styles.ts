import styled from 'styled-components';
import {_ubuh2,_ubutextlittle} from '../../../Styles/generic/Typography';

export const Container = styled.div`
    display: flex;
    align-items: center;
  flex-direction: column;
`;
export const List = styled.div`
    display: flex;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export const Component = styled.div`
    display: flex;
    align-items: center;
  width: 100px;
  height: 40px;
  padding: 10px;
  margin: 2px;

  p {
    ${_ubutextlittle};
    text-align: center;
    width: 100%;
  }
  &.magenta{background-color: var(--si-magenta-01);}
  &.yellow{background-color: var(--si-yellow-01);}
  &.green{background-color: var(--si-mate-01);}
  &.orange{background-color: var(--si-orange-01);}
  &.pink{background-color: var(--si-pink-01);}
  &.blue{background-color: var(--si-blue-01);}
  &.bluelight{background-color: var(--si-blue-02);}
`;

export const Title = styled.h1`
    ${_ubuh2};
  margin: 10px 0;

`;
