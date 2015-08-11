class Workout < ActiveRecord::Base
	belongs_to :training_program
	belongs_to :category
	has_many :exercises

end
