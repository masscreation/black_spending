class Workout < ActiveRecord::Base
	resourcify
	belongs_to :trainer
	has_many :workout_exercises
	has_many :exercises, through: :workout_exercises
end
