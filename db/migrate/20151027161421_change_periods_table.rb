class ChangePeriodsTable < ActiveRecord::Migration
  def change
  	remove_column :periods, :training_program_id, :integer
  	remove_column :periods, :user_id, :integer
  	remove_column :periods, :name, :string
  	remove_column :periods, :period_type_id, :integer
  	add_reference :periods, :training_routine, index: true, foreign_key: true
  	add_reference :periods, :athlete, index: true, foreign_key: true
  	add_reference :periods, :period_type, index: true, foreign_key: true 
  end
end
