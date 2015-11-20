class RemoveAttributesFromTrainingSessions < ActiveRecord::Migration
  def change
    remove_column :training_sessions, :athlete_id, :integer
    remove_column :training_sessions, :volume, :integer
    remove_column :training_sessions, :complete, :boolean
    remove_column :training_sessions, :scheduled_on, :datetime
  end
end
