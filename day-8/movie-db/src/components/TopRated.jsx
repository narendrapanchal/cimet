import { useEffect, useState } from "react";
import MovieCard from "./Card";
import SubHeading from "./SubHeading";
import CustomCarousel from "./CustomCarousel";
const api_key=import.meta.env.VITE_api_key;
const base_url=import.meta.env.VITE_base_url;
const TopRated = () => {
  const [topRated, setTopRated] = useState("movie");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `${base_url}${topRated}/top_rated?language=en-USpage=1&api_key=${api_key}`
    )
      .then((response) => response.json())
      .then((response) => {
        setData([
          ...response.results.map((res) => {
            return {
              src: res.backdrop_path,
              id: res.id,
              rating: res.vote_average,
              title: res.title || res.original_name,
              date: new Date(res.release_date || res.first_air_date),
            };
          }),
        ]);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [topRated]);
  function handleChange(data) {
    setTopRated(data);
  }
  return (
    <div className="gradient-background container">
      <SubHeading
        {...{
          heading: "Top Rated",
          options: ["movie", "tv"],
          handleChange,
          current: topRated,
        }}
      />
      <CustomCarousel
        items={data.map((ele, index) => (
          <MovieCard card={{...ele,isTv:topRated=="movie"?false:true}} key={ele.id + "Top Rated"} />
        ))}
      ></CustomCarousel>
    </div>
  );
};
export default TopRated;
