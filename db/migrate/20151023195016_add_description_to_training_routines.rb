class AddDescriptionToTrainingRoutines < ActiveRecord::Migration
  def change
    add_column :training_routines, :description, :string
  end
end
