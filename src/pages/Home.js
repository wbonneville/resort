import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Hero>
      {/* add props */}
      <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
        <Link to="/rooms" className="btn-primary" />
      </Banner>
    </Hero>
  );
}
