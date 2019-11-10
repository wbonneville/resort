import React, { Component } from 'react';
import items from './data';
const RoomContext = React.createContext();

class RoomProvider extends Component {
  // rooms array = empty array
  // sorted rooms = empty array
  // featured rooms = empty array
  // loading true
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  };
  // getData

  componentDidMount() {
    // this.getData
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
    });
  }

  formatData(items) {
    // loop through items
    let tempItems = items.map(item => {
      // get item id
      let id = item.sys.id;
      // get item image
      let images = item.fields.images.map(image => image.fields.file.url);
      // room = item fields and item images and id
      let room = { ...item.fields, images: images, id };
      return room;
    });
    return tempItems;
  }

  // temp rooms = all rooms
  // get matching slug for room
  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    // selected rooms slug is found in the array of rooms
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };

  render() {
    return (
      // destructure to get all of state

      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
