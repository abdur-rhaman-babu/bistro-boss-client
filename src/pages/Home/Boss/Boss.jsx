import boss from "../../../assets/home/01.jpg";
const Boss = () => {
  return (
    <div className="mb-10">
      <div className="h-[450px] relative">
        <img className="h-full w-full" src={boss} alt="" />
        <div className="bg-white p-5 lg:p-16 z-10 absolute top-24 lg:top-24 text-center lg:w-9/12 w-11/12 mx-auto right-5 lg:right-44">
          <h1 className="font-bold text-4xl mb-5">Bistro Boss</h1>
          <p>
            Enthusiastically reconceptualize competitive channels vis-a-vis
            adaptive mindshare. Seamlessly implement prospective models
            vis-a-vis prospective human capital. Synergistically matrix
            high-quality synergy after high-quality mindshare. Holisticly
            transition dynamic benefits via cross-unit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Boss;
