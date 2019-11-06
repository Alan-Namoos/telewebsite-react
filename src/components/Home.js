import React from "react";
import QtcGrid from "./telewebsite/QtcGrid";

const Home = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <h2>QTc Grid</h2>
          <QtcGrid />
        </div>
        <div className="col">
          <h2>Forms & Tools</h2>
        </div>
      </div>
    </>
  );
};

export default Home;
