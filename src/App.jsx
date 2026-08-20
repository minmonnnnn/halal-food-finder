import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import RootLayout from "./layout/RootLayout";
import Home from "./page/Home";
import Search from "./page/Search";
import About from "./page/About";

export default function App(){

  const router = createBrowserRouter(

    createRoutesFromElements(

      <Route path = "/" element = {<RootLayout/>}>
        <Route index element = {<Home/>}/>
        <Route path = "/search" element = {<Search/>}/>
        <Route path = "/about" element = {<About/>}/>
      </Route>
    )
  )
  return(
    <RouterProvider router={router}></RouterProvider>
  )
}