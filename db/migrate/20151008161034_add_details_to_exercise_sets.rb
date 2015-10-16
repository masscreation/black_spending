class AddDetailsToExerciseSets < ActiveRecord::Migration
  def change
    add_column :exercise_sets, :tempo, :string
    add_column :exercise_sets, :load, :integer
    add_column :exercise_sets, :rest, :integer
  end
end
