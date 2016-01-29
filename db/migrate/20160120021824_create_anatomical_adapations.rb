class CreateAnatomicalAdapations < ActiveRecord::Migration
  def change
    create_table :anatomical_adapations do |t|

      t.timestamps null: false
    end
  end
end
