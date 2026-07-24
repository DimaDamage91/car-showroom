import { useEffect, useState } from "react";
import type { Vehicle } from "../../shared/Types/Vehicle";
import { fetchUrl } from "../../shared/FetchFunction/FetchFunction";
import { VehicleList } from "../../components/VehicleList/VehicleList";
import { Loader } from "../../components/Loader/Loader";
import { Search } from "../../components/Search/Search";
import { PRODUCT_API } from "../../shared/Consts/Constants";

export const HomePage = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadVehicle = async() => {
      setIsLoading(true);
      
      try {
        const data = await fetchUrl(`${PRODUCT_API}?limit=194`);
        
        const vehicles = data.products.filter((product: Vehicle) => product.category === "vehicle");
        console.log(data.products);
        setVehicles(vehicles)
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        }
      } finally {
        setIsLoading(false);
      }
    }
    
    loadVehicle()
  }, []);

  const filteredVehicles =
    vehicles.filter((vehicle) =>
      vehicle.brand.toLowerCase().includes(searchQuery.toLowerCase())
      || vehicle.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <Search value={searchQuery} onChange={setSearchQuery}/>
          <VehicleList vehicles={filteredVehicles} />
        </>
      )}
    </div>
  )
}