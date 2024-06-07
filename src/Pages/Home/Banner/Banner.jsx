import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="text-center">
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
      >
        <div>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/YTRkngj/underwater-portrait-scuba-diver-exploring-sea-world-1.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-2 text-5xl font-bold">
                Make memories 
                </h1>
                <h2 className="mb-4 text-3xl font-bold">
                on your next trip
                </h2>
                <p className="mb-5">Dive into the wonders of the Deep</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/80ZCTWr/pexels-atomlaborblog-776117-1.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
              <h1 className="mb-2 text-5xl font-bold">
                Make memories 
                </h1>
                <h2 className="mb-4 text-3xl font-bold">
                on your next trip
                </h2>
                <p className="mb-5">Experience the tranquil beauty of nature.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/ZHRtWn2/group-elephants-walking-dry-grass-wilderness-1.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
              <h1 className="mb-2 text-5xl font-bold">
                Make memories 
                </h1>
                <h2 className="mb-4 text-3xl font-bold">
                on your next trip
                </h2>
                <p className="mb-4">Embark on our Wildlife Safari adventure.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/w4VqjgX/luca-calderone-1-T97-Fa-Kvno8-unsplash-1.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
              <h1 className="mb-2 text-5xl font-bold">
                Make memories 
                </h1>
                <h2 className="mb-2 text-3xl font-bold">
                on your next trip
                </h2>
                <p className="mb-5">Embark on our Everest Exploration.</p>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
