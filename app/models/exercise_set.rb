class ExerciseSet < ActiveRecord::Base
	belongs_to :exercise
	belongs_to :athlete
	belongs_to :training_session

	# Override the as_json method 
	# to include the user:
	def as_json(options = {})
    	super(options.merge(include: :user))
  	end
end
