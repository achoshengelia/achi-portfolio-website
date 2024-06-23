import React, { useContext, useState } from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { GlobalContext } from 'providers';
import { Technologies } from 'components';
import { isMobileDevice, slugify } from 'utils';
import {
  ContainerStyled,
  FigureCaptionStyled,
  FigureStyled,
  HeadingStyled,
  ImageWrapperStyled,
  LetterWrapperStyled,
  WordWrapperStyled
} from './ProjectStyles';

const Project = ({ data }) => {
  const { title, image, technologies } = data;
  const [isVisible, setIsVisible] = useState(false);
  const { handleNavigate } = useContext(GlobalContext);

  return (
    <ContainerStyled
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.6 } }}
      viewport={{ once: true }}
    >
      {!isMobileDevice() ? (
        <AnimatedHeading isVisible={isVisible}>{title}</AnimatedHeading>
      ) : null}

      <FigureStyled>
        <FigureCaptionStyled>{title}</FigureCaptionStyled>

        <Link
          onClick={handleNavigate({
            url: `projects/${slugify(title)}`
          })}
          to={`projects/${slugify(title)}`}
        >
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
        </Link>
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

const variantsParent = {
  hidden: { opacity: 0, scale: 0, y: '-50%', x: '-50%' },
  visible: {
    opacity: 1,
    scale: 1,
    y: '-50%',
    x: '-50%',
    transition: {
      duration: 0.01,
      delayChildren: 0.05,
      staggerChildren: 0.04
    }
  }
};

const variantsChild = {
  hidden: { y: 80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.05
    }
  }
};
