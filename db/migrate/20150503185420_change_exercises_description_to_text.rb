class ChangeExercisesDescriptionToText < ActiveRecord::Migration
  def change
  	change_column :exercises, :description, :text, null: false
  end
end
