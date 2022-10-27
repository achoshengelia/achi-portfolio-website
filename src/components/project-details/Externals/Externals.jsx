import React from 'react';
import { AnimatedLink } from 'components';
import { CenterWrapperStyled, OverlayStyled } from 'styles/utils';
import { slugify } from 'utils';
import { ContainerStyled } from './ExternalsStyles';

const Externals = ({ externals }) => {
  const { website, repository, nextProject } = externals;

  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        {website ? (
          <AnimatedLink
            href={website}
            text="View website"
            target="_blank"
            rel="noreferrer"
            isExternalLink
          />
        ) : null}
        {repository ? (
          <AnimatedLink
            href={repository}
            text="View repository"
            target="_blank"
            rel="noreferrer"
            isExternalLink
          />
        ) : null}
        <AnimatedLink
          text="Next project"
          to={`/projects/${slugify(nextProject)}`}
          $arrowPosition="right"
        />
        <AnimatedLink text="Back home" to="/" $arrowPosition="left" />
      </CenterWrapperStyled>
      <OverlayStyled $isLeft />
    </ContainerStyled>
  );
};

export default Externals;
