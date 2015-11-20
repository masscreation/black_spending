class TrainingSession < ActiveRecord::Base
	belongs_to :training_routine
	belongs_to :period
	validates  :training_routine_id, :period_id, presence: true

	# Update the as_json method 
	# to include the training
	# session and exercise_set' users:
	def as_json(options = {})
    	super(options.merge(include: [:training_routine, workout_exercises: {include: :training_routine}]))
  	end
end
