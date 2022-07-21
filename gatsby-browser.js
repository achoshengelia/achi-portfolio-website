import React from 'react';
import { Theme } from 'providers';

export const wrapRootElement = ({ element }) => {
  return <Theme>{element}</Theme>;
};
