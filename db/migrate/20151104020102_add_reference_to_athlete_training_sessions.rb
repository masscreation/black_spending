class AddReferenceToAthleteTrainingSessions < ActiveRecord::Migration
  def change
    add_reference :athlete_training_sessions, :training_routine, index: true, foreign_key: true
  end
end
