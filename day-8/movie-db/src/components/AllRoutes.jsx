import { BrowserRouter, Route, Routes } from "react-router-dom"
import MoviesPage from "../pages/MoviesPage"
import TvShowsPage from "../pages/TvShowsPage"
import Home from "../pages/Home"
import Header from "./Header"
import SearchPage from "../pages/SearchPage"
import SingleTv from "../pages/SingleTv"
import SingleMovie from "../pages/SingleMovie"

const AllRoutes=()=>{
    return <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tv-shows" element={<TvShowsPage />} />
        <Route path="/:id" element={<SearchPage />} />
        <Route path="/tv/:id" element={<SingleTv />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
    </Routes>
    </BrowserRouter>
}
export default AllRoutes