class AddReferenceToAthlete < ActiveRecord::Migration
  def change
  	remove_column :athletes, :level_id, :integer 
    add_reference :athletes, :level, index: true, foreign_key: true
  end
end
