import React from "react";
import { Link } from "react-router-dom";
import platformData from "../../data/platformData";

const PlatformList = () => {
  return (
    <div className="container my-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="row text-center">
        {platformData.map((platform) => (
          <div className="col-lg-4 col-md-6 col-sm-6 item-ndstr" key={platform.name}>
            <span className="item-ndstr-title">{platform.title}</span>
            <div className="item-ndstr-img">
              <Link to={`/platforms/${platform.name}`}>
                <img src={platform.image} alt={platform.title} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformList;
