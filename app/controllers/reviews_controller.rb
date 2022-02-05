class ReviewsController < ApplicationController
    def index
      reviews = Review.find_by(movie_id: params[:id])
      render json: reviews
    end
    
    def create
        review = Review.create!(review_params)
        render json: review, status: :created
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
        params.permit(:title, :content)
    end
    
end
