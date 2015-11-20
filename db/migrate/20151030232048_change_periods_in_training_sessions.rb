class ChangePeriodsInTrainingSessions < ActiveRecord::Migration
  def change
  	remove_column :training_sessions, :period_id, :integer
  	add_reference :training_sessions, :period_type, index: true, foreign_key: true
  end
end
