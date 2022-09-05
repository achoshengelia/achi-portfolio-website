import React from 'react';
import { Theme } from 'providers';
import { Layout } from 'components';

export const wrapPageElement = ({ element, props }) => {
  const isDarkBackground = Boolean(props.params.title);

  return (
    <Layout {...props} isDarkBackground={isDarkBackground}>
      {element}
    </Layout>
  );
};

export const wrapRootElement = ({ element }) => {
  return <Theme>{element}</Theme>;
};

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([<div key="menu" id="menu" />]);
};
