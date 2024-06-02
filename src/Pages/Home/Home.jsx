import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import TravelGuideHome from "./TravelGuideHome/TravelGuideHome";


const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Shadow Tourist || Home</title>
      </Helmet>
            <Banner></Banner>
            <TravelGuideHome></TravelGuideHome>
        </div>
    );
};

export default Home;