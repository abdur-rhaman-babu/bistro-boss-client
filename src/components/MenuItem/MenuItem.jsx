const MenuItem = ({ item}) => {
  const { name, recipe, image, price } = item;
  return (
    <div>
      <div className="flex items-center gap-4">
        <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
        <div>
          <div className="flex items-center justify-between">
            <h3 className="uppercase">{name}-------------</h3>
            <p className="text-yellow-500">${price}</p>
          </div>
          <p>{recipe}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
