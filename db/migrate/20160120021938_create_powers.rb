class CreatePowers < ActiveRecord::Migration
  def change
    create_table :powers do |t|

      t.timestamps null: false
    end
  end
end
