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
  color: var(--si-dark);
`

export const _ubuh1 = css`
  ${_ubu};
  font-size: 18px;
  font-weight: ${weight.bold};
  @media ${mobile.tablet}{
    font-size: 20px;
  }
  @media ${mobile.desktop}{
      font-size: 25px;
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