import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUser = () => {
  const axiosSecure = useAxiosSecure();
  // const {user} = useAuth();

  // fetch data
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["manageUsers"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/users");
      return data;
    },
  });
  // console.log(users);

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
     
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
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
              <tr key={idx} className="bg-base-200">
                <th>{idx + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>{item.status}</td>
                <td>
                  <button
                  className="btn"
                    onClick={() =>
                      handleRoleChange(item.email, "guide", "Verified")
                    }
                    disabled={item.role === 'admin' }
                  >
                    Guide
                  </button>
                </td>
                <td>
                  <button
                  className="btn"
                    onClick={() =>
                      handleRoleChange(item.email, "admin", "Verified")
                    }
                    disabled={item.role === 'guide' }
                  >
                    Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
