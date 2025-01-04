import MenuItem from "../../../components/MenuItem/MenuItem";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../components/useMenu/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu(); 
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <div>
      <SectionTitle heading="from our menu" subHeading="check it out" />
      <div className="grid md:grid-cols-2 gap-10 mb-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <button className="btn btn-outline border-0 border-b-4 uppercase">View Full Menu</button>
    </div>
  );
};

export default PopularMenu;
