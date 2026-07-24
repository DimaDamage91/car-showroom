import { Link } from "react-router-dom";

import type { Vehicle } from "../../shared/Types/Vehicle";
import "../VehicleCard/VehicleCard.scss";
import { Rating } from "../Rating/Rating";



interface VehicleCardProps {
  vehicle: Vehicle;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  return (
      <Link className="vehicle-link" to={`/vehicles/${vehicle.id}`}>
        <article className="vehicle-card">
          <img className="vehicle-card__image" src={vehicle.thumbnail} alt={vehicle.title} />
          <div className="vehicle-card__name">
            <h3 className="vehicle-card__brand">{vehicle.brand}</h3>
            <h3 className="vehicle-card__title">{vehicle.title}</h3>
          </div>
          <Rating rating={vehicle.rating}/>
          <h4 className="vehicle-card__price">{Math.floor(vehicle.price)} $</h4>
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