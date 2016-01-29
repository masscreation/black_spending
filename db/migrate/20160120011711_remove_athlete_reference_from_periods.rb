class RemoveAthleteReferenceFromPeriods < ActiveRecord::Migration
  def change
  	remove_reference(:periods, :athlete, index: true, foreign_key: true)
  	remove_reference(:periods, :training_routine, index: true, foreign_key: true)
  end
end
