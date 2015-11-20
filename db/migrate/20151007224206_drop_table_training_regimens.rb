class DropTableTrainingRegimens < ActiveRecord::Migration
   def up
    drop_table :training_regimens
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
