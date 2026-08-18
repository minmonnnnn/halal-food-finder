import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import RootLayout from "./layout/RootLayout";
import Home from "./page/Home";
import Search from "./page/Search";

export default function App(){

  const router = createBrowserRouter(

    createRoutesFromElements(

      <Route path = "/" element = {<RootLayout/>}>
        <Route index element = {<Home/>}/>
        <Route path = "/search" element = {<Search/>}/>
      </Route>
    )
  )
  return(
    <RouterProvider router={router}></RouterProvider>
  )
}