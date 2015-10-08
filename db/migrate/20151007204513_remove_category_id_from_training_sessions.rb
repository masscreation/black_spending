class RemoveCategoryIdFromTrainingSessions < ActiveRecord::Migration
  def change
    remove_column :training_sessions, :category_id, :integer
  end
end
