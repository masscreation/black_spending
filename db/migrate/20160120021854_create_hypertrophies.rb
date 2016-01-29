class CreateHypertrophies < ActiveRecord::Migration
  def change
    create_table :hypertrophies do |t|

      t.timestamps null: false
    end
  end
end
