import React from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Component from "./component";
import UserForm from "./user-form";
import Search from "./search";
import { Home } from "./pages/home";
import { BannerHome } from "./components/banner/banner";
import { AboutHome } from "./components/about/about";
 
class Main extends React.Component {
  render() {
    console.log(process.env.PUBLIC_URL);
    return (
      <BrowserRouter>
        <div>
          <Home></Home>
          <BannerHome></BannerHome>
          <AboutHome></AboutHome>
        </div>
      </BrowserRouter>
    );
  }
}
 
export default Main;