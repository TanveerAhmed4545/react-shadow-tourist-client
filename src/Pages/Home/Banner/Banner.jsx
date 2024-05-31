import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="text-center">
      <Carousel
        showStatus={false}
        showThumbs={true}
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
                <h1 className="mb-5 text-5xl font-bold">
                  The Ultimate Comfort
                </h1>
                <p className="mb-5"> business.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/7pty44N/luca-calderone-fwva-S5tq69g-unsplash-1.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  The Ultimate Comfort
                </h1>
                <p className="mb-5"> business.</p>
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
                <h1 className="mb-5 text-5xl font-bold">
                  The Ultimate Comfort
                </h1>
                <p className="mb-5">business.</p>
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
                <h1 className="mb-5 text-5xl font-bold">
                  The Ultimate Comfort
                </h1>
                <p className="mb-5"> business.</p>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
