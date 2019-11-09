import React from "react";
import QtcGrid from "./telewebsite/QtcGrid";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="text-center">QTc Grid</h3>
            <QtcGrid />
          </div>
          <div className="col">
            <h3 className="text-center">Forms & Tools</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
