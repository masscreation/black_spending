class CreateAthletes < ActiveRecord::Migration
  def change
    create_table :athletes do |t|
      t.integer :rank_id
      t.integer :level_id
      t.integer :height
      t.integer :weight
      t.integer :age

      t.timestamps null: false
    end
  end
end
