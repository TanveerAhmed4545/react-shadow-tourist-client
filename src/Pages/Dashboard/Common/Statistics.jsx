import { Helmet } from "react-helmet-async";


const Statistics = () => {
    return (
        <div className="">
        <Helmet>
        <title>Shadow Tourist || Dashboard Home</title>
      </Helmet>
<div className="flex flex-col justify-center items-center min-h-[80vh]">
<h1 className="text-2xl font-bold mb-4 text-center">Welcome to the Dashboard</h1>
<p className="text-center">Your personalized dashboard to manage tours and bookings.</p>
</div>
        </div>
    );
};

export default Statistics;