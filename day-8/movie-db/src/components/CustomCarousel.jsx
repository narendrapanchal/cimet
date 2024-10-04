import React, { useRef } from "react";

const CustomCarousel = ({ items, displayButton = true }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -1320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 1320, behavior: "smooth" });
    }
  };

  return (
    <div style={styles.carouselContainer}>
      {displayButton && (
        <button
          style={{ ...styles.button, marginLeft: "0px" }}
          onClick={scrollLeft}
        >
          &#9664; {/* Left Arrow */}
        </button>
      )}
      <div style={styles.carousel} ref={carouselRef}>
        {items.map((item, index) => (
          <div key={index} style={styles.item}>
            {item}
          </div>
        ))}
      </div>
      {displayButton && (
        <button
          style={{ ...styles.button, marginLeft: "1260px" }}
          onClick={scrollRight}
        >
          &#9654;
        </button>
      )}
    </div>
  );
};

const styles = {
  carouselContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
    width: "100%",
    maxWidth: "1320px", // Adjust as needed
    margin: "0 auto",
    position: "relative",
  },
  carousel: {
    display: "flex",
    overflowX: "scroll",
    scrollBehavior: "smooth",
    scrollbarWidth: "none", 
    WebkitOverflowScrolling: "touch",
  },
  item: {
    margin: "0 0px",
    flex: "0 0 auto",
    borderRadius: "8px",
  },
  button: {
    display: "none", 
    border: "none",
    cursor: "pointer",
    fontSize: "24px",
    position: "absolute",
    zIndex: 1,
    color: "white",
    background: "black",
    borderRadius: "50%",
    padding: "5px 20px 10px 20px",
    opacity: "0.6",
  },
};

const mediaQuery = `
  @media (min-width: 768px) {
    ${(styles.button.display = "block")};
  }
`;

document.styleSheets[0].insertRule(
  mediaQuery,
  document.styleSheets[0].cssRules.length
);

export default CustomCarousel;
