import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import moment from "moment";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["paymentsHistory", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
          <Helmet>
        <title>Shadow Tourist || Payment History</title>
      </Helmet>
      <h2 className="text-3xl font-semibold text-center my-6">
        Total Payments : {payments.length}
      </h2>

      <div className="overflow-x-auto min-h-[60vh]">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#e5ebee]">
              <th>#</th>
              <th>Date</th>
              <th>Price</th>
              <th>Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, idx) => (
              <tr key={payment._id} className="bg-base-200">
                <th>{idx + 1}</th>
                <td>
                  {moment(payment.date).format("MMMM Do YYYY, h:mm:ss a")}
                </td>
                <td>$ {payment.price}</td>
                <td>{payment.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
