class Workout < ActiveRecord::Base
	resourcify
	has_many :workout_exercises
	has_many :exercises, through: :workout_exercises
end
