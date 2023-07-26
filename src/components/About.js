import React from "react";
import backgroundImage from "../assets/images/about.jpg"

const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 pt-4" style={{ minHeight: "400px" }}>
            <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
              <img
                className="position-absolute img-fluid w-100 h-100"
                src={backgroundImage}
                style={{ objectFit: "cover" }}
                alt=""
              />
              <div
                className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5"
                style={{ background: "rgba(0, 0, 0, 0.08)" }}
              >
                <h1 className="display-4 text-white mb-0">
                  3 <span className="fs-4">оффициальных</span>
                </h1>
                <h4 className="text-white">поставщика</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h6 className="text-primary text-uppercase">// О нас //</h6>
            <h1 className="mb-4">
              <span className="text-primary">PartnerCenter</span> является партнером
              Китайских автотранспортных заводов
            </h1>
            <p className="mb-4">
              Благодаря тесному сотрудничеству и глубокому опыту в отрасли,
              PartnerCenter играет важную роль в установлении связей и создании
              деловых возможностей между этими заводами и другими
              заинтересованными сторонами. Через свою обширную сеть и
              всесторонние знания автомобильной промышленности, PartnerCenter
              обеспечивает гладкое и эффективное сотрудничество, помогая
              сокращать разрыв между производителями и их партнерами в Алматы и
              за ее пределами.
            </p>
            <div className="row g-4 mb-3 pb-3">
              <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                <div className="d-flex">
                  <div
                    className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                    style={{ width: "45px", height: "45px" }}
                  >
                    <span className="fw-bold text-secondary">01</span>
                  </div>
                  <div className="ps-3">
                    <h6>
                      Наша команда - профессионалы и эксперты в своей области.
                    </h6>
                    <span>Мы обладаем широким опытом и глубокими знаниями, гарантируя качественное решение ваших потребностей.</span>
                  </div>
                </div>
              </div>
              <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                <div className="d-flex">
                  <div
                    className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                    style={{ width: "45px", height: "45px" }}
                  >
                    <span className="fw-bold text-secondary">02</span>
                  </div>
                  <div className="ps-3">
                    <h6>Центр качественного обслуживания</h6>
                    <span>Независимо от марки или модели, наша команда опытных специалистов гарантирует высокое качество обслуживания, чтобы ваш автомобиль всегда находился в отличном состоянии.</span>
                  </div>
                </div>
              </div>
              <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                <div className="d-flex">
                  <div
                    className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                    style={{ width: "45px", height: "45px" }}
                  >
                    <span className="fw-bold text-secondary">03</span>
                  </div>
                  <div className="ps-3">
                    <h6>Надежность и Гарантия</h6>
                    <span>Доверьте свой автомобиль нашему Центру качественного обслуживания и наслаждайтесь беззаботной поездкой.</span>
                  </div>
                </div>
              </div>
            </div>
            <a href="" className="btn btn-primary py-3 px-5">Узнать больше<i className="fa fa-arrow-right ms-3"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
