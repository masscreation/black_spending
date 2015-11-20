class ChangeWorkoutsTable < ActiveRecord::Migration
  def change
  	remove_column :workouts, :training_program_id, :integer
  end
end
