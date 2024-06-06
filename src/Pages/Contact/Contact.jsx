import { Helmet } from "react-helmet-async";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";


const Contact = () => {
    return (
        <div className=" mb-5 lg:mb-9">
                <Helmet>
        <title>Shadow Tourist || Contact Us</title>
      </Helmet>
            {/* Hero Section */}
            <div className="relative">
                <img src="https://i.ibb.co/7pty44N/luca-calderone-fwva-S5tq69g-unsplash-1.jpg" alt="Hero Image" className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h1 className="text-white text-center text-4xl lg:text-6xl font-bold">Welcome to Our World</h1>
                </div>
            </div>


            <div className="text-center py-8 px-5">
              <h2 className=" text-2xl lg:text-4xl font-extrabold">
                Contact Us
              </h2>
              <p className=" pt-6 w-full mx-auto lg:w-9/12">
              Embark on your shadowy adventure with ease by reaching out to Shadow Tourist Guide. Whether you have questions about our thrilling tours or need personalized recommendations, we are here to assist you every step of the way. Contact us via phone, email, or drop by our office to start planning your unforgettable journey into the shadows.{" "}
              </p>
            </div>


            <div>
            <div className="mt-6 lg:mt-12 flex gap-6 flex-col-reverse lg:flex-row px-6">
              <form className="lg:basis-3/5 basis-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <label>
                    <span className=" text-xl font-bold">
                      Your Name
                    </span>{" "}
                    <br />
                    <input
                      className="mt-4 w-full p-5 bg-opacity-25 rounded-md border-0 outline-0 bg-[#e3eeff]"
                      type="text"
                      placeholder="Enter your full name"
                      required
                    />
                  </label>
    
                  {/* input-2 */}
    
                  <label>
                    <span className=" text-xl font-bold">
                      Your Email
                    </span>{" "}
                    <br />
                    <input
                      className="mt-4 w-full p-5 bg-opacity-25 rounded-md border-0 outline-0 bg-[#e3eeff]"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </label>
    
                  {/* input-3  */}
    
                  <label>
                    <span className=" text-xl font-bold">
                      Subject
                    </span>{" "}
                    <br />
                    <input
                      className="mt-4 w-full p-5 bg-opacity-25 rounded-md border-0 outline-0 bg-[#e3eeff]"
                      type="text"
                      placeholder="Enter your subject"
                      required
                    />
                  </label>
    
                  {/* input-4  */}
    
                  <label>
                    <span className=" text-xl font-bold">
                      Phone Number
                    </span>{" "}
                    <br />
                    <input
                      className="mt-4 w-full p-5 bg-opacity-25 rounded-md border-0 outline-0 bg-[#e3eeff]"
                      type="number"
                      placeholder="Enter your phone number"
                      required
                    />
                  </label>
                </div>
    
                {/* input 5  */}
                <label>
                  <span className=" text-xl font-bold ">
                    Message
                  </span>{" "}
                  <br />
                  <textarea className="mt-4 w-full p-5 bg-opacity-25 rounded-md pb-36 lg:pb-64  border-0 outline-0 bg-[#e3eeff] text-[#9CA3AF] resize-none" placeholder="Write your message">
                    
                  </textarea>
                </label>
    
                <button className="btn rounded-md text-white  text-xl font-bold bg-[#94b9ec] w-full mt-6">
                  Send Message
                </button>
              </form>
    
              <div className=" border rounded-md border-neutral-900 border-opacity-10 lg:p-12 p-5 lg:basis-2/5 basis-full">
                <div className="p-6 bg-[#C5DDFF] rounded-md bg-opacity-10 ">
                  <FaPhoneAlt className="text-2xl text-[#94b9ec]"></FaPhoneAlt>
                  <p className="pt-6">Phone Number :</p>
                  <h3 className="font-bold pt-3">(+62) 123-821-455</h3>
                </div>
    
                <div className="p-6 bg-[#C5DDFF] rounded-md bg-opacity-10  my-6">
                  <MdEmail className="text-2xl text-[#94b9ec]"></MdEmail>
                  <p className="pt-6">Email :</p>
                  <h3 className="font-bold pt-3">shadowTourist@support.com</h3>
                </div>
    
                <div className="p-6 bg-[#C5DDFF] rounded-md bg-opacity-10 ">
                  <IoLocation className="text-2xl text-[#94b9ec]"></IoLocation>
                  <p className="pt-6">Location :</p>
                  <h3 className="font-bold pt-3">1230 Uttara , Dhaka</h3>
                </div>
              </div>
            </div>
          </div>

        </div>
    );
};

export default Contact;