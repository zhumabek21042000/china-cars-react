const TopBar = () => {
  return (
    <div className="container-fluid bg-light p-0">
      <div className="row gx-0 d-none d-lg-flex">
        <div className="col-lg-7 px-5 text-start">
          <div className="h-100 d-inline-flex align-items-center py-3 me-4">
            <small className="far fa-bookmark text-primary me-2"></small>
            <small>Машины легкого и грузового типа из Китая</small>
          </div>
          <div className="h-100 d-inline-flex align-items-center py-3">
            <small className="far fa-clock text-primary me-2"></small>
            <small> Пн-Пт: 9:00 - 18:00</small>
          </div>
        </div>
        <div className="col-lg-5 px-5 text-end">
          <div className="h-100 d-inline-flex align-items-center py-3 me-4">
            <small className="fa fa-phone-alt text-primary me-2"></small>
            <small>testest</small>
          </div>
          <div className="h-100 d-inline-flex align-items-center">
            <a className="btn btn-sm-square bg-white text-primary me-1" href="">
              <i className="fab fa-telegram"></i>
            </a>
            <a className="btn btn-sm-square bg-white text-primary me-1" href="">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a className="btn btn-sm-square bg-white text-primary me-0" href="">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
