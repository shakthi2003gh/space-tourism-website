import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home container">
      <picture>
        <source
          media="(max-width: 424px)"
          srcSet="/asserts/home/background-home-mobile.jpg"
        />

        <source
          media="(max-width: 1439px)"
          srcSet="/asserts/home/background-home-tablet.jpg"
        />

        <source srcSet="/asserts/home/background-home-desktop.jpg" />

        <img
          src="/asserts/home/background-home-desktop.jpg"
          className="main-bg"
          alt=""
        />
      </picture>

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
