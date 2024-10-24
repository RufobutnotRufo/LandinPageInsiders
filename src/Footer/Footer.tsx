import "./Footer.scss";
import svg1 from "./browseLinks/Behance Fill.svg";
import svg2 from "./browseLinks/Dribbble Fill.svg";
import svg3 from "./browseLinks/Facebook Fill.svg";
import svg4 from "./browseLinks/Instagram Fill.svg";
import svg5 from "./browseLinks/u_telegram.svg";
import svg6 from "./browseLinks/Vector (11).svg";

import LogoSvg from "../Header/logo.svg";

const Footer: React.FC = () => {
  const footerItems: string[] = [
    "Success Stories",
    "Home",
    "Services",
    "Blog",
    "Blog-us",
    "Career",
  ];
  const browseLinks: any = [svg1, svg2, svg3, svg4, svg5, svg6];

  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-logo-svg">
              <img src={LogoSvg} alt="logo" />
            </div>
            <div className="footer-main-menu">
              <ul className="footer-main-meu-items">
                {footerItems.map((item) => (
                  <li className="footer-main-menu-item">
                    <a className="footer-main-menu-item-link">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-links">
              <ul className="footer-links-items">
                {browseLinks.map((item: any) => (
                  <li className="footer-main-menu-item">
                  <img src={item}></img>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
