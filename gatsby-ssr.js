import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { GlobalContextProvider, Theme } from 'providers';
import { Layout } from 'components';

export const wrapPageElement = ({ element, props }) => {
  const isDarkBackground = Boolean(props.params.title);

  return (
    <Layout isDarkBackground={isDarkBackground} {...props}>
      <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
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

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([<div key="menu" id="menu" />]);
};
