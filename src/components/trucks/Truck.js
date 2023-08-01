import React from "react";
import { Link } from "react-router-dom";
const Truck = ({ title, imageUrl, linkUrl, subVariants }) => {
  return (
    <div className="col-md-4 item-p remove-position mt-3">
      <span className="title-red-tov text-left">
        <span className="font-red list-rem-hino">{title}</span> Series
      </span>

      <ul className="sub-variant-tov" style={{ paddingLeft: 0 }}>
        {subVariants.map((variant, index) => (
          <li key={index}>
            <Link
              to={variant.linkUrl}
              style={{
                visibility: variant.name.length === 0 ? "hidden" : "visible",
              }}
            >
              {variant.name.length === 0 ? "ПОЛНАЯ МАССА 30,7 Т | ШАССИ FS" : variant.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="box-img-tov">
        <img
          width="220"
          height="165"
          src={imageUrl}
          className="attachment-full size-full wp-post-image"
          alt=""
          decoding="async"
          loading="lazy"
        />
      </div>

      <span className="read-more">
        <a className="link-item" href={linkUrl}>
          Подробнее
        </a>
      </span>
    </div>
  );
};

export default Truck;
