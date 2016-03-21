class RemoveReferencesFromAthleteTrainingSessions < ActiveRecord::Migration
  def change
    remove_reference :athlete_training_sessions, :athlete, index: true, foreign_key: true
    remove_reference :enrollments, :athlete, index: true, foreign_key: true
  end
end
