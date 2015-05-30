class CreateWorkouts < ActiveRecord::Migration
  def change
    create_table :workouts do |t|
      t.string :name
      t.string :description
      t.references :training_program

      t.timestamps null: false
    end
  end
end
