class RemoveReferencesFromTrainingRoutines < ActiveRecord::Migration
  def change
    remove_reference :training_routines, :trainer, index: true, foreign_key: true
    remove_reference :workouts, :trainer, index: true, foreign_key: true
  end
end
