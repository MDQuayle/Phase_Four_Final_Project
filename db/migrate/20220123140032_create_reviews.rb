class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :title
      t.text :content
      t.integer :likes
      t.integer :movie_id

      t.timestamps
    end
  end
end
