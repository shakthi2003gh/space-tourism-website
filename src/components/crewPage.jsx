import { Component } from "react";
import BgImage from "./common/renderBgImage";

class CrewPage extends Component {
  state = {
    currentCrewIndex: 0,
    data: [
      {
        name: "Douglas Hurley",
        role: "Commander",
        description:
          "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        img: "douglas-hurley",
      },
      {
        name: "MARK SHUTTLEWORTH",
        role: "Mission Specialist ",
        description:
          "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        img: "mark-shuttleworth",
      },
      {
        name: "Victor Glover",
        role: "PILOT",
        description:
          "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
        img: "victor-glover",
      },
      {
        name: "Anousheh Ansari",
        role: "Flight Engineer",
        description:
          "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
        img: "anousheh-ansari",
      },
    ],
  };

  handleClick = (e) => {
    this.setState({ currentCrewIndex: Number(e.target.id) });
  };

  render() {
    const { data, currentCrewIndex: index } = this.state;

    return (
      <div className="crew container">
        <BgImage image={"crew"} />

        <div className="heading">
          <span className="index">02</span>
          <span className="title">Meet your crew</span>
        </div>

        <div className="crew-image">
          <picture>
            <source
              media="(max-width: 424px)"
              srcSet={`/asserts/crew/image-${data[index].img}.webp`}
            />
            <source srcSet={`/asserts/crew/image-${data[index].img}.png`} />
            <img
              src={`/asserts/crew/image-${data[index].img}.webp`}
              className="crew-img"
              alt=""
            />
          </picture>
        </div>

        <nav>
          <ul>
            {data.map((data, i) => (
              <li
                id={i}
                key={i}
                className={i === index ? "active" : ""}
                onClick={this.handleClick}
              ></li>
            ))}
          </ul>
        </nav>

        <div className="content">
          <sub>{data[index].role}</sub>

          <h2>{data[index].name}</h2>

          <p>{data[index].description}</p>
        </div>
      </div>
    );
  }
}

export default CrewPage;
