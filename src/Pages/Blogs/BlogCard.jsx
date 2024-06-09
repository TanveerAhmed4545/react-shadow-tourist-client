

// eslint-disable-next-line react/prop-types
const BlogCard = ({item}) => {
    // eslint-disable-next-line react/prop-types
    const {img,title,blog} = item;
    return (
        <div className="flex flex-col  h-full  p-6 space-y-5 overflow-hidden rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
        
          
        <img
          src={img}
          className="object-cover w-full  h-60 rounded-md sm:h-96 dark:bg-gray-500"
        />
      {/* <motion.img
        // src={imageUrl}
        className="object-cover w-full h-60 rounded-md sm:h-96 dark:bg-gray-500"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
      /> */}
      
       <div className="">
        <h2 className="mb-2 text-xl font-semibold">
          {title}
        </h2>
        </div>
        
        <div className="mt-auto">
       <p className="text-sm dark:text-gray-600 ">
          {blog}
        </p>
        </div>
     
        
     
    </div>
    );
};

export default BlogCard;