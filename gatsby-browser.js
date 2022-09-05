import React from 'react';
import { GlobalContextProvider, Theme } from 'providers';
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
  return (
    <GlobalContextProvider>
      <Theme>{element}</Theme>
    </GlobalContextProvider>
  );
};
