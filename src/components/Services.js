import React from "react";

const Services = () => {
  return (
    <div className="container">
      <div className="row box-product" style={{ marginBottom: "50px" }}>
        <div className="col-md-4 col-sm-6 item-" style={{ minHeight: "auto" }}>
          <div
            className="btn-group"
            style={{ width: "100%", borderBottom: "5px solid red" }}
          >
            <button
              type="button"
              className="btn btn-link btn-lg btn-block dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <span
                className="title-red-tov text-left"
                style={{ fontSize: "18px" }}
              >
                <span
                  className="font-red list-rem-hino"
                  style={{ fontSize: "18px !important" }}
                >
                  Малый тоннаж
                </span>
                <span className="caret"></span>
              </span>
            </button>
            <ul
              className="dropdown-menu sub-variant-tov"
              style={{ width: "100%", top: "90%", textAlign: "center" }}
            >
              <li>
                <a href="https://hino-trucks.kz/modeli-hino/model-hino-300/polnaya-massa-5-5-t-shassi-xzu/">
                  ПОЛНАЯ МАССА 5,5 Т | ШАССИ XZU
                </a>
              </li>

              <li>
                <a href="https://hino-trucks.kz/modeli-hino/model-hino-300/polnaya-massa-8-5-t-shassi-xzu/">
                  ПОЛНАЯ МАССА 8,5 Т | ШАССИ XZU
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 item-" style={{ minHeight: "auto" }}>
          <div
            className="btn-group"
            style={{ width: "100%", borderBottom: "5px solid red" }}
          >
            <button
              type="button"
              className="btn btn-link btn-lg btn-block dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span
                className="title-red-tov text-left"
                style={{ fontSize: "18px" }}
              >
                <span
                  className="font-red list-rem-hino"
                  style={{ fontSize: "18px !important" }}
                >
                  Средний тоннаж
                </span>
                <span className="caret"></span>
              </span>
            </button>
            <ul
              className="dropdown-menu sub-variant-tov"
              style={{ width: "100%", top: "90%", textAlign: "center" }}
            >
              <li>
                <a href="https://hino-trucks.kz/modeli-hino/model-hino-500/modifikatsiya-gd-shassi-polnoy-massoy-12-0-t/">
                  ПОЛНАЯ МАССА 12,0 Т | ШАССИ GD
                </a>
              </li>

              <li>
                <a href="https://hino-trucks.kz/modeli-hino/model-hino-500/modifikatsiya-gh-shassi-polnoy-massoy-17-0-t/">
                  ПОЛНАЯ МАССА 18,0 Т | ШАССИ GH
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 item-" style={{ minHeight: "auto" }}>
          <div
            className="btn-group"
            style={{ width: "100%", borderBottom: "5px solid red" }}
          >
            <button
              type="button"
              className="btn btn-link btn-lg btn-block dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span
                className="title-red-tov text-left"
                style={{ fontSize: "18px" }}
              >
                <span
                  className="font-red list-rem-hino"
                  style={{ fontSize: "18px !important" }}
                >
                  Крупный тоннаж
                </span>
                <span className="caret"></span>
              </span>
            </button>
            <ul
              className="dropdown-menu sub-variant-tov"
              style={{ width: "100%", top: "90%", textAlign: "center" }}
            >
              <li>
                <a href="https://hino-trucks.kz/modeli-hino/model-hino-700/polnaya-massa-30-7-t-samosval-fs/">
                  ПОЛНАЯ МАССА 30,7 Т | ШАССИ FS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
