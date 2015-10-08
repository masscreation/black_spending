class Workout < ActiveRecord::Base
	belongs_to :category
	has_many :exercises
end
