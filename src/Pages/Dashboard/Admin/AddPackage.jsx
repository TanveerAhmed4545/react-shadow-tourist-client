import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";


const AddPackage = () => {
  
  const axiosSecure = useAxiosSecure();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        
        const tripTitle = formData.get('tripTitle');
        const tourType = formData.get('tourType');
        const price = formData.get('price');
        const description = formData.get('description');
        const wishlist = false;
        const images = [
            formData.get('image1'),
            formData.get('image2'),
            formData.get('image3')
        ];
        const tourPlan = [
            { day: formData.get('day1'), activities: formData.get('activities1') },
            { day: formData.get('day2'), activities: formData.get('activities2') },
            { day: formData.get('day3'), activities: formData.get('activities3') },
            { day: formData.get('day4'), activities: formData.get('activities4') }
          
        ];

        
        
        
        const packageItems = {
            tripTitle,
            tourType,
            price: parseFloat(price),
            description,
            wishlist,
            images,
            tourPlan
        }
        console.table(packageItems);

        const packRes = await axiosSecure.post('/package',packageItems)
        console.log(packRes.data);
        if(packRes.data.insertedId){
            // show success popup
           
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Package Added to Database",
                showConfirmButton: false,
                timer: 1500
              });
              form.reset();
        }
       
       
    };
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
          <Helmet>
        <title>Shadow Tourist || Add Package</title>
      </Helmet>
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Add Package</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg  mx-auto">
          <h2 className="text-2xl font-bold mb-4">Add New Package</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Trip Title</label>
              <input 
                type="text" 
                name="tripTitle" 
                required 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Tour Type</label>
              <select
                name="tourType"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              >
                <option value="">Select Tour Type</option>
                <option value="Scuba Diving Adventure">Scuba Diving Adventure</option>
                <option value="Volcano Expedition">Volcano Expedition</option>
                <option value="Forest Camping">Forest Camping</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Price</label>
              <input 
                type="number" 
                name="price" 
                required 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Description</label>
              <textarea 
                name="description" 
                required 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              ></textarea>
            </div>
            <div className="mb-4">
          
         
          <input 
            type="text" 
            name="image1" 
            required 
            placeholder="Image URL 1"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" 
          />
          <input 
            type="text" 
            name="image2" 
            required 
            placeholder="Image URL 2"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:border-indigo-500" 
          />
          <input 
            type="text" 
            name="image3" 
            required 
            placeholder="Image URL 3"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:border-indigo-500" 
          />
        </div>
            <div className="mb-4">
              <label className="block text-gray-700">Tour Plan</label>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <input 
                    type="number" 
                    name="day1" 
                    placeholder="Day 1" 
                    required 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" 
                  />
                  <input 
                    type="text" 
                    name="activities1" 
                    placeholder="Activities" 
                    required 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:border-indigo-500" 
                  />
                </div>
                <div>
                  <input 
                    type="number" 
                    name="day2" 
                    placeholder="Day 2" 
                    required 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" 
                  />
                  <input 
                    type="text" 
                    name="activities2" 
                    placeholder="Activities" 
                    required 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:border-indigo-500" 
                  />
                </div>
                <div>
                  <input 
                    type="number" 
                    name="day3" 
                    placeholder="Day 3" 
                    required 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" 
                  />
                  <input 
                    type="text" 
                    name="activities3" 
                    placeholder="Activities" 
                    required 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:border-indigo-500" 
                  />
                </div>
                <div>
                  <input 
                    type="number" 
                    name="day4" 
                    placeholder="Day 4" 
                    required 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" 
                  />
                  <input 
                    type="text" 
                    name="activities4" 
                    placeholder="Activities" 
                    required 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:border-indigo-500" 
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <button 
                type="submit" 
                className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition duration-300"
              >
                Add Package
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default AddPackage;