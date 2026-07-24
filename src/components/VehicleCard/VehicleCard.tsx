import { Link } from "react-router-dom";

import type { Vehicle } from "../../shared/Types/Vehicle";
import "../VehicleCard/VehicleCard.scss";
import { Rating } from "../Rating/Rating";



interface VehicleCardProps {
  vehicle: Vehicle;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {

  const discountPercentage = vehicle.discountPercentage;
  const discountPrice = vehicle.price - vehicle.price / 100 * discountPercentage;

  return (
      <Link className="vehicle-link" to={`/vehicles/${vehicle.id}`}>
        <article className="vehicle-card">
          <img className="vehicle-card__image" src={vehicle.thumbnail} alt={vehicle.title} />
          <div className="vehicle-card__name">
            <h3 className="vehicle-card__brand">{vehicle.brand}</h3>
            <h3 className="vehicle-card__title">{vehicle.title}</h3>
          </div>
          <Rating rating={vehicle.rating}/>
          <div className="vehicle-page__price__origin">
                  <h5
                    className={
                      vehicle.discountPercentage > 0
                        ? "vehicle-page__price__old"
                        : ""  
                    }
                  >
                  {Math.floor(vehicle.price)} $</h5>
                  {vehicle.discountPercentage > 0 && (
                    <div className="vehicle-page__price__discount">
                      <h3>{Math.floor(discountPrice)} $</h3>
                      <h6>-{discountPercentage}%</h6>
                    </div>
                  )}
                </div>
          <p
            className={`availability ${
              vehicle.availabilityStatus === "In Stock"
                ? "availability--success"
                : "availability--error"
            }`}
          >
            {vehicle.availabilityStatus}</p>
        </article>
      </Link>
  )
}