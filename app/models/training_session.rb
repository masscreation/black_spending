class TrainingSession < ActiveRecord::Base
	belongs_to :athlete
	belongs_to :period
	belongs_to :category
	has_many :exercise_sets
	accepts_nested_attributes_for :exercise_sets

	# Update the as_json method 
	# to include the training
	# session and exercise_set' users:
	def as_json(options = {})
    	super(options.merge(include: [:user, exercise_sets: {include: :user}]))
  	end
end
