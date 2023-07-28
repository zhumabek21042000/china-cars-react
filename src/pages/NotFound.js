import React, {useEffect} from 'react'
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";
import { Link, useLocation } from "react-router-dom";

const NotFoundBlock = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
            <h1 className="display-1">404</h1>
            <h1 className="mb-4">Страница не найдена :(</h1>
            <p className="mb-4">
              Приносим свои извинения, страница, которую Вы ищете, не найдена!
              Вернитесь на главную страницу или воспользуйтесь поиском.
            </p>
            <Link to="/" className="btn btn-primary rounded-pill py-3 px-5">
              На главную
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const NotFound = () => {
  return (
    <>
      <Navbar></Navbar>
      <NotFoundBlock></NotFoundBlock>
      <Footer></Footer>
    </>
  );
};
export default NotFound;
