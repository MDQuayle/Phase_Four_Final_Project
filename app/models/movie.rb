class Movie < ApplicationRecord
    has_many :reviews
    def self.alphabetize
        Movie.order(:title)
    end
end
