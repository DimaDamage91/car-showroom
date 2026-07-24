import { Link } from 'react-router-dom';
import "../BackButton/BackButton.scss";

export const BackButton: React.FC = () => {

  return (
    <>
      <Link className="vehicle-link" to="/">
        <div className="back-button">
            <button
              className="back-button__block"
            >
            <img
              src={`${import.meta.env.BASE_URL}Chevron(Arrow-Left).png`}
              alt="logo"
              className="back-button__img"
            />
           <p className="back-button__name">Back</p>
          </button>
        </div>
        </Link>
    </>
  )
}