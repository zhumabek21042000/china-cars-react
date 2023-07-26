const Facts = () => {
  return (
    <div className="container-fluid fact bg-dark my-5 py-5">
      <div className="container">
        <div className="row g-4">
          <div
            className="col-md-6 col-lg-3 text-center wow fadeIn"
            data-wow-delay="0.1s"
          >
            <i className="fa fa-check fa-2x text-white mb-3"></i>
            <h2 className="text-white mb-2" data-toggle="counter-up">
              2
            </h2>
            <p className="text-white mb-0">Года опыта</p>
          </div>
          <div
            className="col-md-6 col-lg-3 text-center wow fadeIn"
            data-wow-delay="0.3s"
          >
            <i className="fa fa-users-cog fa-2x text-white mb-3"></i>
            <h2 className="text-white mb-2" data-toggle="counter-up">
              12
            </h2>
            <p className="text-white mb-0">Профессиональных экспертов</p>
          </div>
          <div
            className="col-md-6 col-lg-3 text-center wow fadeIn"
            data-wow-delay="0.5s"
          >
            <i className="fa fa-users fa-2x text-white mb-3"></i>
            <h2 className="text-white mb-2" data-toggle="counter-up">
              55
            </h2>
            <p className="text-white mb-0">Довольных клиентов</p>
          </div>
          <div
            className="col-md-6 col-lg-3 text-center wow fadeIn"
            data-wow-delay="0.7s"
          >
            <i className="fa fa-car fa-2x text-white mb-3"></i>
            <h2 className="text-white mb-2" data-toggle="counter-up">
              102
            </h2>
            <p className="text-white mb-0">Автотранспортов</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
