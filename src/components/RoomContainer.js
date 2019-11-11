import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';

export default function RoomContainer() {
  return (
    <div>
      Hello from room container
      <RoomFilter />
      <RoomList />
    </div>
  );
}
