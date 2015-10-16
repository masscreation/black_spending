class AddTrainingRoutineToWorkouts < ActiveRecord::Migration
  def change
    add_reference :workouts, :training_routine, index: true, foreign_key: true
  end
end
