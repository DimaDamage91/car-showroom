import { Link } from "react-router-dom";
import "../Header/Header.scss";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <Link to="/">
            <h2 className="header__title">CAR SHOWROOM</h2>
          </Link>
        </div>
      </header>
    </>
  )
}