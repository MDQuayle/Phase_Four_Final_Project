class ReviewsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  def index
    if params[:movie_id]
      movie = Movie.find(params[:movie_id])
      reviews = movie.reviews
    else
      reviews = Review.all
    end
    render json: reviews, include: :movie
  end 

    def create
      review = Review.create!(review_params)
      render json: review , status: :created
    end

    def update
        review = Review.find_by(id: params[:id])
        if review
          review.update(review_params)
          render json: review
        else
          render json: { error: "Review not found" }, status: :not_found
        end
    end

    def destroy
        review = Review.find_by(id: params[:id])
        if review
          review.destroy
          head :no_content
        else
          render json: { error: "Review not found" }, status: :not_found
        end
    end 

    private
    def review_params
        params.permit(:title, :content, :likes, :movie_id)
    end
    def render_unprocessable_entity_response(invalid)
      render json: { errors: "Invalid Entry. Please include a title and at least 10 characters for your review" }, status: :unprocessable_entity
    end
    
end
