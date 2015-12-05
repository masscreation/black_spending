class AddCostToTrainingRoutines < ActiveRecord::Migration
  def change
    add_column :training_routines, :cost, :integer
    add_column :training_routines, :free_trial, :boolean
    add_column :training_routines, :free_trial_duration, :integer
  end
end
