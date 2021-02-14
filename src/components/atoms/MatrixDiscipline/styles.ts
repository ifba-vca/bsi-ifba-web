import styled from 'styled-components';
import {_ubutextlittle} from '../../../Styles/generic/Typography';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width:110px;
    height: 100px;
    background-color: var(--si-background-02);
    border-radius: 10px;
  transition: .1s;
  overflow: hidden;
  margin: 5px;

  :hover{
    box-shadow: 0px 0px 10px  var(--si-text);
  }
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  padding: 5px;
`;
export const Footer = styled.div`
  display: flex;
  height: 20px;
`;
export const Name = styled.h1`
    ${_ubutextlittle};
  width: 100%;
  text-align: center;
`;
export const Type = styled.h1<{color: any}>`
    ${_ubutextlittle};
    height:100%;
    width: 80px;
  text-align: center;
  line-height: 1.5;
  background-color: ${(props) => {
  switch (props.color) {
    case "CCO":
      return "var(--si-magenta-01)";
      break;
    case "MAT":
      return "var(--si-yellow-01)";
      break;
    case "COM":
      return "var(--si-mate-01)";
      break;
    case "HUM":
      return "var(--si-orange-01)";
      break;
    case "OPT":
      return "var(--si-pink-01)";
      break;
    case "SUP":
      return "var(--si-blue-01)";
      break;
    case "TEC":
      return "var(--si-blue-02)";
      break;
    default:
      return "var(--si-blue-02)";
      break;
  }
}};
`;
export const Ch = styled.h1`
    ${_ubutextlittle};
  height: 100%;
  width: 30px;
  text-align: center;
  line-height: 1.5;
`;
