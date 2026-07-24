import type { Review } from "../../shared/Types/Reviews"
import { Rating } from "../Rating/Rating";
import ".//ReviewCard.scss";

interface ReviewProps {
  review: Review;
}

export const ReviewsCard: React.FC<ReviewProps> = ({ review }) => {
  const formattedDate = new Date(review.date).toLocaleDateString();

  return (
    <>
      <article className="review-card">
        <header>
          <h4 className="review-card__name">{review.reviewerName}</h4>
          <Rating rating={review.rating}/>
        </header>
        
        <time dateTime={review.date}>
          {formattedDate}
        </time>
      
        <footer>
          <p className="review-card__text">
            {review.comment}
          </p>
        </footer>
      </article>
    </>
  )
}