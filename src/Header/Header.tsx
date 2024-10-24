import "./Header.scss";
import LogoSvg from "../Header/logo.svg";

const Header: React.FC = () => {
  const headerMainMenuItems: string[] = [
    "Home",
    "Success Stories",
    "Services",
    "Blog",
    "About us",
    "Career",
  ];

  return (
    <div className="header">
      <div className="container">
        <div className="header-inner">
          <div className="logo">
            <img className="logo-img" src={LogoSvg} />
          </div>

          <div className="hader-nav-menu">
            <ul className="header-nav-menu-items">
              {headerMainMenuItems.map((item: any) => (
                <li className="header-nav-menu-item">
                  <a className="header-nav-menu-item-link">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="user-emenet">
            <button className="sign">Sign Up</button>|
            <button className="sign">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
