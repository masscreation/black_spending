class TrainingSession < ActiveRecord::Base
	belongs_to :training_routine
	belongs_to :period
	has_many   :athlete_training_sessions
	validates  :training_routine_id, :period_id, presence: true

	
	def as_json(options = {})
    	super(options.merge(include: [:training_routine, workout_exercises: {include: :training_routine}]))
  	end
end
