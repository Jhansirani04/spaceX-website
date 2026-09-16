import Hero from "./Hero";
const Content = () => {
  const data = [
    {
      launchDate: 'MAY 22, 2026',
      heading: "Starship's Twelfth Flight Test",
      description: null,
      button: 'watch →',
      img: null,
      vdo: 'https://sxcontent9668.azureedge.us/cms-assets/assets/20260522_Starship_Flight12_web1920_v2_71d68b5ee9.mp4',
      align: 'left',
    },
    {
      launchDate: null,
      heading: 'Making life multiplanetary',
      description:
        'SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not.',
      button: 'Explore →',
      img: null,
      vdo: 'https://sxcontent9668.azureedge.us/cms-assets/assets/Mars_Rotation_Web_HB_d96299f9de.mp4',
      align: 'left',
    },
    {
      launchDate: null,
      heading: 'Revolutionizing space technology',
      description:
        'SpaceX’s Starship spacecraft and Super Heavy rocket is a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars, and beyond.',
      button: 'Learn more →',
      img: 'https://sxcontent9668.azureedge.us/cms-assets/assets/Starlink_G17_5_Vertical_Horiz_8796_Desktop_a7c0275d8a.jpg',
      vdo: null,
      align: 'right',
    },
    {
      launchDate: null,
      heading: 'World’s leading launch service provider',
      description:
        'SpaceX leads the world in launches with its reliable, reusable rockets and is developing the fully and rapidly reusable rockets necessary to transform humanity’s ability to access space into something as routine as air travel.',
      button: 'reserve your ride →',
      img: null,
      vdo: 'https://sxcontent9668.azureedge.us/cms-assets/assets/Space_X_Falcon_Heavy_UAS_Landing_DESKTOP_compress_b4568daf9c_5e2026727a.mp4',
      align: 'left',
    },
    {
      launchDate: null,
      heading: 'Advancing human spaceflight',
      description:
        'Since returning human spaceflight capabilities to the United States in 2020, SpaceX is helping build a new era where not just hundreds of people, but thousands and ultimately millions will be able to explore space.',
      button: 'join a mission →',
      img: 'https://sxcontent9668.azureedge.us/cms-assets/assets/Advancing_Human_Spaceflight_Desktop_61c8ba1c67.jpg',
      vdo: null,
      align: 'right',
    },
    {
      launchDate: null,
      heading: 'Delivering high-speed internet from space',
      description:
        'Starlink is the world’s most advanced satellite constellation in low-Earth orbit, delivering reliable broadband internet capable of supporting streaming, online gaming, video calls, and more.',
      button: 'order now →',
      img: null,
      vdo: 'https://sxcontent9668.azureedge.us/cms-assets/assets/Starlink_12_10_20250428_Deploy_website_DESKTOP_14fe7e072c.mp4',
      align: '',
    },
  ]

  return (
    <div className="card">
      {data.map((ele, index) => {
        // console.log(ele);
        // console.log(index);
        return <Hero data={ele} key={index} />;
      })}
    </div>
  );
};

export default Content;
