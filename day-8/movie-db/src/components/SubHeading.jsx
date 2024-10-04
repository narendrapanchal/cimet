const SubHeading = ({ heading, options, handleChange, current }) => {
  return (
    <div className="carousel-header">
      <h2 className="carouselTitle">{heading}</h2>
      <div className="gradient">
        {options.slice(0, 2).map((ele, ind) => (
          <button
            onClick={() => handleChange(ele)}
            key={ele + ind}
            className={current == ele ? "selected" : ""}
          >
            {ele.charAt(0).toUpperCase() + ele.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};
export default SubHeading;
