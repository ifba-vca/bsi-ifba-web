import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.nav`
    min-width: 200px;
    display: flex;
    justify-content: space-around;
    &>*{
        margin: 0 5px;
    }
`

export const Page = styled(Link)``;

export const Icon = styled.i`
    color: var(--si-text1);
`;