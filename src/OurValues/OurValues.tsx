import "./OurValues.scss";
import svg1 from "./imgBlocks/Frame 8619.svg";
import svg3 from "./imgBlocks/Frame 8620.svg";
import svg4 from "./imgBlocks/Frame 8621.svg";
import svg5 from "./imgBlocks/Frame 8622.svg";
import svg6 from ".//imgBlocks/image 54 (2).svg";
import svg7 from "./imgBlocks/image 54 (4).svg";
import svg8 from "./imgBlocks/image 54 (3).svg";
import svg9 from "./imgBlocks/image 54 (2).svg";
import svg10 from "./imgBlocks/Frame 8623.svg";
import svg11 from "./imgBlocks/Frame 8623.svg";
import {  OurValuesTypes } from "../Types";
import Mark from '../MainContent/Mask Group.svg'

const OurValues: React.FC = () => {
  const ourValuesConetnt: OurValuesTypes[] = [
    {
      title: "Courageous",
      img: svg1,
      text: "We take responsibility for solving problems and hold ourselves fiercely accountable for success. This commitment to accountability is both individual and collective.",
    },
    {
      title: "Cheerfulness",
      img: svg3,
      text: "We take responsibility for solving problems and hold ourselves fiercely accountable for success. This commitment to accountability is both individual and collective.",
    },
    {
      title: "Empowerment",
      img: svg4,
      text: "Нео раскрывает правду о мире и борется против системы, чтобы освободить человечество.",
    },
    {
      title: "Courageous",
      img: svg5,
      text: "Бэтмен сталкивается с Джокером в битве за будущее Готэма.",
    },
    {
      title: "Cheerfulness",
      img: svg6,
      text: 'Новый "бегущий" сталкивается с загадкой, которая может изменить ход истории.',
    },
    {
      title: "Empowerment",
      img: svg7,
      text: "Киборг из будущего отправляется в прошлое, чтобы предотвратить восстание машин.",
    },
    {
      title: "Courageous",
      img: svg8,
      text: "Джон Константин борется с демонами, чтобы защитить мир от злых сил.",
    },
    {
      title: "Cheerfulness",
      img: svg9,
      text: "Братья Винчестеры охотятся на сверхъестественных существ и спасают мир.",
    },
    {
      title: "Cheerfulness",
      img: svg10,
      text: "В постапокалиптическом мире Макс сражается за выживание против диктатора.",
    },
    {
      title: "Cheerfulness",
      img: svg10,
      text: "Группа подростков становится жертвами загадочного убийцы в маске.",
    },
    {
      title: "Cheerfulness",
      img: svg10,
      text: "We take responsibility for solving problems and hold ourselves fiercely accountable for success. This commitment to accountability is both individual and collective.",
    },
    {
      title: "Cheerfulness",
      img: svg11,
      text: "We take responsibility for solving problems and hold ourselves fiercely accountable for success. This commitment to accountability is both individual and collective.",
    },
  ];

  return (
    <section className="our-values">
      <div className="container">
        <div className="our-values-inner">
          <div className="our-values-text">
            <p className="our-values-txt-content">Our Values</p>
          </div>

          <div className="content-blocks">
           {ourValuesConetnt.map((item)=>(

<div className="content-block">
              <p className="content-block-title">{item.title}</p>
              <div className="content-block-img">
                <img className="content-block-img" alt="content-block-img" src={item.img}/>
              </div>
              <p className="content-block-text">
               {item.text}
              </p>
              <button className="view-more-btn">View more</button>
            </div>
           ))}




            









          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
