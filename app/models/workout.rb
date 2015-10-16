class Workout < ActiveRecord::Base
	belongs_to :training_routine
	belongs_to :category
	has_many :exercises
end
