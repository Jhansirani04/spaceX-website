import "./Hero.css"
const Hero = ({ data }) => {
  const {
    launchDate,
    heading,
    description,
    button,
    img,
    vdo,
    align
  } = data;

  return (
    <section className="hero">

      {img && (
        <img
          className="hero-media"
          src={img}
          alt={heading}
        />
      )}

      {vdo && (
        <video
          className="hero-media"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={vdo} />
        </video>
      )}

      <div className={`hero-content ${
        data.align==="right"?"hero-content-right":"hero-content-left"}`}>
        {launchDate && <span>{launchDate}</span>}
        {heading && <h1>{heading}</h1>}
        {description && <p>{description}</p>}
        {button && <button>{button} <i class="fa-solid fa-arrow-right"></i></button>}
      </div>

    </section>
  );
};

export default Hero;