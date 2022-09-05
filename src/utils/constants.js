export const isBrowser = typeof window !== 'undefined';

export const isHomePage = isBrowser && window.location.pathname === '/';
