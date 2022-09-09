import { isBrowser } from 'utils';
import { navigate } from 'gatsby';

export const customMediaQuery = pixels =>
  `@media only screen and (max-width: ${pixels / 16}em)`;

export const chunk = (array, size) => {
  return array.reduce((chunks, item, i) => {
    if (i % size === 0) {
      chunks.push([item]);
    } else {
      chunks[chunks.length - 1].push(item);
    }
    return chunks;
  }, []);
};

export const isMobileDevice = () => {
  if (
    isBrowser &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  }
  return false;
};

export const slugify = str =>
  str
    .toLowerCase()
    .trim()
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const isExternalLink = url => {
  if (isBrowser) {
    const tmp = document.createElement('a');
    tmp.href = url;
    return tmp.host !== window.location.host;
  }
};

export const isHomePage = () => isBrowser && window.location.pathname === '/';

export const scrollTo = id => {
  if (isBrowser) {
    const element = document.getElementById(id);
    const headerOffset = 100;
    const elementPosition = element?.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const handleNavigate = props => e => {
  e.preventDefault();
  const { isScrollTop, pathname, url, setTransitionPage } = props;

  // scroll top
  if (
    (isBrowser && isScrollTop) ||
    url === '#' ||
    (pathname === '/' && url === '/')
  ) {
    return window.scrollTo(0, 0);
  }
  // scroll to id from main page
  if (pathname === '/' && url.includes('#')) {
    const id = url.split('#')[1];

    return scrollTo(id);
  }

  setTransitionPage(true);
  setTimeout(() => {
    setTransitionPage(false);

    if (url.includes('#')) {
      const id = url.split('#')[1];
      navigate(`/${url}`);

      return setTimeout(() => {
        scrollTo(id);
      }, 400);
    }
    navigate(url);
  }, 2500);
};
