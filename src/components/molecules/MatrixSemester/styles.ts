import styled from 'styled-components';

export const Container = styled.div`
    width:120px;
    min-height: 830px;
  margin: 1px;
    display:flex;
  border: solid var(--si-background-02) 1px;
  border-radius: 10px;
  flex-direction: column;
  overflow: hidden;
  flex-wrap: wrap;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  background-color: var(--si-background-02);
`;
export const Title = styled.p`
`;
