import { FiberManualRecord, Info } from "@material-ui/icons";
import React from "react";
import "./Widgets.css";

const Widgets = () => {
  const newArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newArticle("React is back", "Top news - 9099 readers")}
      {newArticle("Coronavirus: UK updates", "Top news - 886 readers")}
      {newArticle("Tesla hits new highs", "Cars & auto - 300 readers")}
      {newArticle("Bitcoin Breaks $22k", "Crypto - 8000 readers")}
    </div>
  );
};

export default Widgets;
