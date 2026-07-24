import type { Vehicle } from "../../shared/Types/Vehicle";
import { VehicleCard } from "../VehicleCard/VehicleCard";
import "../VehicleList/VehicleList.scss";

interface VehicleListProps {
  vehicles: Vehicle[]
}

export const VehicleList: React.FC<VehicleListProps> = ({ vehicles }) => {
  return (
    <>
      <div className="vehicle-list">
        {vehicles.map((vehicle) => (
          <VehicleCard vehicle={vehicle} key={vehicle.id} />
        ))}
      </div>
    </>
  )
}