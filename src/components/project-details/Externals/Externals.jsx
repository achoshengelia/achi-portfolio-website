import React from 'react';
import { Link } from 'gatsby';
import { AnimatedLink } from 'components';
import { CenterWrapperStyled } from 'styles/utils';
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
          />
        ) : null}
        {repository ? (
          <AnimatedLink
            href={repository}
            text="View repository"
            target="_blank"
            rel="noreferrer"
          />
        ) : null}
        <AnimatedLink
          text="Next project"
          as={Link}
          to={`/projects/${slugify(nextProject)}`}
          $arrowPosition="right"
        />
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Externals;
