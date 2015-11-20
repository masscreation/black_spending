class CreateEnrollments < ActiveRecord::Migration
  def change
    create_table :enrollments do |t|
      t.references :athlete, index: true, foreign_key: true
      t.references :training_routine, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
