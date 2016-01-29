class ChangePeriodAttributes < ActiveRecord::Migration
  def change
  	add_column :periods, :name, :string
  	add_column :periods, :type, :string
  end
end
