class DropPeriodTypesTable < ActiveRecord::Migration
  def change
  	drop_table :period_types, force: true
  end
end
