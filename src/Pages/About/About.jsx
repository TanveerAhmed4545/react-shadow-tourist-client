const About = () => {
  return (
    <div className=" mb-5 lg:mb-10">
      <div className="mb-5 lg:mb-10">
        <div
          className="hero  "
          style={{
            backgroundImage:
              "url(https://i.ibb.co/w4VqjgX/luca-calderone-1-T97-Fa-Kvno8-unsplash-1.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60  "></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-lg py-24">
              <h1 className="mb-5 text-5xl font-bold">About Us</h1>
              <p className="mb-5">
                Welcome to Shadow Tourist, your guide to coastal escapes.
                Discover handpicked havens for serene moments by the sea.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Philosophy Section */}
      <div className="container mx-auto px-5 lg:px-20 py-10  ">
        <h2 className="text-center mb-8 font-bold text-4xl ">OUR PHILOSOPHY</h2>
        <p className="font-medium text-lg  text-center leading-relaxed">
          At Shadow Tourist, we believe in the beauty of diversity, much like
          the myriad of literary tastes that enrich our lives. Just as different
          readers are drawn to various genres, travelers have their unique
          preferences when it comes to exploring the world. Some seek the ease
          and efficiency of digital bookings, while others yearn for the
          tangible experience and charm of physical spaces.
          <br />
          <br />
          For those who find solace in the intricate details of interior design,
          the aroma of freshly laundered linens, and the embrace of plush
          furnishings, Shadow Tourist offers a sanctuary. We understand that our
          patrons are not merely travelers but connoisseurs of hospitality. They
          value not only the accommodation itself but the entire tapestry of
          experiences woven into their stay.
          <br />
          <br />
          Our guests are aficionados of artistry, appreciating the thoughtfully
          curated spaces, the warmth of personalized service, and the allure of
          distinctive amenities. Much like book enthusiasts who meticulously
          curate their collections, our travelers treasure their journey,
          relishing every moment and crafting cherished memories along the way.
          <br />
          <br />
          Travel, for us, is not merely about reaching a destination but
          immersing oneself in the essence of the journey. It is about embracing
          new encounters, forging meaningful connections, and savoring the
          kaleidoscope of experiences that unfold along the way. At Shadow
          Tourist, we are dedicated to serving these discerning adventurers.
          <br />
          <br />
          Whether our guests seek the serenity of a secluded retreat, the
          vibrancy of an urban exploration, or the enchantment of a coastal
          escape, we endeavor to surpass their expectations. We strive to curate
          exceptional accommodations and deliver personalized service that
          resonates with their individual preferences and desires.
          <br />
          <br />
          Our mission is to create moments of joy, wonder, and inspiration that
          linger in the hearts of our guests long after they bid farewell to our
          shores. Join us at Shadow Tourist, where every journey is an odyssey
          and every stay is a chapter in the story of exploration.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-5 lg:px-20 py-10 ">
        <h2 className="text-center mb-8 font-bold text-4xl ">OUR STORY</h2>
        <p className="font-medium text-lg  text-center leading-relaxed">
        Shadow Tourist was born from a vision to create havens of tranquility where travelers could immerse themselves in the beauty of coastal landscapes. Our founders, driven by a love for hospitality and the allure of natural surroundings, set out to craft destinations where guests could escape the chaos of daily life and reconnect with the serenity of nature. Today, we are delighted to offer a curated selection of retreats that embody our dedication to exceptional experiences.
        </p>
      </div>

      {/* Meet the Team Section */}
      <div className="container mx-auto px-5 lg:px-20 py-10 ">
        <h2 className="text-center mb-8 font-bold text-4xl ">MEET THE TEAM</h2>
        <div className="flex flex-wrap justify-center items-center">
          {[
            {
              name: "John Doe",
              role: "Founder & CEO",
              image: "https://i.ibb.co/4wk0Nqn/agent-male-2.jpg",
            },
            {
              name: "Jane Smith",
              role: "Head of Hospitality",
              image: "https://i.ibb.co/2shZGfH/agent-female-7-1-300x300.jpg",
            },
            {
              name: "Michael Johnson",
              role: "Marketing Director",
              image: "https://i.ibb.co/2KFVj5C/agent-male-1-1-300x300.jpg",
            },
          ].map((member, index) => (
            <div key={index} className="p-4">
              <div className="max-w-xs mx-auto bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-xl hover:scale-105">
                <img
                  className="w-full h-64 object-cover"
                  src={member.image}
                  alt={member.name}
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-gray-700">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
