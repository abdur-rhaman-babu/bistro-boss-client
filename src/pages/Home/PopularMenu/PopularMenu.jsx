import axios from "axios";
import { useEffect, useState } from "react";
import MenuItem from "../../../components/MenuItem/MenuItem";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    axios.get("menu.json").then((res) => {
      setMenu(res.data);
    });
  }, []);
  return (
    <div>
        <SectionTitle heading='from our menu' subHeading='check it out'/>
      <div className="grid md:grid-cols-2 gap-10 mb-10">
        {menu.slice(0,6).map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
