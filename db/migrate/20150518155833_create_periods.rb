class CreatePeriods < ActiveRecord::Migration
  def change
    create_table :periods do |t|
      t.string :name
      t.date :start_date
      t.date :end_date
      t.integer :duration_weeks
      t.belongs_to :period_type
      t.belongs_to :user
      t.belongs_to :training_program
      t.timestamps null: false
    end
  end
end
