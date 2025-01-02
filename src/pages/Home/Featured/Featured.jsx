import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import './Featured.css'
const Featured = () => {
  return (
    <div className="featured-bg text-white p-10 my-10 bg-fixed">
      <SectionTitle heading="check it out" subHeading="from our menu" />
      <div className="md:flex items-center justify-center gap-10 px-16 pt-5 pb-20">
        <img className="w-[350px]" src={featured} alt="" />
        <div className="space-y-3">
          <p>March 20, 2023</p>
          <h1 className="uppercase">Where Can I get Some?</h1>
          <p>
             Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Error voluptate facere, deserunt
            dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad
            laudantium tempore consequatur consequuntur omnis ullam maxime
            tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-4 uppercase">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
