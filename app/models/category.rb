class Category < ActiveRecord::Base
	has_ancestry
	has_many :exercises
	has_many :workouts, through: :exercises

	def children
		self.children
	end
end
