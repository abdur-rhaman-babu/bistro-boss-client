import shopImg from "../../../assets/shop/ourShop.jpg";
import Cover from "../../../components/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../components/useMenu/useMenu";
import ShopCard from "../../../components/ShopCard/ShopCard";
import { useState } from "react";
import { useParams } from "react-router-dom";
const OurShop = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const { category } = useParams();
  // console.log(category)
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Cover
        img={shopImg}
        bannerTitle="Our shop"
        bannerDetails="WOULD YOU LIKE TO TRY A DISH"
      />
      <div className="flex items-center justify-center">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <ShopCard items={salad} />
          </TabPanel>
          <TabPanel>
            <ShopCard items={pizza} />
          </TabPanel>
          <TabPanel>
            <ShopCard items={soup} />
          </TabPanel>
          <TabPanel>
            <ShopCard items={dessert} />
          </TabPanel>
          <TabPanel>
            <ShopCard items={drinks} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
