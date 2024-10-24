import "./MainContent.scss";
import contentImg from "./image 54.svg";
import MainContentimg from "./Mask Group.svg";

const MainCotent: React.FC = () => {
  //Этот контент изменяем поэтому лучше всего должен быть рендер
  return (
    <section className="main-content">
      <div className="backround-svg-mark">
        <img
          className="backround-mark-img"
          src={MainContentimg}
          alt="mark"
        ></img>
      </div>
      <div className="container">
        <div className="main-content-inner">
          <div className="main-content-inner-text">
            <p className="main-content-inner-text-inner">Xceed Blog</p>
            <h1 className="main-content-inner-text-inner-content">
              10 Web Design Mistakes and How to Avoid Them
            </h1>
            <p className="main-content-inner-text-inner-content-text">
              Looking for more daily inspiration? Download Muzli
              extension — your go-to source for discovering design ideas from
              world’s top creators!
            </p>
            <p className="text-create-date">
              13.06, 2024 · 2:15 PM · medium.muz.li
            </p>
          </div>

          <div className="content-img">
            <img
              className="contnet-img"
              alt="contnet-img-robot"
              src={contentImg}
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCotent;
