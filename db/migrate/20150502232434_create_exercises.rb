class CreateExercises < ActiveRecord::Migration
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :description
      t.references :category
      t.references :workout

      t.timestamps null: false
    end
  end
end
