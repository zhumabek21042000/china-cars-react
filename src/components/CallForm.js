import emailjs from "@emailjs/browser";
import { useRef } from "react";

const CallForm = () => {
  const form = useRef();
  function handleSubmit() {

    // emailjs
    //   .sendForm(
    //     "service_21881v7",
    //     "template_h2rqnq5",
    //     form.current,
    //     "LagDJlRp__sk0ywrI"
    //   )
  }
  return (
    <div
      className="container-fluid bg-secondary booking my-5 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-6 py-5">
            <div className="py-5">
              <h1 className="text-white mb-4">Обратная связь</h1>
              <p className="text-white mb-0">
                Оставьте заявку сейчас и получите профессиональную консультацию
                о наших автомобилях. Наша команда экспертов с удовольствием
                ответит на все ваши вопросы и поможет вам выбрать идеальное
                авто, отвечающее вашим потребностям и предпочтениям. Мы готовы
                поделиться всей необходимой информацией о наших автомобилях, их
                технических характеристиках, возможностях и особенностях.
                Оставьте заявку прямо сейчас, и мы свяжемся с вами в ближайшее
                время для предоставления исчерпывающей консультации и помощи в
                выборе идеального автомобиля для вас.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn"
              data-wow-delay="0.6s"
            >
              <h1 className="text-white mb-4">Оставьте заявку</h1>
              <form id="contactForm" onSubmit={handleSubmit()} ref={form}>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control border-0"
                      placeholder="Ваше имя"
                      style={{ height: "55px", borderRadius: "4px" }}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control border-0"
                      placeholder="Ваша почта"
                      style={{ height: "55px", borderRadius: "4px" }}
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control border-0"
                      name="request"
                      placeholder="Ваше предложение или же запрос (Опционально)"
                      style={{ borderRadius: "4px" }}
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-secondary w-100 py-3"
                      type="submit"
                      style={{ borderRadius: "4px" }}
                    >
                      Отправить
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForm;
