import { Helmet } from "react-helmet-async";

const Community = () => {
  return (
    <div>
      <Helmet>
        <title>Shadow Tourist || Community</title>
      </Helmet>
      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://i.ibb.co/7pty44N/luca-calderone-fwva-S5tq69g-unsplash-1.jpg"
          alt="Hero Image"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-center text-4xl lg:text-6xl font-bold">
            Welcome to Our Community
          </h1>
        </div>
      </div>






      <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Community Connection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Community Forums */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Community Forums</h3>
            <p className="text-gray-700">
              Engage with fellow travelers, share your experiences, and glean insights from seasoned adventurers in our community forums. Whether you are seeking travel tips, destination recommendations, or simply want to connect with others who share your passion for exploration, our forums are the perfect place to start.
            </p>
          </div>
          {/* Travel Stories */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Travel Stories</h3>
            <p className="text-gray-700">
              Browse through inspiring travel stories contributed by members of our community, offering firsthand accounts of their adventures around the globe. From thrilling safari encounters to tranquil beach getaways, these stories provide a window into the diverse experiences awaiting you on your next journey.
            </p>
          </div>
          {/* Meetups and Events */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Meetups and Events</h3>
            <p className="text-gray-700">
              Join us for meetups and events where you can connect with fellow travelers in person and forge new friendships. From group hikes and cultural outings to photography workshops and volunteer opportunities, our events calendar is filled with exciting opportunities to explore, learn, and grow together.
            </p>
          </div>
          {/* Community Outreach */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Community Outreach</h3>
            <p className="text-gray-700">
              At Shadow Tourist, we are committed to giving back to the communities we visit. Learn more about our community outreach initiatives, including sustainable tourism practices, conservation efforts, and partnerships with local organizations. Get involved and make a positive impact on the places you visit.
            </p>
          </div>
          {/* Share Your Experience */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Share Your Experience</h3>
            <p className="text-gray-700">
              Have a travel story, tip, or photo you like to share? We invite you to contribute to our community section and inspire others with your adventures. Whether it is a hidden gem you discovered on your travels or a heartwarming encounter with locals, your contributions help enrich the collective experience of our community.
            </p>
          </div>
          {/* Another Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Review Section</h3>
            <p className="text-gray-700">
              Here you can add review about guide, such as tips and tricks, member spotlights, or travel recommendations. Feel free to customize the content to suit the needs and interests of your community.
            </p>
          </div>
        </div>
      </div>
    </div>









    </div>
  );
};

export default Community;
