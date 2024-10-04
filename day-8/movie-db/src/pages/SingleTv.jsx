import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
import "../styles/SingleTv.css";
const api_key = import.meta.env.VITE_api_key;
const base_url = import.meta.env.VITE_base_url;
const SingleTv = () => {
  const [items, setItems] = useState({});
  const [circumString,setCircumString]=useState("")
  const radius = 25;
  let totalCircumference; // Circumference of the circle
  let greenLength;
  let whiteLength;
  let rating;
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${base_url}tv/${id}?language=en-US&page=1&api_key=${api_key}`
      );
      const data = await response.json();
      totalCircumference = Math.PI * 2 * radius; // Circumference of the circle
      greenLength = (data?.vote_average.toFixed(1) / 10) * totalCircumference;
      whiteLength = totalCircumference - greenLength;
      setCircumString(""+greenLength+" "+whiteLength);
      setItems(data);
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  console.log({ items });

  return (
    <>
      <div className="single-tv container">
        <div className="hero-section">
          <img
            width={350}
            height={515}
            src={
              "https://image.tmdb.org/t/p/original" +
              (items.backdrop_path != null
                ? items.backdrop_path
                : "/kbI9M2m45SSwi3t5ztygAlKxUql.jpg")
            }
            alt="Single Tv"
          />
          <div className="product-details">
            <h2>{items.name || items?.overview}</h2>
            <div className="genres">
              {items &&
                items?.genres?.map((ele, i) => <p key={ele + i}>{ele.name}</p>)}
            </div>
            <div className="average-trailer">
            <div className="">
                <svg width="60" height="60">
                  {/* Background circle in white */}
                  <circle
                    cx="30"
                    cy="30"
                    r={radius}
                    stroke="white"
                    strokeWidth="5"
                    fill="white"
                  />
                  {/* Green segment for the rating */}
                  <circle
                    cx="30"
                    cy="30"
                    r={radius}
                    stroke={
                      (items && items?.vote_average?.toFixed(1)) > 7.5
                        ? "green"
                        : (items && items?.vote_average?.toFixed(1)) > 6
                        ? "orange"
                        : "red"
                    }
                    strokeWidth="5"
                    fill="none"
                    strokeDasharray={`${circumString}`}
                    strokeDashoffset={whiteLength} // Start offset to have green at the top
                    style={{
                      transform: "rotate(90deg)",
                      transformOrigin: "50% 50%",
                    }}
                  />
                </svg>
                <span className="ratingText">
                  {items && items?.vote_average?.toFixed(1)}
                </span>
              </div>
              <div className="trailer">Watch Trailer</div>
            </div>
            <div className="overview">
              <h3>Overview</h3>
              {items?.overview&&<p><span>{items.overview}</span></p>}
              <p>
                Status: <span>{items && items?.status}</span>{" "}
              </p>
              <p>
                Creators:{" "}
                {items &&
                  items?.created_by?.map((name, i) => (
                    <span key={name.id}>{name.name}</span>
                  ))}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleTv;
// console.log({"adult":false,"backdrop_path":"/5ElVEImEPQmLVj1hkRM26rpsDKe.jpg","created_by":[{"id":1889132,"credit_id":"658617444da3d463a14129e2","name":"Maria João Costa","original_name":"Maria João Costa","gender":1,"profile_path":"/pjQfWaKnJdLEQOIjmNniAVOu76g.jpg"}],"episode_run_time":[45],"first_air_date":"2024-01-15","genres":[{"id":18,"name":"Drama"}],"homepage":"https://tvi.iol.pt/novelas/programa/cacau/659ece16d34e371fc0bbcf91","id":242101,"in_production":true,"languages":["pt"],"last_air_date":"2024-09-09","last_episode_to_air":{"id":5613325,"name":"Episode 189","overview":"","vote_average":0,"vote_count":0,"air_date":"2024-09-26","episode_number":189,"episode_type":"standard","production_code":"","runtime":45,"season_number":1,"show_id":242101,"still_path":"/v31CesPOi23JwuUPoyDUF475dyx.jpg"},"name":"Cacau","next_episode_to_air":{"id":5613326,"name":"Episode 190","overview":"","vote_average":0,"vote_count":0,"air_date":"2024-09-27","episode_number":190,"episode_type":"standard","production_code":"","runtime":45,"season_number":1,"show_id":242101,"still_path":"/v31CesPOi23JwuUPoyDUF475dyx.jpg"},"networks":[{"id":93,"logo_path":"/bCngEbZ5SoIwkgmSMsLUABqanZn.png","name":"TVI","origin_country":"PT"}],"number_of_episodes":185,"number_of_seasons":1,"origin_country":["PT"],"original_language":"pt","original_name":"Cacau","overview":"Cacau is an engaging saga of family secrets, clandestine loves and sacrifices, all sweetened by the irresistible taste of chocolate and the magic of cocoa plantations.","popularity":3252.091,"poster_path":"/nNCFBKZ68fmr008moWSzLdu2mUP.jpg","production_companies":[{"id":210942,"logo_path":"/10bG3Wt4Z0p2W1c2JkK2NGtBk6s.png","name":"TVI","origin_country":"PT"},{"id":128433,"logo_path":"/11x9eeGVBxcAraFfgwt5Hb1Z3Ms.png","name":"Plural Entertainment","origin_country":"PT"}],"production_countries":[{"iso_3166_1":"PT","name":"Portugal"}],"seasons":[{"air_date":"2024-01-15","episode_count":195,"id":371109,"name":"Season 1","overview":"","poster_path":"/au36FfksnT210brvlTJDb9Gj3fX.jpg","season_number":1,"vote_average":0}],"spoken_languages":[{"english_name":"Portuguese","iso_639_1":"pt","name":"Português"}],"status":"Returning Series","tagline":"","type":"Scripted","vote_average":5.5,"vote_count":16})
