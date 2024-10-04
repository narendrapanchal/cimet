import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
const api_key=import.meta.env.VITE_api_key;
const base_url=import.meta.env.VITE_base_url;
const SearchPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const { id } = useParams();
  const fetchItems = async (pageNumber) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${base_url}search/movie?query=${id}&include_adult=false&language=en-US&page=${pageNumber}&api_key=${api_key}`
      );
      const data = await response.json();
      setItems((prev) => [
        ...prev,
        ...data.results.map((res) => {
          return {
            src: res.backdrop_path,
            id: res.id,
            rating: res.vote_average,
            title: res.title || res.original_name,
            date: new Date(res.release_date || res.first_air_date),
          };
        }),
      ]);
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollHeight - scrollTop <= clientHeight + 10 && !loading) {
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);
  useEffect(() => {
    fetchItems(page);
  }, [page]);

  return (
    <>
      <div className="infinite-scroll">
        <h1 className="search-heading">Search Results for "{id}"</h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {items.map((item, index) => (
            <Card key={item.id + `${index}`} card={item} />
          ))}
        </div>
        {loading && <div>Loading...</div>}
      </div>
    </>
  );
};
export default SearchPage;
