import { useEffect, useState } from "react";
import MovieCard from "./Card";
import SubHeading from "./SubHeading";
import CustomCarousel from "./CustomCarousel";
const api_key=import.meta.env.VITE_api_key;
const base_url=import.meta.env.VITE_base_url;
const Popular = () => {
  const [popular, setPopular] = useState("movie");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `${base_url}${popular}/popular?language=en-USpage=1&api_key=${api_key}`
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
  }, [popular]);
  function handleChange(data) {
    setPopular(data);
  }
  return (
    <div className="gradient-background container">
      <SubHeading
        {...{
          heading: "What's Popular",
          options: ["movie", "tv"],
          handleChange,
          current: popular,
        }}
      />
      <CustomCarousel
        items={data.map((ele, index) => (
          <MovieCard card={{...ele,isTv:popular=="movie"?false:true}} key={ele.id + "Popular"} />
        ))}
      ></CustomCarousel>
    </div>
  );
};
export default Popular;
