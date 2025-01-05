import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const FoodCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure()
  const handleAddToCart = (food) => {
    const cartItem = {
      menuId: _id,
      email: user.email,
      name,
      price,
      image,
    };

    if (user && user.email) {
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Added to cart",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log(res.data);
      });
    } else {
      Swal.fire({
        title: "Are you Logged In?",
        text: "Please logged in!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <p>{price}</p>
        <div className="w-full">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-0 border-b-4 uppercase w-full"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
