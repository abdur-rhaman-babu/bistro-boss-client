import { Link } from "react-router-dom";
import Cover from "../../../components/Cover/Cover";
import MenuItem from "../../../components/MenuItem/MenuItem";

const MenuCategory = ({ items, btnTitle, bannerTitle, img, bannerDetails }) => {
  return (
    <div className="my-10">
      {bannerTitle && (
        <Cover
          bannerTitle={bannerTitle}
          img={img}
          bannerDetails={bannerDetails}
        />
      )}
      <div className="grid md:grid-cols-2 gap-10 mb-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center">
        <Link to={`/ourShop/${bannerTitle}`}>
          <button className="btn btn-outline border-0 border-b-4 uppercase">
            {btnTitle}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
