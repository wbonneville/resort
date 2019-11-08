import React, { Component } from 'react';
import { RoomContext } from '../context';
import Loading from './Loading';
import Room from '../components/Room';
import Title from '../components/Title';
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    // destructure to get context
    // use let because loading is a boolean
    let { loading, featuredRooms: rooms } = this.context;
    // loop through the rooms array and extract each room
    // assign each room a key
    rooms = rooms.map(room => {
      // passing a room prop and assigning everything for each and every room
      return <Room key={room.id} room={room} />;
    });
    return (
      // only render gif loading if the data is loading
      <section className="featured-rooms">
        <Title title="featured room" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
