import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import navigateSvg from "../SliderContent/Button.svg";
import "./SliderContent.scss";
import "swiper/swiper-bundle.css";
import { sliderComponents } from "../Types";
import img from "./image 55 (2).svg";

const SliderContent: React.FC = () => {
  const sliderComponents: sliderComponents[] = [
    { title: "Printify Blog", img: img },
    { title: "Printify Blog", img: img },
    { title: "Printify Blog", img: img },
  ];

  // Создайте реф для Swiper
  const swiperRef = useRef<any>(null);

  // Функция для перехода на следующий слайд
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext(); // Перейти к следующему слайду
    }
  };

  // Функция для перехода на предыдущий слайд
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev(); // Вернуться к предыдущему слайду
    }
  };

  return (
    <div className="slider-content">
      <div className="slider-content-inner container">
        <Swiper
          slidesPerView={1.6}
          spaceBetween={25}
          className="mySwiper"
          ref={swiperRef} // Привязка рефа к Swiper
        >
          {sliderComponents.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="slider-component">
                <p className="slider-text">{item.title}</p>
                <div className="slider-img">
                  <img src={item.img} alt={item.title} />
                </div>
                <a className="see-more">See More</a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-btns container">
        <button className="swiper-btn" onClick={handlePrev}>
          <img src={navigateSvg} alt="Previous" />
        </button>
        <button className="swiper-btn navigateSvg" onClick={handleNext}>
          <img src={navigateSvg} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default SliderContent;
