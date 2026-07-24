import type { Review } from "../../shared/Types/Reviews"
import { ReviewsCard } from "../ReviewsCard/ReviewCard";
import "./ReviewsList.scss";

interface ReviewsListProps {
  reviews: Review[];
}

export const ReviewsList: React.FC<ReviewsListProps> = ({ reviews }) => {
  return (
    <>
      <section className="reviews">
        <h2>Customer Reviews</h2>

        <div className="reviews__list">
          {reviews.map((review) => (
            <ReviewsCard key={review.id} review={review}/>
          ))}
        </div>
      </section>
    </>
  )
}