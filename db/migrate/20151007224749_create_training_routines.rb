class CreateTrainingRoutines < ActiveRecord::Migration
  def change
    create_table :training_routines do |t|
      t.string :name
      t.string :focus
      t.integer :duration_weeks
      t.references :trainer, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
