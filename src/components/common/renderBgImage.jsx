const BgImage = ({ image }) => {
  return (
    <picture>
      <source
        media="(max-width: 424px)"
        srcSet={`/assets/${image}/background-${image}-mobile.jpg`}
      />

      <source
        media="(max-width: 1439px)"
        srcSet={`/assets/${image}/background-${image}-tablet.jpg`}
      />

      <source srcSet={`/assets/${image}/background-${image}-desktop.jpg`} />

      <img
        src={`/assets/${image}/background-${image}-desktop.jpg`}
        className="main-bg"
        alt=""
      />
    </picture>
  );
};

export default BgImage;
