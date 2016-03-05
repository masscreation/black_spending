class CreateRoutineTags < ActiveRecord::Migration
  def change
    create_table :routine_tags do |t|
      t.references :training_routine
      t.references :tag

      t.timestamps null: false
    end
  end
end
