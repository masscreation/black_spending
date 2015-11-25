class ChangeAthletesAge < ActiveRecord::Migration
  def change
  	add_column :athletes, :birthdate, :datetime
  	remove_column :athletes, :age, :integer
  end
end
