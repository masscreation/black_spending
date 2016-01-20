class RemoveReferencesToPeriodTypes < ActiveRecord::Migration
  def change
  	remove_reference(:periods, :period_type, index: true, foreign_key: true)
  	remove_reference(:training_sessions, :period_type, index: true, foreign_key: true)
  end
end
