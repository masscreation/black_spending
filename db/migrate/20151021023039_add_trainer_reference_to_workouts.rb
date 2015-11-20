class AddTrainerReferenceToWorkouts < ActiveRecord::Migration
  def change
    add_reference :workouts, :trainer, index: true, foreign_key: true
    remove_reference :workouts, :training_routine, index: true, foreign_key: true
  end
end
