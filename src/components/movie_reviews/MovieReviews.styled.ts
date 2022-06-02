import styled from '@emotion/styled';

export const ScrollableTextDiv = styled.div`
  overflow: auto;
  max-height: 160px;
  padding-right: 0.8em;

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
