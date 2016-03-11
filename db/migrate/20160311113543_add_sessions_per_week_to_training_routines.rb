class AddSessionsPerWeekToTrainingRoutines < ActiveRecord::Migration
  def change
    add_column :training_routines, :sessions_per_week, :integer
  end
end
