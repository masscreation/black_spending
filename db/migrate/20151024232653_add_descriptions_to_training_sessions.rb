class AddDescriptionsToTrainingSessions < ActiveRecord::Migration
  def change
    add_column :training_sessions, :order_in_routine, :integer
    add_column :training_sessions, :description, :string
    add_column :training_sessions, :session_type, :string
  end
end
