import React, { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { isMobileDevice } from 'utils';
import {
  ContainerStyled,
  FigureCaptionStyled,
  FigureStyled,
  HeadingStyled,
  ImageWrapperStyled,
  LetterWrapperStyled,
  TechnologiesWrapperStyled,
  TechnologyStyled,
  WordWrapperStyled
} from './ProjectStyles';

const Project = ({ data }) => {
  const { title, image, technologies } = data;
  const [isVisible, setIsVisible] = useState(false);

  return (
    <ContainerStyled>
      {!isMobileDevice() ? (
        <AnimatedHeading isVisible={isVisible}>{title}</AnimatedHeading>
      ) : null}

      <FigureStyled>
        <FigureCaptionStyled>{title}</FigureCaptionStyled>

        <ImageWrapperStyled
          onHoverStart={() => setIsVisible(true)}
          onHoverEnd={() => setIsVisible(false)}
        >
          <GatsbyImage
            image={getImage(image)}
            alt={title}
            className="gatsby-image"
          />
        </ImageWrapperStyled>
      </FigureStyled>
      <Technologies technologies={technologies} />
    </ContainerStyled>
  );
};

export default Project;

const AnimatedHeading = ({ isVisible, children }) => {
  const getWords = word => word.split(' ');
  const getLetters = word => [...word];

  return (
    <HeadingStyled
      variants={variantsParent}
      initial="hidden"
      animate={isVisible ? 'visible' : ''}
    >
      {getWords(children).map(word => (
        <WordWrapperStyled key={word}>
          {getLetters(word).map((letter, i) => (
            <LetterWrapperStyled key={i} variants={variantsChild}>
              {letter}
            </LetterWrapperStyled>
          ))}
        </WordWrapperStyled>
      ))}
    </HeadingStyled>
  );
};

const Technologies = ({ technologies }) => {
  return (
    <TechnologiesWrapperStyled>
      {technologies.map((technology, i) => (
        <TechnologyStyled key={`${technology}-${i}`}>
          {technology}
        </TechnologyStyled>
      ))}
    </TechnologiesWrapperStyled>
  );
};

const variantsParent = {
  hidden: { opacity: 0, scale: 0, y: '-50%', x: '-50%' },
  visible: {
    opacity: 1,
    scale: 1,
    y: '-50%',
    x: '-50%',
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.03
    }
  }
};

const variantsChild = {
  hidden: { y: 80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
};
