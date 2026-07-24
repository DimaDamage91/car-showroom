import { useState } from "react";
import "./ReviewForm.scss";
import type { Review } from "../../shared/Types/Reviews";

interface ReviewFormProps {
  reviews: Review[];
  addComment: (review: Review) => void;
}

export const ReviewForm: React.FC<ReviewFormProps> = ({ reviews, addComment }) => {
  const [nameValue, setNameValue] = useState<string>("");
  const [commentValue, setCommentValue] = useState<string>("");
  const [reviewerEmailValue, setReviewerEmailValue]= useState<string>("")
  const [ratingValue, setRatingValue] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = nameValue.trim();
    const comment = commentValue.trim(); 
    const email = reviewerEmailValue.trim();
        
    if (!comment || !email || !name) {
      return
    }
    
    const newReview: Review = {
      id: reviews.length,
      reviewerName: name,
      rating: ratingValue,
      comment: comment,
      reviewerEmail: email,
      date: new Date().toISOString(),
    };

    addComment(newReview);

    setNameValue("");
    setCommentValue("");
    setReviewerEmailValue("");
    setRatingValue(0);
  }

  return (
    <>
      <div>
        <h2>Add a new review:</h2>
        <form action="" className="comment-form" onSubmit={handleSubmit}>
          <label htmlFor="name">
            Write full name:
            <input
              type="text"
              id="name"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              maxLength={50}
              required
            />
          </label>

          <label htmlFor="rating">
            Choose rating:
            <input
              type="number"
              min="0"
              max="5"
              step="0.01"
              id="rating"
              value={ratingValue}
              onChange={(e) => setRatingValue(Number(e.target.value))}
              required
            />
          </label>

          <label htmlFor="email">
            Write email:
            <input
              type="email"
              id="email"
              value={reviewerEmailValue}
              maxLength={100}
              onChange={(e) => setReviewerEmailValue(e.target.value)}
              required
            />
          </label>

          <label htmlFor="comment">
            Write review:
            <textarea
              name="comment"
              id="comment"
              maxLength={500}
              value={commentValue}
              onChange={(e) => setCommentValue(e.target.value)}
              required
            >
            </textarea>
          </label>

          <button type="submit">
            Add review
          </button>
        </form>
      </div>
    </>
  )
}