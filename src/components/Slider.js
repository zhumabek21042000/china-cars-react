import firstBackgroundImage from "../assets/images/carousel/bg-1.jpg"
import secondBackgroundImage from "../assets/images/carousel/bg-2.jpg"

const Slider = () => {
  return (
    <div className="container-fluid p-0 mb-5">
      <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src={firstBackgroundImage} alt="Image" />
            <div className="carousel-caption d-flex align-items-center">
              <div className="container">
                <div className="row align-items-center justify-content-center justify-content-lg-start">
                  <div className="col-10 col-lg-7 text-center text-lg-start">
                    <h6 className="text-white text-uppercase mb-3 animated slideInDown">
                      // Наши сервисы //
                    </h6>
                    <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">
                      Свежие грузовые машины с Китая
                    </h1>
                    <a
                      href=""
                      className="btn btn-primary py-3 px-5 animated slideInDown"
                    >
                      Узнать больше<i className="fa fa-arrow-right ms-3"></i>
                    </a>
                  </div>
                  <div className="col-lg-5 d-none d-lg-flex animated zoomIn"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src={secondBackgroundImage} alt="Image" />
            <div className="carousel-caption d-flex align-items-center">
              <div className="container">
                <div className="row align-items-center justify-content-center justify-content-lg-start">
                  <div className="col-10 col-lg-7 text-center text-lg-start">
                    <h6 className="text-white text-uppercase mb-3 animated slideInDown">
                      // Наши сервисы //
                    </h6>
                    <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">
                      ЭлектроМашины нового поколения
                    </h1>
                    <a
                      href=""
                      className="btn btn-primary py-3 px-5 animated slideInDown"
                    >
                      Узнать больше<i className="fa fa-arrow-right ms-3"></i>
                    </a>
                  </div>
                  <div className="col-lg-5 d-none d-lg-flex animated zoomIn"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
