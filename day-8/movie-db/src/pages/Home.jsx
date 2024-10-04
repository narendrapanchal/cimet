import { useState } from "react";
import "../styles/Home.css";
import Trending from "../components/Trending";
import Popular from "../components/Popular";
import TopRated from "../components/TopRated";
const randomImages = [
  "https://image.tmdb.org/t/p/original/xlkclSE4aq7r3JsFIJRgs21zUew.jpg",
  "https://image.tmdb.org/t/p/original/62zw627mH74rng9zc4tFfaR54KW.jpg",
  "https://image.tmdb.org/t/p/original/en3GU5uGkKaYmSyetHV4csHHiH3.jpg",
];
const randomIndex = Math.floor(Math.random() * randomImages.length);

const Home = () => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/${input}`;
  };
  return (
    <div className="home">
      <div style={{ backgroundImage: `url(${randomImages[randomIndex]})` }}>
        <div className="black-background"></div>
        <h1>WELCOME.</h1>
        <p>Millions of movies, TV shows and people to discover. Explore now.</p>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              type="text"
              placeholder="Search for movies, TV shows or people"
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="opacity-layer"></div>
      </div>
      <div className="home-rows">
        <Trending />
        <Popular />
        <TopRated />
      </div>
    </div>
  );
};
export default Home;
