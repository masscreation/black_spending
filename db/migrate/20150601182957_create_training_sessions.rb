class CreateTrainingSessions < ActiveRecord::Migration
  def change
    create_table :training_sessions do |t|
      t.datetime :scheduled_on
      t.boolean :complete
      t.integer :volume
      t.belongs_to :category
      t.belongs_to :athlete
      t.belongs_to :period

      t.timestamps null: false
    end
  end
end
