class TrainingSession < ActiveRecord::Base
	belongs_to :athlete
	belongs_to :period
	belongs_to :category
	has_many :exercise_sets
	accepts_nested_attributes_for :exercise_sets
	
end
