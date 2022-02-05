class Review < ApplicationRecord
    belongs_to :movie
    validates :title, presence: true
    validates :content, length: { minimum: 10 }
end
