import React from 'react';

// Hero accepts children
// Banner is child
export default function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}

Hero.defaultProps = {
  hero: 'defaultHero',
};
