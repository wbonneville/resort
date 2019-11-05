import React from 'react';

// title component recieves title prop
export default function Title({ title }) {
  return (
    <div className="section-title">
      <h4>{title}</h4>
      <div></div>
    </div>
  );
}
