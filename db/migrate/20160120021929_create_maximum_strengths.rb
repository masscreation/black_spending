class CreateMaximumStrengths < ActiveRecord::Migration
  def change
    create_table :maximum_strengths do |t|

      t.timestamps null: false
    end
  end
end
