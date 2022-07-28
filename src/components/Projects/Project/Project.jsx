import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import img1 from 'assets/images/projects/zueinander-1.png';
import img2 from 'assets/images/projects/zueinander-2.png';
import img3 from 'assets/images/projects/zueinander-3.png';
import img4 from 'assets/images/projects/zueinander-4.png';
import {
  ContainerStyled,
  DescriptionStyled,
  ProjectNameStyled,
  InfoWrapperStyled,
  StackListStyled,
  StackItemStyled
} from './ProjectStyles';
import { TextGradientStyled } from 'styles/typography';

const projects = {
  infos: [
    {
      name: 'Zueinander Finden',
      description:
        ' Built using Next, Nest & PostgreSQL. A website for the exhibition/event series about mental health awareness in South Tyrol. My first project in React where I worked on the frontend part. Having only worked with vanilla JavaScript before, this project helped me to understand the true power of React and declarative programming.',
      stack: ['node', 'react', 'next', 'gatsby']
    },
    {
      name: 'Annika Terwey',
      description:
        'A portfolio website, built for an art communications graduate. The website demonstrates numerous projects the client participated in and/or organised, with various interactive effects for desktop and mobile versions. The whole architec- ture was planned and executed by me.',
      stack: ['Rganga', 'react', 'next', 'gatsby']
    }
  ],
  media: [
    {
      name: 'Zueinander Finden',
      images: [img1, img2, img3, img4]
    },
    {
      name: 'Annika Terwey',
      images: [img1, img2, img3, img4]
    }
  ]
};

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const vuala = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Project = () => {
  const [index, setIndex] = useState(0);

  const isFirstItem = i => i === 0;
  const isLastItem = i => i === 3;
  const isScrollingDown = data => data.boundingClientRect.top < 0;

  const handleViewportLeave = data => {
    if (isScrollingDown(data) && !isLastItem(index)) {
      setIndex(index + 1);
    }

    if (!isFirstItem(index)) {
      setIndex(index - 1);
    }
  };

  return (
    <ContainerStyled>
      {projects.infos.map((project, i) =>
        index === i ? <Info project={project} /> : null
      )}
      <Div>
        {projects.media.map(data => (
          <Media {...data} handleViewportLeave={handleViewportLeave} />
        ))}
      </Div>
    </ContainerStyled>
  );
};

export default Project;

const Info = ({ project }) => {
  // const [animate, setAnimate] = useState(false);

  // console.log(animate);

  return (
    <InfoWrapperStyled
      initial={{ opacity: 0, y: 0, scale: 0 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
    >
      <ProjectNameStyled>{project.name}</ProjectNameStyled>
      <DescriptionStyled>{project.description}</DescriptionStyled>

      <StackWrapperStyled>
        <StackStyled
        // onHoverStart={() => setAnimate(true)}
        // onHoverEnd={() => setAnimate(false)}
        >
          Technologies:
        </StackStyled>
        <StackListStyled
          variants={container}
          initial="hidden"
          whileInView="visible"
          // animate={animate ? 'visible' : ''}
        >
          {project.stack.map((item, i) => (
            <StackItemStyled key={item} variants={vuala} index={i}>
              {item}
            </StackItemStyled>
          ))}
        </StackListStyled>
      </StackWrapperStyled>
    </InfoWrapperStyled>
  );
};

const Media = ({ images, handleViewportLeave }) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end']
  });
  const ref = useRef(null);
  const translateY = useTransform(scrollYProgress, [0, 1], [100, 1]);
  // const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  return (
    <MediaWrapper ref={ref} onViewportLeave={e => handleViewportLeave(e)}>
      {images.map((image, i) => (
        <motion.img src={image} alt="" style={{ translateY }} />
      ))}
    </MediaWrapper>
  );
};

const StackStyled = styled(motion.span)`
  transition: transform 0.1s ease;
  margin-right: 2rem;
`;

const StackWrapperStyled = styled.div`
  display: flex;
  margin-top: 3rem;
  /* justify-content: center; */
  align-items: center;
  /* flex-direction: column; */
  /* position: relative; */
`;

const MediaWrapper = styled(motion.div)`
  max-width: 100rem;
  display: grid;
  place-content: center;
  grid-template-columns: repeat(2, 1fr);
`;

const Div = styled.div`
  & > * + * {
    margin-top: 50rem;
  }
`;
