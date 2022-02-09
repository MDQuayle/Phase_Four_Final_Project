class MoviesController < ApplicationController
    def index
        movies = Movie.all
        render json: movies, status: :ok
    end
    def show
        movie = Movie.find_by(id: params[:id])
        render json: movie
    end
    def alphabetize
        movies = Movie.alphabetize
        render json: movies
    end
end
