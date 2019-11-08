import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';
import PropTypes from 'prop-types';

// get room prop
export default function Room({ room }) {
  // destructuring to get props from room
  const { name, slug, images, price } = room;
  return (
    <article className="room">
      <div className="img-container">
        {/* use image[0] or if it is not available, default to default img */}
        <img src={images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        {/* link to slug (default parameter) */}
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          {' '}
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
