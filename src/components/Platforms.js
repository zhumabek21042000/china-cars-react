import { Link } from "react-router-dom";
import kmuImg from "../assets/images/nadstroyki/kmu.png";
import tentImg from "../assets/images/nadstroyki/tent.png";
import musorovozImg from "../assets/images/nadstroyki/msrvz.png";
import samosvalImg from "../assets/images/nadstroyki/smsvl.png";
import furgonIzotermImg from "../assets/images/nadstroyki/iztrm.png";
import cisternImg from "../assets/images/nadstroyki/cstrn.png";
import promtovarImg from "../assets/images/nadstroyki/prmtv.png";
import refrigerratorImg from "../assets/images/nadstroyki/rfrgrt.png";
import evacuatorImg from "../assets/images/nadstroyki/evctr.png";

const Platforms = () => {
  return (
    <div className="container my-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="row text-center">
        <h6 className="text-primary text-uppercase mb-3">// О НАДСТРОЙКАХ //</h6>
        <div className="col-lg-4 col-md-6 col-sm-6 item-ndstr">
          <span className="item-ndstr-title"> БОРТОВАЯ ПЛАТФОРМА + КМУ </span>
          <div className="item-ndstr-img">
            <Link to="platforms/kmu">
              <img src={kmuImg} />
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 item-ndstr">
          <span className="item-ndstr-title"> БОРТОВАЯ ПЛАТФОРМА + ТЕНТ </span>
          <div className="item-ndstr-img">
            <Link to="platforms/tent">
              <img src={tentImg} />
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 item-ndstr">
          <span className="item-ndstr-title"> МУСОРОВОЗ </span>
          <div className="item-ndstr-img">
            <Link to="platforms/musorovoz">
              <img src={musorovozImg} />
            </Link>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-6 item-ndstr">
          <span className="item-ndstr-title"> САМОСВАЛ </span>
          <div className="item-ndstr-img">
            <Link to="platforms/samosval">
              <img src={samosvalImg} />
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 item-ndstr">
          <span className="item-ndstr-title"> ФУРГОН ИЗОТЕРМИЧЕСКИЙ </span>
          <div className="item-ndstr-img">
            <Link to="platforms/furgon-izotermicheskiy">
              <img src={furgonIzotermImg} />
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 item-ndstr">
          <span className="item-ndstr-title"> ФУРГОН ПРОМТОВАРНЫЙ </span>
          <div className="item-ndstr-img">
            <Link to="platforms/furgon-promtovar">
              <img src={promtovarImg} />
            </Link>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-6 item-ndstr">
          <span className="item-ndstr-title"> ФУРГОН РЕФРИЖЕРАТОР </span>
          <div className="item-ndstr-img">
            <Link to="platforms/furgon-refrigerrator">
              <img src={refrigerratorImg} />
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 item-ndstr">
          <span className="item-ndstr-title"> ЦИСТЕРНА </span>
          <div className="item-ndstr-img">
            <Link to="platforms/cistern">
              <img src={cisternImg} />
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 item-ndstr">
          <span className="item-ndstr-title">ЭВАКУАТОР СО СДВИЖНОЙ ПЛАТФОРМОЙ</span>
          <div className="item-ndstr-img">
            <Link to="platforms/evacuator">
              <img src={evacuatorImg} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Platforms;
