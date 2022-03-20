import styled from '@emotion/styled';

export const VFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextContainer = styled(VFlex)`
  height: 3em;
  // Fallback value for browsers that do not support clamp().
  font-size: 1.2em;
  font-size: clamp(1.2em, 1.6vw, 1.4em);
  justify-content: space-between;

  .title {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    line-height: 1.5em;
    padding-top: 0.1em;
    font-size: inherit;
  }

  .release-date {
    line-height: 1em;
  }
`;
