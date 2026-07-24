import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import "../Rating/Rating.scss";

interface RatingProps {
  rating: number;
}

export const Rating: React.FC<RatingProps> = ({ rating }) => {
  const roundedRating = Math.round(rating * 2) / 2;
  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating % 1 !== 0;

  return (
    <>
      <div className="rating">
        <p className="rating__number">{rating}</p>
          {Array.from({ length: 5 }).map((_, index) => {
            if (index < fullStars) {
              return <FaStar
                key={index}
                color="#facc15"
              />
            }

            if (index === fullStars && hasHalfStar) {
              return <FaStarHalfAlt
                key={index}
                color="#facc15"
              />;
            }

            return <FaRegStar
              key={index}
              color="#d1d5db"
            />
          })}
      </div>
    </>
  )
}