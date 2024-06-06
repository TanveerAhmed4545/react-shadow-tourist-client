import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import TravelGuideHome from "./TravelGuideHome/TravelGuideHome";
import TourTypeSection from "./TourTypeSection/TourTypeSection";
import OurStory from "./OurStory/OurStory";


const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Shadow Tourist || Home</title>
      </Helmet>
            <Banner></Banner>
            <TravelGuideHome></TravelGuideHome>
            <TourTypeSection></TourTypeSection>
            <OurStory></OurStory>
        </div>
    );
};

export default Home;