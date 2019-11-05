import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
  // set state = to services array
  // services array populated with objects
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktails',
        info:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eveniet!',
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eveniet!',
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free Shuttle',
        info:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eveniet!',
      },
      {
        icon: <FaBeer />,
        title: 'Strongest beer',
        info:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eveniet!',
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
        <div className=" services-center">
          {/* map through services and assign each object as item */}
          {this.state.services.map((item, index) => {
            return (
              // each item has an index
              <article key={index} className="service">
                {/* accessing each item */}
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
