class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :likes
  belongs_to :movie
end
