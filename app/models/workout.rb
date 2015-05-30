class Workout < ActiveRecord::Base
	belongs_to :training_program
	has_many :exercises
	has_many :categories, through: :exercises

end
