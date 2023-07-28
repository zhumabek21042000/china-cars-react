import React from "react";
import PlatformIcons from "./PlatformIcons";
import platformData from "../../data/platformData";

const PlatformInfo = ({ excludePlatform }) => {
  const platformName = excludePlatform;
  const platform = platformData.find(
    (platform) => platform.name === platformName
  );

  if (!platform) {
    return <div>Platform not found</div>;
  }

  return (
    <>
      <h3 className="text-center mt-5">
        <span className="red">{platform.title}</span>
      </h3>
      <div className="container">
        <div className="row box-content-page page-nadstroiki">
          <div className="col-md-6 nadstroiki-img">
            <img src={platform.truckImage} alt="" />
          </div>

          <div className="col-md-6 nadstroiki-text">
            <p className="info">
              <img
                decoding="async"
                className="alignleft wp-image-96"
                src={platform.image}
                alt=""
                width="197"
                height="100"
                sizes="(max-width: 197px) 100vw, 197px"
              />
              <div dangerouslySetInnerHTML={{ __html: platform.text }} />
            </p>
            {/* Render the HTML content using dangerouslySetInnerHTML */}
            <div dangerouslySetInnerHTML={{ __html: platform.info }} />
          </div>
        </div>
        <PlatformIcons excludePlatform={excludePlatform} />
      </div>
    </>
  );
};

export default PlatformInfo;
