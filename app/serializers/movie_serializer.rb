class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :director, :summary, :release_year
  has_many :reviews
end
