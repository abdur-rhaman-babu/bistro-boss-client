import FoodCard from "../FoodCard/FoodCard";

const ShopCard = ({items}) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
      {items.map((item) => (
        <FoodCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default ShopCard;
