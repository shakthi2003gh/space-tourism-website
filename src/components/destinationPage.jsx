import React, { Component } from "react";
import BgImage from "./common/renderBgImage";
import obj from "../data.json";

class DestinationPage extends Component {
  state = {
    currentTab: "moon",
    tabs: [],
    data: {
      moon: {
        title: "MOON",
        description:
          "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 KM",
        time: "3 Days",
      },

      mars: {
        title: "MARS",
        description:
          "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
        distance: "225 MIL. km",
        time: "9 months",
      },

      europa: {
        title: "EUROPA",
        description:
          "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 MIL. km",
        time: "3 years",
      },
      titan: {
        title: "TITAN",
        description:
          "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 BIL. km",
        time: "7 years",
      },
    },
  };

  componentDidMount() {
    const tabs = [];
    obj["destinations"].forEach((tab) => tabs.push(tab.name));
    this.setState({ tabs });
  }

  handleClick = (e) => {
    const currentTab = e.target.innerText.toLowerCase();
    this.setState({ currentTab });
  };

  render() {
    const { currentTab, data, tabs } = this.state;

    return (
      <div className="destination container">
        <BgImage image={"destination"} />

        <div>
          <div className="heading">
            <span className="index">01</span>
            <span className="title">Pick your destination</span>
          </div>

          <img
            src={`/assets/destination/image-${currentTab}.webp`}
            className="planet"
            alt=""
          />
        </div>

        <div className="content">
          <nav>
            <ul>
              {tabs.map((tab) => (
                <li
                  key={tab}
                  className={tab.toLowerCase() === currentTab ? "active" : ""}
                  onClick={this.handleClick}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </nav>

          <h2>{data[currentTab].title}</h2>

          <p>{data[currentTab].description}</p>

          <div className="stats">
            <div className="distance">
              <span>AVG. DISTANCE</span>
              <div>{data[currentTab].distance}</div>
            </div>
            <div className="time">
              <span>Est. travel time</span>
              <div>{data[currentTab].time}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DestinationPage;
