class TrainingSession < ActiveRecord::Base
	belongs_to :athlete
	belongs_to :training_routine
	belongs_to :period
	has_many :exercise_sets
	validates :athlete_id, :training_routine_id, presence: true
	accepts_nested_attributes_for :exercise_sets, allow_destroy: true

	# Update the as_json method 
	# to include the training
	# session and exercise_set' users:
	def as_json(options = {})
    	super(options.merge(include: [:user, exercise_sets: {include: :user}]))
  	end
end
