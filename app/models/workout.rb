class Workout < ActiveRecord::Base
	resourcify
	validates :name, :description, presence: true 
	has_many :workout_exercises
	has_many :exercises, through: :workout_exercises
end
