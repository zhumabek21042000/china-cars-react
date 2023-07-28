import React from "react";
import { Link } from "react-router-dom";
import platformData from "../../data/platformData";

const PlatformIcons = ({ excludePlatform }) => {
  const filteredPlatforms = platformData.filter(
    (platform) => platform.name !== excludePlatform
  );

  return (
    <div className="row">
      <div className="title-box-slider">Смотрите также</div>

      <div className="col-md-12 slider-wath-all">
        {filteredPlatforms.map((platform) => (
          <div className="slid-item" key={platform.name}>
            <Link to={`/platforms/${platform.name}`}>
              <img
                width="317"
                height="162"
                src={platform.image}
                className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                alt=""
                decoding="async"
                loading="lazy"
                sizes="(max-width: 317px) 100vw, 317px"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformIcons;
