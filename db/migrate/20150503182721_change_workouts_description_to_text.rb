class ChangeWorkoutsDescriptionToText < ActiveRecord::Migration
  def change
  	change_column :workouts, :description, :text, null: false
  end
end
