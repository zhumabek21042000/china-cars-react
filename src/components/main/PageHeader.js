import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/images/header-bg.webp";

const PageHeader = ({ title, breadcrumbLinks }) => {
  return (
    <div
      className="container-fluid page-header mb-5 p-0"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container-fluid page-header-inner py-5">
        <div className="container text-center">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            {title}
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase">
              {breadcrumbLinks.map((link, index) =>
                index === breadcrumbLinks.length - 1 ? (
                  <li key={index} className="breadcrumb-item text-white active">
                    {link.text}
                  </li>
                ) : (
                  <li key={index} className="breadcrumb-item">
                    <Link to={link.url}>{link.text}</Link>
                  </li>
                )
              )}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  breadcrumbLinks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PageHeader;
