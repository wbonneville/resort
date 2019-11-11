import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import { withRoomConsumer } from '../context';
import Loading from './Loading';

function RoomContainer({ context }) {
  // get props out of context/value
  const { loading, sortedRooms, rooms } = context;
  // if data is loading, render loading component
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {/* set RoomFilter rooms prop = to rooms */}
      <RoomFilter rooms={rooms} />
      {/* set RoomList rooms prop = to sortedRooms */}
      <RoomList rooms={sortedRooms} />
    </>
  );
}

// pass RoomContainer component into withRoomConsumer
export default withRoomConsumer(RoomContainer);

// import React from 'react';
// import RoomFilter from './RoomFilter';
// import RoomList from './RoomList';
// import { RoomConsumer } from '../context';
// import Loading from './Loading';

// export default function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {value => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             Hello from room container
//             <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
