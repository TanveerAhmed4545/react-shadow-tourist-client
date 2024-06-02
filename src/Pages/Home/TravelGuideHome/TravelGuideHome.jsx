import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import usePackage from '../../../hooks/usePackage';
import OurPackages from '../OurPackages/OurPackages';

const TravelGuideHome = () => {
    const [packages] = usePackage();
    console.log(packages);
    return (
        <div className='my-10'>
            <Tabs className={''}>
            <TabList className="flex justify-center  space-x-4 mb-6">
          <Tab className="p-2 border-b-2 border-transparent outline-none cursor-pointer hover:border-blue-500">Overview</Tab>
          <Tab className="p-2 border-b-2 border-transparent outline-none cursor-pointer hover:border-blue-500">Our Packages</Tab>
          <Tab className="p-2 border-b-2 border-transparent outline-none cursor-pointer hover:border-blue-500">Meet Our Tour Guides</Tab>
        </TabList>

    <TabPanel>
    <div className="overview text-center mx-auto px-4" style={{ maxWidth: '800px' }}>
                        <h2 className=" text-2xl lg:text-4xl font-extrabold mb-4">Welcome to  Shadow Tourist</h2>
                        <p className="mb-4 w-full mx-auto lg:w-9/12">Explore the world with our exclusive travel packages. Watch the video below to get a glimpse of the amazing experiences we offer.</p>
                        <div className="mx-auto mb-6">
                            <iframe
                                className="w-full"
                                height="400"
                                src="https://www.youtube.com/embed/lepdqiCF-W8"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Travel Guide Video"
                            ></iframe>
                        </div>
                    </div>
    </TabPanel>
    <TabPanel>
      <OurPackages></OurPackages>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default TravelGuideHome;