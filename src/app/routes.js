import React from "react";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";

function AppRoutes() {
  return (
    <div className="s_c">
      <Home />
      <About />
      <Portfolio />
      <ContactUs />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
