import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import CycloClassBasePage from "./component/CycloClassBasePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <div className="row text-white">
      <div className="col-6">
        <span className="h1 text-warning text-center">Class Component</span>
        <CycloClassBasePage />
      </div>
    </div>
  </div>
);
