class CreateExerciseSets < ActiveRecord::Migration
  def change
    create_table :exercise_sets do |t|
      t.boolean :completed
      t.belongs_to :athlete
      t.belongs_to :training_session
      t.belongs_to :exercise

      t.timestamps null: false
    end
  end
end
