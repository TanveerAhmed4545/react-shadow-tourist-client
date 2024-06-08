import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import Select from 'react-select';
import { Helmet } from "react-helmet-async";


const ManageUser = () => {
  const [search, setSearch] = useState('');
  const [role, setRole] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  // console.log(role,search)
  const axiosSecure = useAxiosSecure();
  // const {user} = useAuth();

  // fetch data
  const {
    data: users = [],
    
    refetch,
  } = useQuery({
    queryKey: ["manageUsers", search, role,currentPage],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users/?page=${currentPage}` ,{
        params: {
          search,
          role: role ? role.value : ''
        }
      });
      return data;
    },
  });
  // console.log(users);


      
  const {data: totalCount={}} = useQuery({
    queryKey: ['userCount'],
    queryFn: async()=>{
        const res = await axiosSecure.get('/userCount')
        return res.data;
    }
})
const {count} = totalCount;
const itemsPerPage = 10;

const numberOfPages = Math.ceil(count/itemsPerPage);
const pages = numberOfPages > 0 ? [...Array(numberOfPages).keys()] : [];
// console.log(count,itemsPerPage,numberOfPages,pages);

const handlePrevPage = () =>{
 if(currentPage > 0){
  setCurrentPage(currentPage - 1);
 }
}

const handleNextPage = () =>{
  if(currentPage < pages.length - 1){
   setCurrentPage(currentPage + 1);
  }
 }




  const updateUserRole = useMutation({
    mutationFn: async ({ email, role, status }) => {
      const { data } = await axiosSecure.patch(`/users/update/${email}`, {
        role,
        status,
      });
      return data;
    },
    onSuccess: () => {
      refetch();
      toast.success("User role updated successfully!");
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  });

  const handleRoleChange = (email, role, status) => {
    updateUserRole.mutate({ email, role, status });
  };

  

  const roleOptions = [
    { value: '', label: 'All' },
    { value: 'tourist', label: 'Tourist' },
    { value: 'guide', label: 'Guide' },
    { value: 'admin', label: 'Admin' },
  ];

 

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Shadow Tourist || Manage User</title>
      </Helmet>

      <div className="my-5">
        <input
          className="input input-bordered mb-3 w-full"
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select
          options={roleOptions}
          onChange={setRole}
          placeholder="Filter by role"
        />
      </div>
     
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#e5ebee]">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((item, idx) => (
              <tr key={idx} className=" hover">
                <th>{idx + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>{item.status}</td>
                <td>
                  <button
                  className="btn bg-teal-400 text-white"
                    onClick={() =>
                      handleRoleChange(item.email, "guide", "Verified")
                    }
                    disabled={item.role === 'guide' }
                  >
                    Guide
                  </button>
                </td>
                <td>
                  <button
                  className="btn bg-emerald-400 text-white"
                    onClick={() =>
                      handleRoleChange(item.email, "admin", "Verified")
                    }
                    disabled={item.role === 'admin' }
                  >
                    Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <div className="text-center py-5 mt-auto ">
            
            <button
            onClick={handlePrevPage}
            className=" btn btn-md mr-1">«</button>
            {
             pages.map((page,idx) => <button
             onClick={()=> setCurrentPage(page)}
             key={idx} 
             className={currentPage === page ? 'btn btn-md btn-active mr-1' : 'btn  btn-md mr-1'}
             >{page + 1}</button>)
            }
            <button
            onClick={handleNextPage}
            className=" btn btn-md mr-1">»</button>
           </div>

    </div>
  );
};

export default ManageUser;
