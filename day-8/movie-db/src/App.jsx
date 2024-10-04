import { Suspense,lazy } from "react";
import "./App.css";
const AllRoutes =lazy(()=> import("./components/AllRoutes"))

function App() {
  return <Suspense fallback={<div>Loading....</div>}>
    <AllRoutes />
  </Suspense>
}

export default App;
