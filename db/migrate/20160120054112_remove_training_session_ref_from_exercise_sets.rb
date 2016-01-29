class RemoveTrainingSessionRefFromExerciseSets < ActiveRecord::Migration
  def change
    remove_column :exercise_sets, :training_session_id, :integer
    remove_column :exercise_sets, :exercise_id, :integer
    add_reference :exercise_sets, :athlete_training_session, index: true, foreign_key: true
    add_reference :exercise_sets, :workout_exercise, index: true, foreign_key: true
  end
end
