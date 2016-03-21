class ExerciseSet < ActiveRecord::Base
	resourcify
	belongs_to :workout_exercise
	# Athlete performs many exercise_sets 
	belongs_to :athlete_training_session
	validates :athlete_id, :athlete_training_session_id, :exercise_id, :completed, presence: true
	# Override the as_json method 
	# to include the user:
	def as_json(options = {})
    	super(options.merge(include: :user))
  	end
end
