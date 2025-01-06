import { MdDelete } from "react-icons/md";
import useCart from "../../../Hooks/useCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <div>
      <SectionTitle subHeading="My Cart" heading="wanna add more" />
      <div className="flex items-center justify-evenly">
        <p className="text-3xl font-bold">Total Item: {cart.length}</p>
        <p className="text-3xl font-bold">Total Price: ${totalPrice}</p>
        <button className="btn text-white bg-yellow-600">Pay</button>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, idx) => (
                <tr key={item._id}>
                  <td>{idx+1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs text-red-600">
                      <MdDelete size={25} />{" "}
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
