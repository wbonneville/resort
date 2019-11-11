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
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };
  // getData

  componentDidMount() {
    // this.getData
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);

    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max(...rooms.map(item => item.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
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

  handleChange = event => {
    const type = event.target.type;
    const name = event.target.name;
    const value = event.target.value;
  };

  filterRooms = () => {
    console.log();
  };
  render() {
    return (
      // destructure to get all of state

      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

// higher order component takes RoomContainer (Component) as an arguement
export function withRoomConsumer(Component) {
  // pass props into the the component that is returned
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {/* set value = to context. context is technically arbitrary prop name */}
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomConsumer, RoomContext };
