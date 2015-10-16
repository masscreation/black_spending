class AddTrainingRoutineToTrainingSessions < ActiveRecord::Migration
  def change
    add_reference :training_sessions, :training_routine, index: true, foreign_key: true
  end
end
