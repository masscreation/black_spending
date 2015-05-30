class Category < ActiveRecord::Base
	has_ancestry
	has_many :exercises
	has_many :workouts, through: :exercises
end
