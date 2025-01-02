import Banner from "../Banner/Banner";
import Boss from "../Boss/Boss";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <Boss/>
            <PopularMenu/>
            <Featured/>
            <Testimonial/>
        </div>
    );
};

export default Home;