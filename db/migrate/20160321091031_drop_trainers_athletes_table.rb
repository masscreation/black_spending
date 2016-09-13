class DropTrainersAthletesTable < ActiveRecord::Migration
  def change
  	drop_table :trainers
  	drop_table :athletes
  	remove_column :exercise_sets, :athlete_id, :integer
  end
end
