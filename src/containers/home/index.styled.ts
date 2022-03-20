import styled from '@emotion/styled';
import { Breakpoints } from 'helpers/general/constants';

export const HeaderDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 0 1em;
  margin-bottom: 1.2em;
  border-bottom: 1px solid black;
  justify-content: space-between;

  @media (max-width: ${Breakpoints.MOBILE}px) {
    h2 {
      font-size: 1.2em;
      margin-bottom: 1em;
    }
  }
`;
