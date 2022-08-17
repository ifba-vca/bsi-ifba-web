import styled from 'styled-components';
import { _ubutextlittle,_ubutexttiny } from '../../../Styles/generic/Typography';

export const Container = styled.a<{ yellow: any, isrequiredcall: any }>`
  cursor: pointer;
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
  ${(props)=> props.isrequiredcall ? "box-shadow: 0px 0px 10px  var(--si-background-04);" : ""}

  :hover{
    box-shadow:${(props) => props.yellow ? "0px 0px 10px  var(--si-background-04)" : "0px 0px 10px  var(--si-text)"};
  }
`;

export const Requirements = styled.span`
  ${_ubutexttiny};
  display: flex;
  align-items: center;
  justify-content: center;
  height:20px;
  width: 100%;
  background-color: var(--si-background-04);

`;
export const Extra = styled.div`
  span ~ & span {
    height: 50px;
  }
  span {
    height: 70px;
  }
`;

export const Header = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
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
export const Type = styled.h1<{ color: any }>`
    ${_ubutextlittle};
    height:100%;
    width: 80px;
  text-align: center;
  line-height: 1.5;
  background-color: ${(props) => {
    switch (props.color) {
      case "CCO":
        return "var(--si-magenta-01)";
      case "MAT":
        return "var(--si-yellow-01)";
      case "COM":
        return "var(--si-mate-01)";
      case "HUM":
        return "var(--si-orange-01)";
      case "OPT":
        return "var(--si-pink-01)";
      case "SUP":
        return "var(--si-blue-01)";
      case "TEC":
        return "var(--si-blue-02)";
      default:
        return "var(--si-blue-02)";
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
