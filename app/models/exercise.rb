class Exercise < ActiveRecord::Base
	belongs_to :category
	belongs_to :workout
	validates :name, :description, :instructions, presence: true
end
