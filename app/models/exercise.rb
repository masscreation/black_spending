class Exercise < ActiveRecord::Base
	belongs_to :category
	has_many :workout_exercises
	has_many :workouts, through: :workout_exercises
	# validates :name, :description, :instructions, :video_url, presence: true
end
