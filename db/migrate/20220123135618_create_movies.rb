class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :director
      t.string :genre
      t.text :summary
      t.integer :release_year

      t.timestamps
    end
  end
end
