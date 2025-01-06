const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-5/12 text-center mx-auto">
            <p className="font-semibold text-yellow-500">---- {subHeading} ----</p>
            <h1 className="font-semibold text-3xl border-y-2 p-4 mb-5 uppercase">{heading}</h1>
        </div>
    );
};

export default SectionTitle;    