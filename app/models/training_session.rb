class TrainingSession < ActiveRecord::Base
	belongs_to :athlete
	belongs_to :period
	belongs_to :category
	has_many :execise_sets

	
end
