class CreateAthleteTrainingSessions < ActiveRecord::Migration
  def change
    create_table :athlete_training_sessions do |t|
      t.datetime :scheduled_on
      t.boolean :complete
      t.integer :volume
      t.references :training_session, index: true, foreign_key: true
      t.references :athlete, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
