import React from 'react';
import { graphql } from 'gatsby';
import { slugify } from 'utils';
import {
  Challenge,
  Cover,
  Externals,
  Gallery,
  Info,
  Seo,
  Video
} from 'components';

const ProjectTemplate = props => {
  const { projectsJson } = props.data;
  const { details, technologies, title } = projectsJson;
  const { info, cover, challenge, externals, gallery, video } = details;
  const infoProps = { info, technologies, title };

  return (
    <>
      <Info {...infoProps} />
      <Cover cover={cover} />
      <Challenge text={challenge} />
      <Gallery gallery={gallery} />
      <Video video={video} />
      <Externals externals={externals} />
    </>
  );
};

export const query = graphql`
  query ($title: String) {
    projectsJson(title: { eq: $title }) {
      title
      technologies
      details {
        info {
          appType
          date
          description
        }
        cover {
          bgColor
          src {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, quality: 100)
            }
          }
        }
        challenge
        gallery {
          alt
          src {
            childImageSharp {
              id
              gatsbyImageData(layout: FULL_WIDTH, quality: 100)
            }
          }
        }
        video {
          publicURL
        }
        externals {
          website
          repository
          nextProject
        }
      }
    }
  }
`;

export default ProjectTemplate;

export const Head = ({ data }) => {
  const { projectsJson } = data;
  const description = projectsJson.details.info.description.join(' ');

  return (
    <Seo
      title={projectsJson.title}
      description={description}
      pathname={`projects/${slugify(projectsJson.title)}`}
    />
  );
};
