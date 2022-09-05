import React from 'react';
import { AnimatedImage } from 'components';
import { CenterWrapperStyled } from 'styles/utils';
import { chunk } from 'utils';
import { ContainerStyled, GridWrapperStyled } from './GalleryStyles';

const Gallery = ({ gallery }) => {
  const chunks = chunk(gallery, 4);

  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        {chunks.map((chunk, i) => (
          <GridWrapperStyled key={i} isSecondLayout={i === 1}>
            {chunk.map(({ id, src, alt }, i) => (
              <AnimatedImage key={`${id}-${i}`} data={{ src, alt }} />
            ))}
          </GridWrapperStyled>
        ))}
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Gallery;
