import { useEffect, useState } from "react";
import MovieCard from "./Card";
import SubHeading from "./SubHeading";
import CustomCarousel from "./CustomCarousel";
const api_key=import.meta.env.VITE_api_key;
const base_url=import.meta.env.VITE_base_url;
const Trending = () => {
  const [trending, setTrending] = useState("day");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `${base_url}trending/movie/${trending}?language=en-USpage=1&api_key=${api_key}`
    )
      .then((response) => response.json())
      .then((response) => {
        setData(
          response.results.slice(0, 5).map((res) => {
            return {
              src: res.backdrop_path,
              id: res.id,
              rating: res.vote_average,
              title: res.title,
              date: new Date(res.release_date),
            };
          })
        );
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [trending]);
  useEffect(() => {}, [trending]);
  function handleChange(data) {
    setTrending(data);
  }
  return (
    <div className="gradient-background container">
      <SubHeading
        {...{
          heading: "Trending",
          options: ["day", "week"],
          handleChange,
          current: trending,
        }}
      />
      <CustomCarousel
        displayButton={false}
        items={data.map((ele, index) => (
          <MovieCard card={ele} key={ele.id + "Trending"} />
        ))}
      ></CustomCarousel>
    </div>
  );
};
export default Trending;
