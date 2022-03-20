import styled from '@emotion/styled';

export const PosterDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 400px;

  .inner-container {
    position: relative;

    img {
      object-fit: cover;
      height: 100%;
    }
  }
`;

export const ImageContainer = styled.div`
    position: relative;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
  }
`;

export const RatingBadge = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.9em;
  height: 1.8em;
  top: 0.6em;
  right: 0.6em;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  background-color: black;
  border-radius: 0.2em;
`;
