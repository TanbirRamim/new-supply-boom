import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = `http://localhost:5000/orders?email=${email}`;
      const { data } = await axios.get(url);
      setOrders(data);
    };
    getOrders();
  }, [user]);

  return (
    <div>
      <h2 className="text-xl text-center text-neutral my-2"> My Orders</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Tool Name</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{o.name}</td>
                <td>{o.orderQuantity} Items</td>
                <td>{o.order}</td>
                <td>{o.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
