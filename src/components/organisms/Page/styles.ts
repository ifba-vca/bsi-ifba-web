import styled from 'styled-components';
import { mobile } from "../../../Styles/generic/Breakpoints";

export const Container = styled.div`
    @media ${mobile.tablet} {
        padding-top: 70px;
    }
`;