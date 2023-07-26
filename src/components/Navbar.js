import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.jpg"
import TopBar from "./TopBar";

const Navbar = () => {
  return (
    <>
    <TopBar></TopBar>
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <Link
        to="/"
        className="navbar-brand d-flex align-items-center px-4 px-lg-5"
      >
        <h2 className="m-0 text-primary">
          <img className="logo" src={Logo} alt="Logo" />
        </h2>
      </Link>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Link to="/" className="nav-item nav-link active">
            Главная
          </Link>
          <Link to="/about" className="nav-item nav-link">
            О нас
          </Link>
          <Link to="/services" className="nav-item nav-link">
            Сервисы
          </Link>
          <div className="nav-item dropdown">
            <Link
              to="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Страницы
            </Link>
            <div className="dropdown-menu fade-up m-0">
              <Link to="nadstroiki" className="dropdown-item">
                Надстройки
              </Link>
              <Link to="models/all" className="dropdown-item">
                Модели
              </Link>
              <Link to="tonnage" className="dropdown-item">
                Тоннажы
              </Link>
            </div>
          </div>
        </div>

        <Link
          to="/catalog"
          className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
        >
          Каталог<i className="fa fa-arrow-right ms-3"></i>
        </Link>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
