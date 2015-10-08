class CreateTrainingRegimen < ActiveRecord::Migration
  def change
    create_table :training_regimens do |t|
      t.string :name
      t.string :focus
      t.references :trainer, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
