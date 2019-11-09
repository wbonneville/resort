import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  // set static context
  static contextType = RoomContext;
  render() {
    // get room
    const { getRoom } = this.context;

    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>No such room could be found</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }

    // destructure to get props out of room
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    return (
      // use images[0] if available, or use default img
      <StyledHero img={images[0] || this.state.defaultBcg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
    );
  }
}
