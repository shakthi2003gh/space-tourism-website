import { Link, useLocation } from "react-router-dom";
import BgImage from "./common/renderBgImage";
import { useEffect } from "react";

const Home = () => {
  return (
    <div className="home container">
      <BgImage image={"home"} />

      <div className="content">
        <sub>SO, YOU WANT TO TRAVEL TO</sub>

        <h1>SPACE</h1>

        <p>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>

      <Link to="/destinations" className="explore-btn">
        EXPLORE
      </Link>
    </div>
  );
};

export default Home;
