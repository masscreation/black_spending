class Workout < ActiveRecord::Base
	belongs_to :training_routine
	belongs_to :category
	has_many :workout_exercises
	has_many :exercises, through: :workout_exercises
end
