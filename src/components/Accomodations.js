import React from "react";
import serviceImage1 from "../assets/images/service-1.jpg"
import serviceImage2 from "../assets/images/service-2.jpg"
import serviceImage3 from "../assets/images/service-3.jpg"
import serviceImage4 from "../assets/images/service-4.jpg"

const Accomodations = () => {
  return (
    <div className="container-xxl service py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="text-primary text-uppercase">// Сервисы //</h6>
          <h1 className="mb-5">Узнайте больше о нашем сервисе</h1>
        </div>
        <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
          <div className="col-lg-4">
            <div className="nav w-100 nav-pills me-4">
              <button
                className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active"
                data-bs-toggle="pill"
                data-bs-target="#tab-pane-1"
                type="button"
              >
                <i className="fa fa-car-side fa-2x me-3"></i>
                <h4 className="m-0">Консультация по авто</h4>
              </button>
              <button
                className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                data-bs-toggle="pill"
                data-bs-target="#tab-pane-2"
                type="button"
              >
                <i className="fa fa-car fa-2x me-3"></i>
                <h4 className="m-0">Диагностика</h4>
              </button>
              <button
                className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                data-bs-toggle="pill"
                data-bs-target="#tab-pane-3"
                type="button"
              >
                <i className="fa fa-cog fa-2x me-3"></i>
                <h4 className="m-0">Техническая сторона</h4>
              </button>
              <button
                className="nav-link w-100 d-flex align-items-center text-start p-4 mb-0"
                data-bs-toggle="pill"
                data-bs-target="#tab-pane-4"
                type="button"
              >
                <i className="fa fa-oil-can fa-2x me-3"></i>
                <h4 className="m-0">Чай во время ожидания</h4>
              </button>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="tab-content w-100">
              <div className="tab-pane fade show active" id="tab-pane-1">
                <div className="row g-4">
                  <div className="col-md-6" style={{ minHeight: "350px" }}>
                    <div className="position-relative h-100">
                      <img
                        className="position-absolute img-fluid w-100 h-100"
                        src={serviceImage1}
                        style={{ objectFit: "cover" }}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="mb-3">Консультация</h3>
                    <p className="mb-4">
                      Наша команда экспертов по автомобилям с радостью поможет
                      вам принять информированное решение. Мы учтем ваши
                      предпочтения, бюджет и потребности, чтобы предложить вам
                      наилучший вариант. Будь то новый автомобиль или
                      подержанный, электрический или с бензиновым двигателем,
                      наши консультанты обладают глубокими знаниями о рынке и
                      помогут вам найти идеальный автомобиль, соответствующий
                      вашим ожиданиям.
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>Все
                      возможные варианты
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>Расчёт
                      кредита
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>Полная
                      диагностика
                    </p>
                    <a href="" className="btn btn-primary py-3 px-5 mt-3">
                      Детали<i className="fa fa-arrow-right ms-3"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-pane-2">
                <div className="row g-4">
                  <div className="col-md-6" style={{ minHeight: "350px" }}>
                    <div className="position-relative h-100">
                      <img
                        className="position-absolute img-fluid w-100 h-100"
                        src={serviceImage2}
                        style={{ objectFit: "cover" }}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="mb-3">Диагностика авто</h3>
                    <p className="mb-4">
                      Проведем полную диагностику вашего автомобиля для
                      определения возможных проблем и обеспечения его надежной
                      работы. Наши опытные техники используют передовое
                      оборудование для точного выявления неисправностей и
                      предоставления рекомендаций по ремонту или техническому
                      обслуживанию.
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>Точная и
                      всесторонняя проверка
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>
                      Экспертное мнение и рекомендации
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>Экономия
                      времени и денег
                    </p>
                    <a href="" className="btn btn-primary py-3 px-5 mt-3">
                      Детали<i className="fa fa-arrow-right ms-3"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-pane-3">
                <div className="row g-4">
                  <div className="col-md-6" style={{ minHeight: "350px" }}>
                    <div className="position-relative h-100">
                      <img
                        className="position-absolute img-fluid w-100 h-100"
                        src={serviceImage3}
                        style={{ objectFit: "cover" }}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="mb-3">Техническая сторона</h3>
                    <p className="mb-4">
                      Проведем полную диагностику вашего автомобиля для
                      определения возможных проблем и обеспечения его надежной
                      работы. Наши опытные техники используют передовое
                      оборудование для точного выявления неисправностей и
                      предоставления рекомендаций по ремонту или техническому
                      обслуживанию.
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>Точная и
                      всесторонняя проверка
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>
                      Экспертное мнение и рекомендации
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>Экономия
                      времени и денег
                    </p>
                    <a href="" className="btn btn-primary py-3 px-5 mt-3">
                      Детали<i className="fa fa-arrow-right ms-3"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-pane-4">
                <div className="row g-4">
                  <div className="col-md-6" style={{ minHeight: "350px" }}>
                    <div className="position-relative h-100">
                      <img
                        className="position-absolute img-fluid w-100 h-100"
                        src={serviceImage4}
                        style={{ objectFit: "cover" }}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="mb-3">Чаепитие</h3>
                    <p className="mb-4">
                      Наша команда экспертов любит пить чай
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>Черный
                      чай
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>С молоком
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>Зеленый
                      чай
                    </p>
                    <a href="" className="btn btn-primary py-3 px-5 mt-3">
                      Детали<i className="fa fa-arrow-right ms-3"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accomodations;
