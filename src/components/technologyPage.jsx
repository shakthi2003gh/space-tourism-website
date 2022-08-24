import { Component } from "react";
import BgImage from "./common/renderBgImage";

class TechnologyPage extends Component {
  state = {
    currentTechnologyIndex: 0,
    data: [
      {
        name: "LAUNCH VEHICLE",
        description:
          "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        img: "launch-vehicle",
      },
      {
        name: "SPACEPORT",
        description:
          "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
        img: "spaceport",
      },
      {
        name: "SPACE CAPSULE",
        description:
          "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        img: "space-capsule",
      },
    ],
  };

  handleClick = (e) => {
    this.setState({ currentTechnologyIndex: Number(e.target.id) });
  };

  render() {
    const { currentTechnologyIndex: index, data } = this.state;

    return (
      <div className="technology container">
        <BgImage image={"technology"} />

        <div className="heading">
          <span className="index">03</span>
          <span className="title">SPACE LAUNCH 101</span>
        </div>

        <picture className="technology-picture">
          <source
            media="(max-width: 1439px)"
            srcSet={`/assets/technology/image-${data[index].img}-landscape.jpg`}
          />

          <source
            srcSet={`/assets/technology/image-${data[index].img}-portrait.jpg`}
          />

          <img
            src={`/assets/technology/image-${data[index].img}-landscape.jpg`}
            className="technology-img"
            alt=""
          />
        </picture>

        <nav>
          <ul>
            {data.map((data, i) => (
              <li
                id={i}
                key={i}
                className={i === index ? "active" : ""}
                onClick={this.handleClick}
              >
                {i + 1}
              </li>
            ))}
          </ul>
        </nav>

        <div className="content">
          <sub>THE TERMINOLOGY…</sub>

          <h2>{data[index].name}</h2>

          <p>{data[index].description}</p>
        </div>
      </div>
    );
  }
}

export default TechnologyPage;
