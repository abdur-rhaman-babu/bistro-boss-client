const Cover = ({ img, bannerTitle, bannerDetails }) => {
  return (
    <div
      className="hero h-[700px] mb-10"
      style={{
        backgroundImage: `url('${img}')`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold uppercase">{bannerTitle}</h1>
          <p className="mb-5">
           {bannerDetails}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
