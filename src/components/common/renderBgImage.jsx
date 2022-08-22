const BgImage = ({ image }) => {
  return (
    <picture>
      <source
        media="(max-width: 424px)"
        srcSet={`/asserts/${image}/background-${image}-mobile.jpg`}
      />

      <source
        media="(max-width: 1439px)"
        srcSet={`/asserts/${image}/background-${image}-tablet.jpg`}
      />

      <source srcSet={`/asserts/${image}/background-${image}-desktop.jpg`} />

      <img
        src={`/asserts/${image}/background-${image}-desktop.jpg`}
        className="main-bg"
        alt=""
      />
    </picture>
  );
};

export default BgImage;
