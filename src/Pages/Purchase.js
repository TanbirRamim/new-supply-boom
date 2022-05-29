import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderModal from "./OrderModal";

const Purchase = () => {
  const [order, setOrder] = useState();
  const { toolId } = useParams();
  const [tool, setTool] = useState({});
  const { img, min_order, name, available_quantity, short_description, price } =
    tool;
  console.log(tool);

  let quantity = parseInt(available_quantity);
  let minOrder = parseInt(min_order);
  useEffect(() => {
    const url = `http://localhost:5000/tool/${toolId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl text-center text-neutral mt-3">
        Confirm Your Order
      </h1>

      <div className="container w-75 my-10 py-5 lg:flex justify-center items-center space-x-10 rounded-lg shadow-lg">
        <div className="w-25">
          {" "}
          <img
            className="img-fluid transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-125"
            src={img}
            alt=""
          />
        </div>
        <div className="bg-gray-200 p-10 w-50">
          <h1 className="text-2xl">{name}</h1>
          <p>
            Price:{" "}
            <b>
              <i>{price}</i>
            </b>
          </p>
          <p>
            Minimum Order:{" "}
            <b>
              <i>{min_order} Items</i>
            </b>
          </p>
          <p>
            Available Items: <b>{available_quantity}</b>
          </p>
          <p>
            {" "}
            <b>About: </b>
            <small>
              <i>{short_description}</i>
            </small>
          </p>

          <label
            htmlFor="order-modal"
            className="btn my-3 lg:ml-5 text-white"
            disabled={quantity < minOrder}
            onClick={() => setOrder(tool)}
          >
            Confirm Order
          </label>
        </div>
      </div>

      {order && (
        <OrderModal tool={tool} order={order} setOrder={setOrder}></OrderModal>
      )}
    </div>
  );
};

export default Purchase;
