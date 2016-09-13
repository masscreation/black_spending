class AddTrainingSessionReferenceToWorkoutExercises < ActiveRecord::Migration
  def change
    add_reference :workout_exercises, :training_session, index: true, foreign_key: true
  end
end
