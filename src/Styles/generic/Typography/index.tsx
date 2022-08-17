import { css } from 'styled-components';
import {mobile} from '../Breakpoints';

const font = {
  ubuntu:'Ubuntu'
}

const weight = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
};

const _ubu = css`
  font-family: ${font.ubuntu}, monospace;
  word-break: break-word;
`

export const _ubuh1 = css`
  ${_ubu};
  font-size: 25px;
  font-weight: ${weight.bold};
  @media ${mobile.tablet}{
    font-size: 30px;
  }
  @media ${mobile.desktop}{
      font-size: 35px;
    }
`

export const _ubuh2 = css`
  ${_ubu};
  font-size: 18px;
  font-weight: ${weight.bold};
  @media ${mobile.tablet}{
    font-size: 20px;
  }
  @media ${mobile.desktop}{
      font-size: 20px;
    }
`
export const _ubuh3 = css`
  ${_ubu};
  font-size: 16px;
  font-weight: ${weight.bold};
  @media ${mobile.tablet}{
    font-size: 16px;
  }
  @media ${mobile.desktop}{
      font-size: 16px;
    }
`
export const _ubutext = css`
  ${_ubu};
  font-size: 11px;
  @media ${mobile.tablet}{
    font-size: 16px;
  }
  @media ${mobile.desktop}{
      font-size: 18px;
    }
`

export const _ubutextlittle = css`
  ${_ubu};
  font-size: 12px;
  @media ${mobile.tablet}{
    font-size: 12px;
  }
  @media ${mobile.desktop}{
      font-size: 12px;
    }
`

export const _ubutexttiny = css`
  ${_ubu};
  font-size: 8px;
  @media ${mobile.tablet}{
    font-size: 8px;
  }
  @media ${mobile.desktop}{
      font-size: 10px;
    }
`
