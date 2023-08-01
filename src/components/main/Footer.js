const Footer = () => {
  return (
    <div
      className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Контакты</h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3"></i>testtest
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3"></i>+77777777
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3 email"></i>testtest
            </p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-telegram"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Время работы</h4>
            <h6 className="text-light">Понедельник - Пятница:</h6>
            <p className="mb-4">09:00 - 18:00</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Сервисы</h4>
            <a className="btn btn-link" href="">
              Диагностика
            </a>
            <a className="btn btn-link" href="">
              Консультация
            </a>
            <a className="btn btn-link" href="">
              Составление договора
            </a>
            <a className="btn btn-link" href="">
              Логистика
            </a>
            <a className="btn btn-link" href="">
              Узнать больше...
            </a>
          </div>
          <form className="col-lg-3 col-md-6" id="contactForm">
            <div>
              <h4 className="text-light mb-4">Новости</h4>
              <p>Не упустите свежие новостные данные.</p>
              <div className="position-relative mx-auto" style={{maxWidth: "400px"}}>
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Ваша почта"
                />
                <button
                  type="submit"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  <i className="far fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a className="border-bottom" href="#">
                PartnerCenter
              </a>
              . Все права защищены.
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="">На главную</a>
                <a href="">Помощь</a>
                <a href="">FAQs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;