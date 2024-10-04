import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Products from "./pages/ProductsList";
import Cart from "./pages/Cart";
import OutletHome from "./components/OutletHome";
import Article from "./pages/Article";
import Product from "./pages/Product";

const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
export const fetchPosts = async (limit = 10, page = 1) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    
    return {
      data: data.slice((page - 1) * limit, (page - 1) * limit + limit),
      pages: Math.ceil(data.length / limit),
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <OutletHome />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetchData("https://fakestoreapi.com/products?limit=4"),
      },
      {
        path: "blog",
        element: <Outlet />,
        children: [
          {
            
                path: ":id",
                element: <Blog />,
                
          },
          {
            path: "article",
            element:<Outlet />,
            children:[
              {
                path:":id",
                element: <Article />,
                loader: ({ params }) =>
                  fetchData(
                    `https://jsonplaceholder.typicode.com/posts/${params.id}`
                  )
              }
            ]
          },
        ],
      },
      {
        path: "products",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Products />,
            loader: () => fetchData("https://fakestoreapi.com/products"),
          },
          {
            path: ":id",
            element: <Product />,
            loader: ({ params }) =>
              fetchData(`https://fakestoreapi.com/products/${params.id}`)
          }
        ]
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
const AllRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AllRoutes;

// const AllRoutes=()=>{
//   return (<BrowserRouter>
//   <Routes>
//     <Route path="/" element={<Home/>}/>
//   </Routes>
//   </BrowserRouter>)
// }

// export default AllRoutes;
