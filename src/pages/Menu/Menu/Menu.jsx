import { Helmet } from "react-helmet-async";
import Cover from "../../../components/Cover/Cover";
import menuBanner from "../../../assets/menu/banner3.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../components/useMenu/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const offered = menu.filter((item) => item.category === "offered");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>
      <Cover
        img={menuBanner}
        bannerTitle="our menu"
        bannerDetails="WOULD YOU LIKE TO TRY A DISH?"
      />
      <SectionTitle subHeading="Don't miss" heading="Today's Offer" />
      <MenuCategory items={offered} btnTitle="ORDER YOUR FAVOURITE FOOD" />
      <MenuCategory
        img={dessertImg}
        items={dessert}
        btnTitle="ORDER YOUR FAVOURITE FOOD"
        bannerTitle="dessert"
        bannerDetails="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <MenuCategory
        img={pizzaImg}
        items={pizza}
        btnTitle="ORDER YOUR FAVOURITE FOOD"
        bannerTitle="pizza"
        bannerDetails="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <MenuCategory
        img={saladImg}
        items={salad}
        btnTitle="ORDER YOUR FAVOURITE FOOD"
        bannerTitle="salad"
        bannerDetails="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <MenuCategory
        img={soupImg}
        items={soup}
        btnTitle="ORDER YOUR FAVOURITE FOOD"
        bannerTitle="soup"
        bannerDetails="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
    </div>
  );
};

export default Menu;
