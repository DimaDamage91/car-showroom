import { useParams } from "react-router-dom" 
import { useEffect, useState } from "react";

import { fetchUrl } from "../../shared/FetchFunction/FetchFunction";
import type { Vehicle } from "../../shared/Types/Vehicle";
import { PRODUCT_API } from "../../shared/Consts/Constants";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import "../VehicleDetailsPage/VehicleDetailsPage.scss";
import { Rating } from "../../components/Rating/Rating";
import { BackButton } from "../../components/BackButton/BackButton";
import type { Review } from "../../shared/Types/Reviews";
import { ReviewsList } from "../../components/ReviewsList/ReviewsList";
import { ReviewForm } from "../../components/ReviewForm/ReviewForm";
import { Loader } from "../../components/Loader/Loader";

export const ProductDetailsPage = () => {
  const { vehicleId } = useParams();
  
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const [reviews, setReviews] = useState<Review[]>([]);

  const STORAGE_REVIEWS_KEY = `vehicle-${vehicleId}-reviews`;

  useEffect(() => {
    if (!vehicle) {
      return 
    }

    localStorage.setItem(STORAGE_REVIEWS_KEY, JSON.stringify(reviews));
  }, [reviews, vehicle, STORAGE_REVIEWS_KEY]);


  useEffect(() => {
    const fetchCurrentVehicle = async () => {
      setIsLoading(true);
      setSelectedImageIndex(0);

      try {
        const currentVehicle = await fetchUrl(`${PRODUCT_API}${vehicleId}`);
        setVehicle(currentVehicle);

        const savedReviews = localStorage.getItem(STORAGE_REVIEWS_KEY);

        if (savedReviews) {
          setReviews(JSON.parse(savedReviews));
        } else {
          setReviews(currentVehicle.reviews);
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchCurrentVehicle();
  }, [vehicleId, STORAGE_REVIEWS_KEY]);

  if (isLoading) {
  return <p><Loader /></p>;
}

if (error) {
  return <div>{error}</div>;
}

if (!vehicle) {
  return <NotFoundPage />;
}

  const discountPercentage = vehicle.discountPercentage;
  const discountPrice = vehicle.price - vehicle.price / 100 * discountPercentage;

  const addComment = (newReview: Review) => {
    setReviews(prev => [...prev, newReview])
  }

  return (
      <>
        <BackButton />
        <div className="vehicle-page">
          <div className="vehicle-page__container">
            <div className="vehicle-page__gallery">
              <img src={vehicle.images[selectedImageIndex]} alt="photo" className="vehicle-page__image"/>
              <div className="vehicle-page__slider">
                {vehicle.images.map((image, index) => (
                  <button
                    onClick={() => setSelectedImageIndex(index)}
                    key={index}
                    className={
                      index === selectedImageIndex
                        ? "vehicle-page__slider__button vehicle-page__slider__button--active"
                        : "vehicle-page__slider__button"
                    }
                  >
                    <img src={image} alt="photo" className="vehicle-page__slider__image"/>
                  </button>
                ))}
              </div>
            </div>
            <div className="vehicle-page__content">
              <div className="vehicle-page__name">
                <h2>{vehicle.brand}</h2>
                <h2>{vehicle.title}</h2>
              </div>
              <div className="vehicle-page__price">
                <div className="vehicle-page__price__origin">
                  <h3
                    className={
                      vehicle.discountPercentage > 0
                        ? "vehicle-page__price__old"
                        : ""  
                    }
                  >
                  {Math.floor(vehicle.price)} $</h3>
                  {vehicle.discountPercentage > 0 && (
                    <div className="vehicle-page__price__discount">
                      <h2>{Math.floor(discountPrice)} $</h2>
                      <h5>-{discountPercentage}%</h5>
                    </div>
                  )}
                </div>
                <p className="vehicle-page__description">{vehicle.description}</p>
              </div>
              <Rating rating={vehicle.rating}/>
              <div className="vehicle-page__dimensions">
                <h4 className="vehicle-page__dimensions__title">Dimensions:</h4>
                <div className="vehicle-page__dimensions__block">
                  <div>
                    <p>Height:</p>
                    <p>Width:</p>
                    <p>Depth:</p>
                  </div>
                  <div className="vehicle-page__dimensions__block__right">
                    <p>{vehicle.dimensions.height}</p>
                    <p>{vehicle.dimensions.width}</p>
                    <p>{vehicle.dimensions.depth}</p>
                  </div>
                </div>
              </div>
              <div className="vehicle-page__sku">
                <h4>SKU:</h4>
                <p>{vehicle.sku}</p>
              </div>
              <div className="vehicle-page__availability">
                <div>
                  <h4>Availability:</h4>
                  <p>Stock:</p>
                </div>
                <div className="vehicle-page__availability__right">
                  <p
                    className={
                      vehicle.availabilityStatus === "In Stock"
                      ? "vehicle-page__availability--success"
                      : "vehicle-page__availability--error"
                    }
                  >
                    {vehicle.availabilityStatus}
                  </p>
                  <p>{vehicle.stock}</p>
                </div>
              </div>
              <div className="vehicle-page__customer">
                <h4 className="vehicle-page__customer__title">Customer information:</h4>
                <div className="vehicle-page__customer__block">
                  <div>
                    <p>Policy:</p>
                    <p>Shipping:</p>
                    <p>Warranty:</p>
                  </div>
                  <div className="vehicle-page__customer__block__right">
                    <p>{vehicle.returnPolicy}.</p>
                    <p>{vehicle.shippingInformation}.</p>
                    <p>{vehicle.warrantyInformation}.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="vehicle-page__reviews">
            <div className="vehicle-page__form">
              <ReviewForm addComment={addComment} reviews={reviews}/>
            </div>
            <div className="vehicle-page__comments">
              <ReviewsList reviews={reviews} />
            </div>
          </div>
        </div>
      </>
  )
}