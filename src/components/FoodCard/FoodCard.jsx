const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  // console.log(item)
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <p>{price}</p>
        <div className="w-full">
        <button className="btn btn-outline border-0 border-b-4 uppercase w-full">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
